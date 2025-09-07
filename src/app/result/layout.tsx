/**
 * Result Layout Component for Spirit Animal Discovery Website
 * 
 * This layout component provides metadata for the result page since
 * the main result page is a client component and cannot export metadata.
 * 
 * Author: Spirit Animal Discovery Team
 * Date: 2024
 * Purpose: Provide SEO metadata for the result page
 */

import { Metadata } from 'next'

/**
 * Metadata for the result page
 * 
 * This metadata is for the general result page. Individual results
 * will have dynamic metadata based on the user's spirit animal.
 */
export const metadata: Metadata = {
  title: 'Your Spirit Animal Result - Discover Your True Nature',
  description: 'Discover your spirit animal and unlock insights about your personality, strengths, and life path. Get personalized guidance based on your quiz results.',
  openGraph: {
    title: 'Your Spirit Animal Result - Discover Your True Nature',
    description: 'Discover your spirit animal and unlock insights about your personality, strengths, and life path. Get personalized guidance based on your quiz results.',
    images: [
      {
        url: '/images/result-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Spirit Animal Result - Your personalized spirit animal discovery',
      },
    ],
  },
}

/**
 * Result Layout Component
 * 
 * This component simply renders its children since the result page
 * handles all the functionality as a client component.
 * 
 * @param children - The result page content
 * @returns JSX element with the result layout
 */
export default function ResultLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
