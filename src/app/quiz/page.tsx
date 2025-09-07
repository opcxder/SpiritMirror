/**
 * Quiz Page Component for Spirit Animal Discovery Website
 * 
 * This is the main quiz page that hosts the complete quiz flow.
 * It manages the quiz state, question progression, and result calculation.
 * 
 * Author: Spirit Animal Discovery Team
 * Date: 2024
 * Purpose: Main quiz interface for users to discover their spirit animal
 * 
 * Features:
 * - Complete quiz flow with 15 questions
 * - Progress tracking and navigation
 * - Skip functionality for each question
 * - Result calculation and display
 * - Mobile-responsive design
 * - State management for quiz progression
 */

'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import QuizFlow from '@/components/quiz/QuizFlow'
import { Question, QuestionResponse, QuizResult } from '@/lib/types'
import { calculateQuizResult } from '@/lib/quiz-logic'
import questionsData from '@/data/questions.json'

/**
 * Main Quiz Page Component
 * 
 * This component manages the entire quiz experience, including:
 * - Loading quiz questions from the data file
 * - Managing quiz state and progression
 * - Handling quiz completion and result calculation
 * - Navigation to results page
 * 
 * @returns JSX element with the complete quiz interface
 */
export default function QuizPage() {
  // Router for navigation
  const router = useRouter()
  
  // State management for quiz
  const [questions, setQuestions] = useState<Question[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isCompleted, setIsCompleted] = useState(false)
  const [result, setResult] = useState<QuizResult | null>(null)

  /**
   * Load and initialize quiz questions
   * 
   * This effect runs when the component mounts and loads the questions
   * from the JSON data file, sorting them by order for proper display.
   */
  useEffect(() => {
    try {
      // Load questions from the data file
      const loadedQuestions = questionsData as Question[]
      
      // Sort questions by order to ensure proper sequence
      const sortedQuestions = loadedQuestions.sort((a, b) => a.order - b.order)
      
      setQuestions(sortedQuestions)
      setIsLoading(false)
    } catch (err) {
      console.error('Error loading questions:', err)
      setError('Failed to load quiz questions. Please refresh the page.')
      setIsLoading(false)
    }
  }, [])

  /**
   * Handle quiz completion
   * 
   * This function is called when the user completes all questions.
   * It calculates the spirit animal result and stores it for display.
   * 
   * @param responses - Array of user responses to all questions
   */
  const handleQuizComplete = (responses: QuestionResponse[]) => {
    try {
      // Calculate the spirit animal result using the scoring algorithm
      const quizResult = calculateQuizResult(responses)
      
      // Store the result
      setResult(quizResult)
      setIsCompleted(true)
      
      // Store result in sessionStorage for the results page
      sessionStorage.setItem('spiritAnimalResult', JSON.stringify(quizResult))
      sessionStorage.setItem('quizResponses', JSON.stringify(responses))
      
      // Navigate to results page after a short delay
      setTimeout(() => {
        router.push('/result')
      }, 1500)
      
    } catch (err) {
      console.error('Error calculating result:', err)
      setError('Failed to calculate your spirit animal result. Please try again.')
    }
  }

  /**
   * Handle quiz skip (if user wants to skip the entire quiz)
   * 
   * This function is called if the user decides to skip the quiz entirely.
   * It provides a fallback option and redirects to the landing page.
   */
  const handleQuizSkip = () => {
    // Redirect to landing page if user skips
    router.push('/')
  }

  /**
   * Handle retry quiz
   * 
   * This function allows users to retake the quiz if they're not satisfied
   * with their results or want to try again.
   */
  const handleRetryQuiz = () => {
    // Reset quiz state
    setIsCompleted(false)
    setResult(null)
    setError(null)
    
    // Clear stored results
    sessionStorage.removeItem('spiritAnimalResult')
    sessionStorage.removeItem('quizResponses')
  }

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-moon-beige flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-mystic-sage border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-2xl font-semibold text-charcoal-mist mb-2">
            Preparing Your Journey
          </h2>
          <p className="text-silver-fog">
            Loading the mystical questions...
          </p>
        </div>
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-moon-beige flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-6xl mb-4">😔</div>
          <h2 className="text-2xl font-semibold text-charcoal-mist mb-4">
            Something Went Wrong
          </h2>
          <p className="text-silver-fog mb-6">
            {error}
          </p>
          <button 
            onClick={() => window.location.reload()}
            className="btn btn-primary"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  // Quiz completion state
  if (isCompleted && result) {
    return (
      <div className="min-h-screen bg-moon-beige flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-6xl mb-4 animate-pulse-gentle">✨</div>
          <h2 className="text-3xl font-bold text-charcoal-mist mb-4">
            Quiz Complete!
          </h2>
          <p className="text-xl text-silver-fog mb-6">
            Calculating your spirit animal...
          </p>
          <div className="w-16 h-16 border-4 border-mystic-sage border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    )
  }

  // Main quiz interface
  return (
    <div className="min-h-screen bg-moon-beige">
      {/* Quiz header */}
      <div className="bg-soft-ivory border-b border-mystic-sage/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-charcoal-mist mt-4">
                Spirit Animal Discovery
              </h1>
              <p className="text-silver-fog ">
                Answer 15 questions to discover your true spirit animal
              </p>
            </div>
            <button
              onClick={handleQuizSkip}
              className="text-silver-fog hover:text-charcoal-mist transition-colors"
              title="Skip quiz"
            >
              ✕
            </button>
          </div>
        </div>
      </div>

      {/* Quiz flow component */}
      <div className="container mx-auto px-4 py-8">
        <QuizFlow
          questions={questions}
          onComplete={handleQuizComplete}
          onSkip={handleQuizSkip}
        />
      </div>
    </div>
  )
}
