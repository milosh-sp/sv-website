import { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';

// Types for the request body
interface FormSubmissionData {
  email: string;
  fields?: {
    linkedin?: string;
    user_type?: string;
    pain_point?: string;
    source?: string;
  };
}

// Validation functions
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validateLinkedIn = (url: string): boolean => {
  if (!url) return false; // LinkedIn is mandatory
  const linkedinRegex = /^https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-]+\/?$/;
  return linkedinRegex.test(url);
};

// CORS headers for static site compatibility
const corsHeaders = {
  'Access-Control-Allow-Origin': '*', // In production, replace with your domain
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Max-Age': '86400',
};

// Main handler function
export const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  // Handle preflight OPTIONS request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: corsHeaders,
      body: '',
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        success: false,
        error: 'Method not allowed. Only POST requests are accepted.',
      }),
    };
  }

  try {
    // Parse request body
    if (!event.body) {
      return {
        statusCode: 400,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          success: false,
          error: 'Request body is required.',
        }),
      };
    }

    let requestData: FormSubmissionData;
    try {
      requestData = JSON.parse(event.body);
    } catch (parseError) {
      return {
        statusCode: 400,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          success: false,
          error: 'Invalid JSON in request body.',
        }),
      };
    }

    // Validate required fields
    const { email, fields = {} } = requestData;

    if (!email) {
      return {
        statusCode: 400,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          success: false,
          error: 'Email is required.',
        }),
      };
    }

    if (!validateEmail(email)) {
      return {
        statusCode: 400,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          success: false,
          error: 'Please provide a valid email address.',
        }),
      };
    }

    if (fields.linkedin && !validateLinkedIn(fields.linkedin)) {
      return {
        statusCode: 400,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          success: false,
          error: 'Please provide a valid LinkedIn profile URL.',
        }),
      };
    }

    // Get API token from environment variables
    const apiToken = process.env.SENDER_API_TOKEN;
    if (!apiToken) {
      console.error('SENDER_API_TOKEN environment variable is not set');
      return {
        statusCode: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          success: false,
          error: 'Server configuration error. Please try again later.',
        }),
      };
    }

    // Prepare data for Sender.net API
    const senderData = {
      email,
      fields: {
        ...fields,
        // Add timestamp for tracking
        signup_timestamp: new Date().toISOString(),
      },
    };

    // Make request to Sender.net API
    const senderResponse = await fetch('https://api.sender.net/v2/subscribers', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiToken}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(senderData),
    });

    const senderResponseData = await senderResponse.json();

    // Handle Sender.net API response
    if (!senderResponse.ok) {
      console.error('Sender.net API error:', {
        status: senderResponse.status,
        statusText: senderResponse.statusText,
        data: senderResponseData,
      });

      // Check for specific error types
      if (senderResponse.status === 422) {
        // Validation error from Sender.net
        return {
          statusCode: 400,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            success: false,
            error: senderResponseData.message || 'Validation error occurred.',
          }),
        };
      }

      if (senderResponse.status === 409) {
        // Subscriber already exists
        return {
          statusCode: 409,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            success: false,
            error: 'This email is already subscribed.',
          }),
        };
      }

      // Generic error for other cases
      return {
        statusCode: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          success: false,
          error: 'Failed to subscribe. Please try again later.',
        }),
      };
    }

    // Success response
    return {
      statusCode: 200,
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        success: true,
        message: 'Successfully subscribed!',
        data: {
          email,
          timestamp: new Date().toISOString(),
        },
      }),
    };

  } catch (error) {
    console.error('Unexpected error in form-submit function:', error);
    
    return {
      statusCode: 500,
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        success: false,
        error: 'An unexpected error occurred. Please try again later.',
      }),
    };
  }
};
