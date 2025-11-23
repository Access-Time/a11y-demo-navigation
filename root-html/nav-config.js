/**
 * Shared Navigation Configuration
 * Auto-detects environment (localhost vs production) and provides URLs for cross-app navigation
 * Usage in HTML: <script src="nav-config.js"></script> then use window.navConfig
 */

(function() {
  'use strict';

  // Detect if running on localhost
  function isLocalhost() {
    if (typeof window === 'undefined') {
      return false;
    }
    
    const hostname = window.location.hostname;
    const port = window.location.port;
    
    return hostname === 'localhost' || 
           hostname === '127.0.0.1' || 
           ['8080', '5173', '3001'].includes(port);
  }

  // Build navigation URLs
  function getNavUrls() {
    const isDev = isLocalhost();
    
    if (isDev) {
      return {
        react: 'http://localhost:5173',
        next: 'http://localhost:3001'
      };
    }

    const reactUrl = 'https://a11y-demo-navigation-reactjs.vercel.app/'
    const nextUrl = 'https://a11y-demo-navigation-nextjs.vercel.app/'

    return {
      root: rootUrl,
      react: reactUrl,
      next: nextUrl
    };
  }

  // Export for browser script tag usage
  if (typeof window !== 'undefined') {
    window.navConfig = getNavUrls();
  }
})();

