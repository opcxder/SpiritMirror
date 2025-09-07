/**
 * Result Page Component for Spirit Animal Discovery Website
 * 
 * This page displays the user's spirit animal result after completing the quiz.
 * It shows detailed information about their spirit animal, including traits,
 * strengths, challenges, and life lessons.
 * 
 * Author: Spirit Animal Discovery Team
 * Date: 2024
 * Purpose: Display quiz results and spirit animal information
 * 
 * Features:
 * - Spirit animal result display
 * - Detailed animal profile information
 * - Confidence level indicator
 * - Sharing functionality
 * - Retake quiz option
 * - Related animals suggestions
 * - Mobile-responsive design
 */

'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import ResultDisplay from '@/components/result/ResultDisplay'
import { QuizResult, SpiritAnimal } from '@/lib/types'
import animalsData from '@/data/animals.json'

/**
 * Main Result Page Component
 * 
 * This component manages the result display, including:
 * - Loading result data from session storage
 * - Finding the corresponding spirit animal information
 * - Handling result sharing and retake functionality
 * - Error handling for missing results
 * 
 * @returns JSX element with the complete result display
 */
export default function ResultPage() {
  // Router for navigation
  const router = useRouter()
  
  // State management
  const [result, setResult] = useState<QuizResult | null>(null)
  const [primaryAnimal, setPrimaryAnimal] = useState<SpiritAnimal | null>(null)
  const [secondaryAnimal, setSecondaryAnimal] = useState<SpiritAnimal | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  /**
   * Load result data from session storage
   * 
   * This effect runs when the component mounts and loads the quiz result
   * from session storage, then finds the corresponding animal information.
   */
  useEffect(() => {
    try {
      // Load result from session storage
      const storedResult = sessionStorage.getItem('spiritAnimalResult')
      
      if (!storedResult) {
        // No result found, redirect to quiz
        router.push('/quiz')
        return
      }

      // Parse the result data
      const quizResult: QuizResult = JSON.parse(storedResult)
      setResult(quizResult)

      // Find the primary spirit animal information
      const primaryAnimalData = animalsData.find(
        animal => animal.id.toLowerCase() === quizResult.primary.animalName.toLowerCase()
      )

      if (!primaryAnimalData) {
        throw new Error('Primary spirit animal not found')
      }

      // Type assertion to ensure tier is treated as AnimalTier
      setPrimaryAnimal(primaryAnimalData as SpiritAnimal)

      // Find secondary animal if it exists
      if (quizResult.secondary) {
        const secondaryAnimalData = animalsData.find(
          animal => animal.id.toLowerCase() === quizResult.secondary!.animalName.toLowerCase()
        )
        
        if (secondaryAnimalData) {
          // Type assertion to ensure tier is treated as AnimalTier
          setSecondaryAnimal(secondaryAnimalData as SpiritAnimal)
        }
      }

      setIsLoading(false)
    } catch (err) {
      console.error('Error loading result:', err)
      setError('Failed to load your spirit animal result. Please try taking the quiz again.')
      setIsLoading(false)
    }
  }, [router])

  /**
   * Handle retake quiz
   * 
   * This function allows users to retake the quiz if they want to try again.
   * It clears the stored results and redirects to the quiz page.
   */
  const handleRetakeQuiz = () => {
    // Clear stored results
    sessionStorage.removeItem('spiritAnimalResult')
    sessionStorage.removeItem('quizResponses')
    
    // Redirect to quiz
    router.push('/quiz')
  }

  /**
   * Handle sharing result
   * 
   * This function handles sharing the result on social media or copying
   * the result link to the clipboard.
   */
  const handleShareResult = () => {
    if (!result || !primaryAnimal) return

    const shareText = `I discovered my spirit animal is the ${primaryAnimal.name}! 🦅 Take the quiz to find yours: ${window.location.origin}`
    const shareUrl = window.location.origin

    // Check if Web Share API is available
    if (navigator.share) {
      navigator.share({
        title: `My Spirit Animal: ${primaryAnimal.name}`,
        text: shareText,
        url: shareUrl
      }).catch(err => {
        console.log('Error sharing:', err)
        // Fallback to clipboard
        copyToClipboard(shareText)
      })
    } else {
      // Fallback to clipboard
      copyToClipboard(shareText)
    }
  }

  /**
   * Copy text to clipboard
   * 
   * @param text - Text to copy to clipboard
   */
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      // You could show a toast notification here
      alert('Result copied to clipboard!')
    } catch (err) {
      console.error('Failed to copy to clipboard:', err)
      alert('Failed to copy to clipboard')
    }
  }

  /**
   * Handle going back to home
   */
  const handleGoHome = () => {
    router.push('/')
  }

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-moon-beige flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-mystic-sage border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-2xl font-semibold text-charcoal-mist mb-2">
            Preparing Your Result
          </h2>
          <p className="text-silver-fog">
            Analyzing your responses...
          </p>
        </div>
      </div>
    )
  }

  // Error state
  if (error || !result || !primaryAnimal) {
    return (
      <div className="min-h-screen bg-moon-beige flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-6xl mb-4">😔</div>
          <h2 className="text-2xl font-semibold text-charcoal-mist mb-4">
            Result Not Found
          </h2>
          <p className="text-silver-fog mb-6">
            {error || 'We couldn\'t find your quiz result. Please take the quiz again.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleRetakeQuiz}
              className="btn btn-primary"
            >
              Take Quiz Again
            </button>
            <button 
              onClick={handleGoHome}
              className="btn btn-outline"
            >
              Go Home
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Main result display
  return (
    <div className="min-h-screen bg-moon-beige">
      {/* Result header */}
      <div className="bg-soft-ivory border-b border-mystic-sage/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-charcoal-mist">
                Your Spirit Animal Result
              </h1>
              <p className="text-silver-fog">
                Discover the wisdom of your spirit animal
              </p>
            </div>
            <button
              onClick={handleGoHome}
              className="text-silver-fog hover:text-charcoal-mist transition-colors"
              title="Go home"
            >
              🏠
            </button>
          </div>
        </div>
      </div>

      {/* Result display component */}
      <div className="container mx-auto px-4 py-8">
        <ResultDisplay
          result={result}
          primaryAnimal={primaryAnimal}
          secondaryAnimal={secondaryAnimal}
          onRetake={handleRetakeQuiz}
          onShare={handleShareResult}
        />
      </div>
    </div>
  )
}
