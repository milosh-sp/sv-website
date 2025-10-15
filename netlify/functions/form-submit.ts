import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { validateEmail, validateLinkedIn } from "../../lib/validation";

// Types for the request body
interface FormSubmissionData {
	email: string;
	fields?: {
		linkedin?: string;
		user_type?: string;
		pain_point?: string;
		source?: string;
		website?: string; // Honeypot field
		form_start_time?: string; // For timing validation
	};
}

// CORS headers for static site compatibility
const corsHeaders = {
	"Access-Control-Allow-Origin": "*", // In production, replace with your domain
	"Access-Control-Allow-Headers": "Content-Type, Authorization",
	"Access-Control-Allow-Methods": "POST, OPTIONS",
	"Access-Control-Max-Age": "86400",
};

// Main handler function
export const handler: Handler = async (
	event: HandlerEvent,
	context: HandlerContext,
) => {
	console.log("Form submit function called:", {
		method: event.httpMethod,
		path: event.path,
		headers: event.headers,
		hasBody: !!event.body,
	});

	// Handle preflight OPTIONS request
	if (event.httpMethod === "OPTIONS") {
		return {
			statusCode: 200,
			headers: corsHeaders,
			body: "",
		};
	}

	// Only allow POST requests
	if (event.httpMethod !== "POST") {
		return {
			statusCode: 405,
			headers: {
				...corsHeaders,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				success: false,
				error: "Method not allowed. Only POST requests are accepted.",
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
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					success: false,
					error: "Request body is required.",
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
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					success: false,
					error: "Invalid JSON in request body.",
				}),
			};
		}

		// Validate required fields
		const { email, fields = {} } = requestData;

		// Honeypot validation - if website field is filled, it's likely a bot
		if (fields.website && fields.website.trim() !== "") {
			console.log("Bot detected via honeypot field:", fields.website);
			return {
				statusCode: 400,
				headers: {
					...corsHeaders,
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					success: false,
					error: "Invalid submission detected.",
				}),
			};
		}

		// Additional timing validation (if form_start_time is provided)
		if (fields.form_start_time) {
			const startTime = new Date(fields.form_start_time).getTime();
			const currentTime = Date.now();
			const timeTaken = currentTime - startTime;

			// Check if form was submitted too quickly (less than 2 seconds)
			if (timeTaken < 2000) {
				console.log("Bot detected: form submitted too quickly", timeTaken);
				return {
					statusCode: 400,
					headers: {
						...corsHeaders,
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						success: false,
						error: "Invalid submission detected.",
					}),
				};
			}

			// Check if form was submitted too slowly (more than 30 minutes)
			if (timeTaken > 30 * 60 * 1000) {
				console.log("Bot detected: form session expired", timeTaken);
				return {
					statusCode: 400,
					headers: {
						...corsHeaders,
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						success: false,
						error: "Form session expired. Please refresh and try again.",
					}),
				};
			}
		}

		if (!email) {
			return {
				statusCode: 400,
				headers: {
					...corsHeaders,
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					success: false,
					error: "Email is required.",
				}),
			};
		}

		const emailValidation = validateEmail(email);
		if (!emailValidation.isValid) {
			return {
				statusCode: 400,
				headers: {
					...corsHeaders,
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					success: false,
					error:
						emailValidation.message || "Please provide a valid email address.",
				}),
			};
		}

		if (fields.linkedin) {
			const linkedinValidation = validateLinkedIn(fields.linkedin);
			if (!linkedinValidation.isValid) {
				return {
					statusCode: 400,
					headers: {
						...corsHeaders,
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						success: false,
						error:
							linkedinValidation.message ||
							"Please provide a valid LinkedIn profile URL.",
					}),
				};
			}
		}

		// Get API token from environment variables
		const apiToken = process.env.SENDER_API_TOKEN;
		if (!apiToken) {
			console.error("SENDER_API_TOKEN environment variable is not set");
			return {
				statusCode: 500,
				headers: {
					...corsHeaders,
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					success: false,
					error: "Server configuration error. Please try again later.",
				}),
			};
		}

		// Prepare data for Sender.net API (exclude honeypot and timing fields)
		const { ...cleanFields } = fields;
		const senderData = {
			email,
			fields: {
				...cleanFields,
				// Add timestamp for tracking
				signup_timestamp: new Date().toISOString(),
			},
		};

		// Make request to Sender.net API
		const senderResponse = await fetch(
			"https://api.sender.net/v2/subscribers",
			{
				method: "POST",
				headers: {
					Authorization: `Bearer ${apiToken}`,
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify(senderData),
			},
		);

		const senderResponseData = await senderResponse.json();

		// Handle Sender.net API response
		if (!senderResponse.ok) {
			console.error("Sender.net API error:", {
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
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						success: false,
						error: senderResponseData.message || "Validation error occurred.",
					}),
				};
			}

			if (senderResponse.status === 409) {
				// Subscriber already exists
				return {
					statusCode: 409,
					headers: {
						...corsHeaders,
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						success: false,
						error: "This email is already subscribed.",
					}),
				};
			}

			// Generic error for other cases
			return {
				statusCode: 500,
				headers: {
					...corsHeaders,
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					success: false,
					error: "Failed to subscribe. Please try again later.",
				}),
			};
		}

		// Success response
		return {
			statusCode: 200,
			headers: {
				...corsHeaders,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				success: true,
				message: "Successfully subscribed!",
				data: {
					email,
					timestamp: new Date().toISOString(),
				},
			}),
		};
	} catch (error) {
		console.error("Unexpected error in form-submit function:", error);

		return {
			statusCode: 500,
			headers: {
				...corsHeaders,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				success: false,
				error: "An unexpected error occurred. Please try again later.",
			}),
		};
	}
};
