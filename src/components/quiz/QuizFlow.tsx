/**
 * Quiz Flow Component for Spirit Animal Discovery Website
 * 
 * This component manages the complete quiz flow, including question display,
 * answer selection, progress tracking, and navigation between questions.
 * 
 * Author: Spirit Animal Discovery Team
 * Date: 2024
 * Purpose: Core quiz interface component that handles the entire quiz experience
 * 
 * Features:
 * - Question-by-question progression
 * - Answer selection with visual feedback
 * - Progress bar and question counter
 * - Skip functionality for individual questions
 * - Smooth animations and transitions
 * - Mobile-responsive design
 * - State management for quiz progression
 */

'use client'

import { useState, useEffect } from 'react'
import { Question, QuestionResponse, QuizFlowProps, QuizProgress } from '@/lib/types'
import QuestionCard from './QuestionCard'
import ProgressBar from './ProgressBar'

/**
 * Main Quiz Flow Component
 * 
 * This component orchestrates the entire quiz experience by:
 * - Managing current question state
 * - Tracking user responses
 * - Handling question navigation
 * - Calculating progress
 * - Managing quiz completion
 * 
 * @param questions - Array of quiz questions to display
 * @param onComplete - Callback function called when quiz is completed
 * @param onSkip - Optional callback function for skipping the entire quiz
 * @returns JSX element with the complete quiz flow interface
 */
