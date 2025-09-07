/**
 * Animals Layout Component for Spirit Animal Discovery Website
 * 
 * This layout component provides metadata for the animals page since
 * the main animals page is a client component and cannot export metadata.
 * 
 * Author: Spirit Animal Discovery Team
 * Date: 2024
 * Purpose: Provide SEO metadata for the animals page
 */

import { Metadata } from 'next'

/**
 * Metadata for the animals page
 * 
 * This metadata helps search engines understand the animals page content
 * and improves discoverability for users browsing spirit animals.
 */
export const metadata: Metadata = {
  title: 'All Spirit Animals - Complete Guide to Spirit Animal Meanings',
  description: 'Browse our complete database of spirit animals. Learn about the meaning, symbolism, and traits of each spirit animal. Discover your connection to the animal kingdom.',
  openGraph: {
    title: 'All Spirit Animals - Complete Guide to Spirit Animal Meanings',
    description: 'Browse our complete database of spirit animals. Learn about the meaning, symbolism, and traits of each spirit animal. Discover your connection to the animal kingdom.',
    images: [
      {
        url: '/images/animals-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'All Spirit Animals - Complete guide to spirit animal meanings and symbolism',
      },
    ],
  },
}

/**
 * Animals Layout Component
 * 
 * This component simply renders its children since the animals page
 * handles all the functionality as a client component.
 * 
 * @param children - The animals page content
 * @returns JSX element with the animals layout
 */
export default function AnimalsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
