/**
 * Quiz Layout Component for Spirit Animal Discovery Website
 * 
 * This layout component provides metadata for the quiz page since
 * the main quiz page is a client component and cannot export metadata.
 * 
 * Author: Spirit Animal Discovery Team
 * Date: 2024
 * Purpose: Provide SEO metadata for the quiz page
 */

import { Metadata } from 'next'

/**
 * Metadata for the quiz page
 * 
 * This metadata helps search engines understand the quiz page content
 * and improves discoverability for users searching for spirit animal quizzes.
 */
export const metadata: Metadata = {
  title: 'Spirit Animal Quiz - Discover Your True Spirit Animal',
  description: 'Take our free spirit animal quiz to discover your true spirit animal. Answer 15 mystical questions and receive personalized insights about your personality, strengths, and life path.',
  openGraph: {
    title: 'Spirit Animal Quiz - Discover Your True Spirit Animal',
    description: 'Take our free spirit animal quiz to discover your true spirit animal. Answer 15 mystical questions and receive personalized insights about your personality, strengths, and life path.',
    images: [
      {
        url: '/images/quiz-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Spirit Animal Quiz - Mystical forest quiz interface',
      },
    ],
  },
}

/**
 * Quiz Layout Component
 * 
 * This component simply renders its children since the quiz page
 * handles all the functionality as a client component.
 * 
 * @param children - The quiz page content
 * @returns JSX element with the quiz layout
 */
export default function QuizLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
