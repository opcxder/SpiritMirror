/**
 * Root Layout Component for Spirit Animal Discovery Website
 * 
 * This file defines the root layout that wraps all pages in the application.
 * It includes the HTML structure, metadata, and global providers.
 * 
 * Author: Spirit Animal Discovery Team
 * Date: 2024
 * Purpose: Root layout wrapper for all pages with metadata and global styles
 * 
 * Functions:
 * - RootLayout: Main layout component that wraps all pages
 * - Metadata: SEO and social media metadata configuration
 * - Global providers and context setup
 */

import type { Metadata } from 'next'
import { Inter, Open_Sans, Crimson_Text } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

// Font configuration for the design system
// Inter: Modern, clean headings
// Open Sans: Readable, friendly body text  
// Crimson Text: Mystical touch for spirit animal names
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const openSans = Open_Sans({ 
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
})

const crimsonText = Crimson_Text({ 
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-crimson-text',
  display: 'swap',
})

/**
 * Metadata configuration for SEO and social media
 * 
 * This metadata object defines how the site appears in search results,
 * social media shares, and browser tabs. It's essential for SEO and
 * user experience across different platforms.
 */
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#9CAF88' },
    { media: '(prefers-color-scheme: dark)', color: '#6B7C5E' },
  ],
}

export const metadata: Metadata = {
  // Base URL for resolving relative URLs in metadata
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  
  // Primary title and description for SEO
  title: {
    default: 'Spirit Animal Discovery - Find Your True Spirit Animal',
    template: '%s | Spirit Animal Discovery'
  },
  description: 'Discover your true spirit animal through our intelligent questionnaire. Get personalized insights about your personality, strengths, and life path. Free, accurate, and mystical.',
  
  // Keywords for SEO optimization
  keywords: [
    'spirit animal quiz',
    'find my spirit animal', 
    'what is my spirit animal',
    'spirit animal test',
    'spirit animal meaning',
    'spirit animal symbolism',
    'personality quiz',
    'spiritual journey',
    'animal totem',
    'spirit guide'
  ],
  
  // Authors and creators
  authors: [{ name: 'Spirit Animal Discovery Team' }],
  
  // Open Graph metadata for social media sharing
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://spiritmirror.vercel.app',
    siteName: 'Spirit Animal Discovery',
    title: 'Spirit Animal Discovery - Find Your True Spirit Animal',
    description: 'Discover your true spirit animal through our intelligent questionnaire. Get personalized insights about your personality, strengths, and life path.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Spirit Animal Discovery - Mystical forest with spirit animals',
      },
    ],
  },
  
  // Twitter Card metadata
  twitter: {
    card: 'summary_large_image',
    title: 'Spirit Animal Discovery - Find Your True Spirit Animal',
    description: 'Discover your true spirit animal through our intelligent questionnaire. Get personalized insights about your personality, strengths, and life path.',
    images: ['/images/twitter-card.jpg'],
    creator: '@SpiritAnimalApp',
  },
  
  // Additional metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Verification tags for search engines
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  
  // App-specific metadata
  applicationName: 'Spirit Animal Discovery',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  
  // Icons and manifest
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  manifest: '/site.webmanifest',
  
  
  // Additional metadata for better SEO
  category: 'spirituality',
  classification: 'Spirituality and Personal Development',
  
  // Language and locale
  alternates: {
    canonical: 'https://spiritmirror.vercel.app',
    languages: {
      'en-US': 'https://spiritmirror.vercel.app',
    },
  },
}

/**
 * Root Layout Component
 * 
 * This is the main layout component that wraps all pages in the application.
 * It provides the HTML structure, font loading, and global context providers.
 * 
 * @param children - The page content to be rendered
 * @returns JSX element with the complete page layout
 * 
 * Features:
 * - Font loading optimization with next/font
 * - Global CSS styles
 * - HTML structure with proper semantic elements
 * - Accessibility attributes
 * - SEO-friendly structure
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable} ${openSans.variable} ${crimsonText.variable}`}
    >
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Additional meta tags for better SEO */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Spirit Animal Discovery" />
        
        {/* Structured data for rich snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Spirit Animal Discovery",
              "description": "Discover your true spirit animal through our intelligent questionnaire",
              "url": "https://spiritmirror.vercel.app",
              "applicationCategory": "LifestyleApplication",
              "operatingSystem": "Web Browser",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "author": {
                "@type": "Organization",
                "name": "Spirit Animal Discovery Team"
              }
            })
          }}
        />
      </head>
      
      <body className="min-h-screen bg-moon-beige text-charcoal-mist antialiased">
        {/* Skip to main content link for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-mystic-sage text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>
        
        {/* Main application wrapper */}
        <div id="app" className="min-h-screen flex flex-col">
          {/* Navigation bar */}
          <Navbar />
          
          {/* Main content area */}
          <main id="main-content" className="flex-1">
            {children}
          </main>
          
          {/* Footer */}
          <Footer />
        </div>
        
        {/* Google Analytics script (to be added in production) */}
        {process.env.NODE_ENV === 'production' && (
          <>
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'GA_MEASUREMENT_ID');
                `,
              }}
            />
          </>
        )}
      </body>
    </html>
  )
}