export default function QuizFlow({ questions, onComplete, onSkip }: QuizFlowProps) {
  // State management for quiz progression
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [responses, setResponses] = useState<QuestionResponse[]>([])
  const [highestAnsweredQuestion, setHighestAnsweredQuestion] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [showCompletion, setShowCompletion] = useState(false)

  // Calculate current question and progress
  const currentQuestion = questions[currentQuestionIndex]
  const totalQuestions = questions.length
  const answeredQuestions = highestAnsweredQuestion
  const skippedQuestions = responses.filter(r => r.selectedOption === 'skip').length

  // Find previously selected option for current question
  const previouslySelectedOption = responses.find(r => r.questionId === currentQuestion.id)?.selectedOption
  
  // Determine if user is reviewing a previous question
  const isReviewing = currentQuestionIndex < highestAnsweredQuestion

  /**
   * Calculate quiz progress for display
   * 
   * @returns QuizProgress object with current state information
   */
  const calculateProgress = (): QuizProgress => {
    return {
      currentQuestion: currentQuestionIndex + 1,
      totalQuestions,
      answeredQuestions,
      skippedQuestions,
      progressPercentage: Math.round((answeredQuestions / totalQuestions) * 100)
    }
  }

  /**
   * Handle answer selection for current question
   * 
   * This function is called when the user selects an answer option.
   * It stores the response and moves to the next question.
   * 
   * @param optionId - The ID of the selected answer option (A, B, C, D, E, F)
   */
  const handleAnswerSelect = (optionId: string) => {
    if (isTransitioning) return

    // Find the selected option and its points
    const selectedOption = currentQuestion.options.find(opt => opt.id === optionId)
    if (!selectedOption) return

    // Create response object
    const response: QuestionResponse = {
      questionId: currentQuestion.id,
      selectedOption: optionId,
      points: selectedOption.points,
      timestamp: Date.now()
    }

    // Update or add response to the responses array
    const existingResponseIndex = responses.findIndex(r => r.questionId === currentQuestion.id)
    let newResponses: QuestionResponse[]
    let isNewQuestion = false
    
    if (existingResponseIndex >= 0) {
      // Update existing response
      newResponses = [...responses]
      newResponses[existingResponseIndex] = response
    } else {
      // Add new response
      newResponses = [...responses, response]
      isNewQuestion = currentQuestionIndex >= highestAnsweredQuestion
    }
    
    setResponses(newResponses)

    // Move to next question or complete quiz
    moveToNextQuestion(newResponses, isNewQuestion)
  }

  /**
   * Handle question skip
   * 
   * This function is called when the user chooses to skip the current question.
   * It records a skip response and moves to the next question.
   */
  const handleQuestionSkip = () => {
    if (isTransitioning) return

    // Create skip response
    const skipResponse: QuestionResponse = {
      questionId: currentQuestion.id,
      selectedOption: 'skip',
      points: {},
      timestamp: Date.now()
    }

    // Update or add skip response to the responses array
    const existingResponseIndex = responses.findIndex(r => r.questionId === currentQuestion.id)
    let newResponses: QuestionResponse[]
    let isNewQuestion = false
    
    if (existingResponseIndex >= 0) {
      // Update existing response
      newResponses = [...responses]
      newResponses[existingResponseIndex] = skipResponse
    } else {
      // Add new response
      newResponses = [...responses, skipResponse]
      isNewQuestion = currentQuestionIndex >= highestAnsweredQuestion
    }
    
    setResponses(newResponses)

    // Move to next question or complete quiz
    moveToNextQuestion(newResponses, isNewQuestion)
  }

  /**
   * Move to the next question or complete the quiz
   * 
   * This function handles the transition to the next question or quiz completion.
   * It includes smooth transition animations and proper state management.
   * 
   * @param newResponses - Updated responses array
   * @param isNewQuestion - Whether this was a new question being answered
   */
  const moveToNextQuestion = (newResponses: QuestionResponse[], isNewQuestion: boolean) => {
    setIsTransitioning(true)

    // Update highest answered question if this was a new question
    if (isNewQuestion) {
      setHighestAnsweredQuestion(currentQuestionIndex + 1)
    }

    // Check if this is the last question
    if (currentQuestionIndex >= totalQuestions - 1) {
      // Quiz completed - show completion state briefly then call onComplete
      setShowCompletion(true)
      setTimeout(() => {
        onComplete(newResponses)
      }, 1500)
    } else {
      // Move to next question with smooth transition
      setTimeout(() => {
        setCurrentQuestionIndex(prev => prev + 1)
        setIsTransitioning(false)
      }, 300)
    }
  }

  /**
   * Handle going back to previous question
   * 
   * This function allows users to go back and change their previous answer.
   * It moves back one question without removing responses.
   */
  const handleGoBack = () => {
    if (currentQuestionIndex === 0 || isTransitioning) return

    setIsTransitioning(true)

    // Move back to previous question
    setTimeout(() => {
      setCurrentQuestionIndex(prev => prev - 1)
      setIsTransitioning(false)
    }, 300)
  }

  /**
   * Handle going forward to next question
   * 
   * This function allows users to move forward from a previous question
   * they went back to. It moves forward one question.
   */
  const handleGoNext = () => {
    if (currentQuestionIndex >= totalQuestions - 1 || isTransitioning) return

    setIsTransitioning(true)

    // Move forward to next question
    setTimeout(() => {
      setCurrentQuestionIndex(prev => prev + 1)
      setIsTransitioning(false)
    }, 300)
  }

  /**
   * Handle quiz restart
   * 
   * This function allows users to restart the quiz from the beginning.
   * It resets all state and starts over.
   */
  const handleRestart = () => {
    setCurrentQuestionIndex(0)
    setResponses([])
    setHighestAnsweredQuestion(0)
    setIsTransitioning(false)
    setShowCompletion(false)
  }

  // Quiz completion state
  if (showCompletion) {
    return (
      <div className="max-w-2xl mx-auto text-center animate-fade-in">
        <div className="card card-mystical">
          <div className="text-6xl mb-6 animate-pulse-gentle">✨</div>
          <h2 className="text-3xl font-bold text-charcoal-mist mb-4">
            Quiz Complete!
          </h2>
          <p className="text-xl text-silver-fog mb-6">
            Thank you for sharing your answers. We're calculating your spirit animal...
          </p>
          <div className="w-16 h-16 border-4 border-mystic-sage border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    )
  }

  // Main quiz interface
  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress bar */}
      <div className="mb-8">
        <ProgressBar progress={calculateProgress()} />
      </div>

      {/* Question card with transition effects */}
      <div className={`transition-all duration-300 ${isTransitioning ? 'opacity-0 transform translate-x-4' : 'opacity-100 transform translate-x-0'}`}>
        <QuestionCard
          question={currentQuestion}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={totalQuestions}
          onAnswer={handleAnswerSelect}
          onSkip={handleQuestionSkip}
          previouslySelected={previouslySelectedOption}
          isReviewing={isReviewing}
        />
      </div>

      {/* Navigation controls */}
      <div className="flex justify-between items-center mt-8">
        {/* Left side - Back button */}
        <div className="flex-1">
          <button
            onClick={handleGoBack}
            disabled={currentQuestionIndex === 0 || isTransitioning}
            className={`btn btn-outline ${currentQuestionIndex === 0 || isTransitioning ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            ← Previous
          </button>
        </div>

        {/* Center - Question counter */}
        <div className="text-center flex-1">
          <p className="text-silver-fog">
            Question {currentQuestionIndex + 1} of {totalQuestions}
          </p>
          <p className="text-sm text-silver-fog">
            {answeredQuestions} answered • {skippedQuestions} skipped
          </p>
        </div>

        {/* Right side - Next button or Restart button */}
        <div className="flex-1 flex justify-end">
          {currentQuestionIndex < highestAnsweredQuestion ? (
            /* Show Next button when user is on a previous question */
            <button
              onClick={handleGoNext}
              disabled={isTransitioning}
              className={`btn btn-primary ${isTransitioning ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              Next →
            </button>
          ) : (
            /* Show Restart button when user is on current/new question */
            <button
              onClick={handleRestart}
              className="btn btn-outline text-sm"
            >
              Restart
            </button>
          )}
        </div>
      </div>

      {/* Help text */}
      <div className="mt-8 text-center">
        <p className="text-sm text-silver-fog">
          💡 Tip: There are no right or wrong answers. Choose what feels most true to you.
        </p>
      </div>
    </div>
  )
}
