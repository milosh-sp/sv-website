#!/usr/bin/env node

/**
 * SEO Testing and Validation Script
 * Run this script to validate SEO implementations
 */

const fs = require('fs')

// Colors for console output
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
}

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`)
}

function checkFile(filePath, description) {
  const exists = fs.existsSync(filePath)
  log(`${exists ? '✅' : '❌'} ${description}: ${filePath}`, exists ? 'green' : 'red')
  return exists
}

function checkFileContent(filePath, searchText, description) {
  try {
    const content = fs.readFileSync(filePath, 'utf8')
    const found = content.includes(searchText)
    log(`${found ? '✅' : '❌'} ${description}`, found ? 'green' : 'red')
    return found
  } catch (error) {
    log(`❌ ${description} (file not found)`, 'red')
    return false
  }
}

function runSEOTests() {
  log('\n🔍 Running SEO Tests and Validation\n', 'bold')

  let passedTests = 0
  let totalTests = 0

  // Test 1: Essential Files
  log('📁 Checking Essential SEO Files:', 'blue')
  totalTests += 4
  passedTests += checkFile('public/robots.txt', 'Robots.txt') ? 1 : 0
  passedTests += checkFile('public/site.webmanifest', 'Web Manifest') ? 1 : 0
  passedTests += checkFile('public/og-image.jpg', 'Open Graph Image') ? 1 : 0
  passedTests += checkFile('public/favicon.ico', 'Favicon') ? 1 : 0

  // Test 2: SEO Library
  log('\n📚 Checking SEO Library:', 'blue')
  totalTests += 3
  passedTests += checkFile('lib/seo.ts', 'SEO utilities') ? 1 : 0
  passedTests += checkFile('lib/sitemap.ts', 'Sitemap utilities') ? 1 : 0
  passedTests += checkFileContent('lib/seo.ts', 'generateMetadata', 'Metadata generation function') ? 1 : 0

  // Test 3: Sitemap Routes
  log('\n🗺️ Checking Sitemap Routes:', 'blue')
  totalTests += 3
  passedTests += checkFile('app/sitemap.xml/route.ts', 'Main sitemap route') ? 1 : 0
  passedTests += checkFile('app/sitemap-pages.xml/route.ts', 'Pages sitemap route') ? 1 : 0
  passedTests += checkFile('app/sitemap-images.xml/route.ts', 'Images sitemap route') ? 1 : 0

  // Test 4: Page Structure
  log('\n📄 Checking Page Structure:', 'blue')
  totalTests += 4
  passedTests += checkFile('app/layout.tsx', 'Root layout') ? 1 : 0
  passedTests += checkFile('app/not-found.tsx', '404 page') ? 1 : 0
  passedTests += checkFile('app/privacy-policy/page.tsx', 'Privacy policy page') ? 1 : 0
  passedTests += checkFile('app/terms-of-service/page.tsx', 'Terms of service page') ? 1 : 0

  // Test 5: Components
  log('\n🧩 Checking SEO Components:', 'blue')
  totalTests += 4
  passedTests += checkFile('components/ui/breadcrumb.tsx', 'Breadcrumb component') ? 1 : 0
  passedTests += checkFile('components/ui/optimized-image.tsx', 'Optimized image component') ? 1 : 0
  passedTests += checkFile('components/performance-monitor.tsx', 'Performance monitor') ? 1 : 0
  passedTests += checkFile('components/ui/lazy-section.tsx', 'Lazy loading component') ? 1 : 0

  // Test 6: Configuration
  log('\n⚙️ Checking Configuration:', 'blue')
  totalTests += 2
  passedTests += checkFileContent('next.config.mjs', 'headers()', 'Next.js headers configuration') ? 1 : 0
  passedTests += checkFileContent('next.config.mjs', 'redirects()', 'Next.js redirects configuration') ? 1 : 0

  // Test 7: Meta Tags
  log('\n🏷️ Checking Meta Tags Implementation:', 'blue')
  totalTests += 3
  passedTests += checkFileContent('app/layout.tsx', 'defaultMetadata', 'Default metadata import') ? 1 : 0
  passedTests += checkFileContent('app/layout.tsx', 'viewport', 'Viewport configuration') ? 1 : 0
  passedTests += checkFileContent('app/layout.tsx', 'application/ld+json', 'Structured data in layout') ? 1 : 0

  // Test 8: Accessibility
  log('\n♿ Checking Accessibility Features:', 'blue')
  totalTests += 3
  passedTests += checkFileContent('app/layout.tsx', 'Skip to main content', 'Skip to content link') ? 1 : 0
  passedTests += checkFileContent('components/faq.tsx', 'aria-expanded', 'ARIA attributes in FAQ') ? 1 : 0
  passedTests += checkFileContent('components/ui/breadcrumb.tsx', 'aria-label', 'ARIA labels in breadcrumb') ? 1 : 0

  // Test 9: Performance Features
  log('\n⚡ Checking Performance Features:', 'blue')
  totalTests += 3
  passedTests += checkFileContent('app/layout.tsx', 'preconnect', 'Resource hints') ? 1 : 0
  passedTests += checkFileContent('components/ui/optimized-image.tsx', 'loading="lazy"', 'Lazy loading images') ? 1 : 0
  passedTests += checkFileContent('components/performance-monitor.tsx', 'PerformanceObserver', 'Core Web Vitals monitoring') ? 1 : 0

  // Test 10: Robots.txt Content
  log('\n🤖 Checking Robots.txt Content:', 'blue')
  totalTests += 3
  passedTests += checkFileContent('public/robots.txt', 'Sitemap:', 'Sitemap declaration in robots.txt') ? 1 : 0
  passedTests += checkFileContent('public/robots.txt', 'User-agent: *', 'User-agent directive') ? 1 : 0
  passedTests += checkFileContent('public/robots.txt', 'Allow: /', 'Allow directive') ? 1 : 0

  // Summary
  log('\n📊 Test Results Summary:', 'bold')
  const percentage = Math.round((passedTests / totalTests) * 100)
  const color = percentage >= 90 ? 'green' : percentage >= 70 ? 'yellow' : 'red'

  log(`Passed: ${passedTests}/${totalTests} tests (${percentage}%)`, color)

  if (percentage >= 90) {
    log('\n🎉 Excellent! Your SEO implementation is comprehensive.', 'green')
  } else if (percentage >= 70) {
    log('\n⚠️ Good progress! Consider addressing the failing tests.', 'yellow')
  } else {
    log('\n❌ More work needed. Please address the failing tests.', 'red')
  }

  // Recommendations
  log('\n💡 Next Steps:', 'blue')
  log('1. Build and test your application: npm run build')
  log('2. Validate structured data: https://search.google.com/test/rich-results')
  log('3. Test Open Graph: https://developers.facebook.com/tools/debug/')
  log('4. Check Core Web Vitals: https://pagespeed.web.dev/')
  log('5. Validate HTML: https://validator.w3.org/')
  log('6. Test accessibility: https://wave.webaim.org/')
  log('7. Submit sitemap to Google Search Console')
  log('8. Monitor performance with Google Analytics and Search Console')

  return percentage >= 70
}

// Run the tests
if (require.main === module) {
  const success = runSEOTests()
  process.exit(success ? 0 : 1)
}

module.exports = { runSEOTests }
