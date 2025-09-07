/**
 * Question Card Component for Spirit Animal Discovery Website
 * 
 * This component displays individual quiz questions with answer options.
 * It provides an interactive interface for users to select their answers
 * with smooth animations and visual feedback.
 * 
 * Author: Spirit Animal Discovery Team
 * Date: 2024
 * Purpose: Display quiz questions and handle answer selection
 * 
 * Features:
 * - Question display with mystical styling
 * - Multiple choice answer options
 * - Visual feedback for selections
 * - Skip functionality
 * - Smooth animations and transitions
 * - Mobile-responsive design
 * - Accessibility features
 */

'use client'

import { useState, useEffect } from 'react'
import { Question, QuestionProps } from '@/lib/types'

/**
 * Question Card Component
 * 
 * This component renders a single quiz question with all its answer options.
 * It handles user interactions and provides visual feedback for selections.
 * 
 * @param question - The question object containing text and options
 * @param questionNumber - Current question number for display
 * @param totalQuestions - Total number of questions in the quiz
 * @param onAnswer - Callback function when user selects an answer
 * @param onSkip - Callback function when user skips the question
 * @returns JSX element with the question card interface
 */
export default function QuestionCard({ 
  question, 
  questionNumber, 
  totalQuestions, 
  onAnswer, 
  onSkip,
  previouslySelected,
  isReviewing = false
}: QuestionProps) {
  // State for selected option and hover effects
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [hoveredOption, setHoveredOption] = useState<string | null>(null)

  /**
   * Set selected option when question changes
   * 
   * This effect sets the previously selected option when going back to a question,
   * or clears it for new questions, preventing the UI from getting stuck.
   */
  useEffect(() => {
    setSelectedOption(previouslySelected || null)
    setHoveredOption(null)
  }, [question.id, previouslySelected])

  /**
   * Handle option selection
   * 
   * This function is called when the user clicks on an answer option.
   * It provides visual feedback and calls the onAnswer callback.
   * 
   * @param optionId - The ID of the selected option
   */
  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId)
    
    // Add a small delay for visual feedback before calling onAnswer
    setTimeout(() => {
      onAnswer(optionId)
    }, 200)
  }

  /**
   * Handle option hover for visual feedback
   * 
   * @param optionId - The ID of the hovered option
   */
  const handleOptionHover = (optionId: string) => {
    setHoveredOption(optionId)
  }

  /**
   * Handle option hover end
   */
  const handleOptionHoverEnd = () => {
    setHoveredOption(null)
  }

  /**
   * Get option styling based on state
   * 
   * @param optionId - The option ID to get styling for
   * @returns CSS classes for the option button
   */
  const getOptionStyling = (optionId: string): string => {
    const baseClasses = "w-full p-4 text-left rounded-lg border-2 transition-all duration-200 text-lg font-medium"
    
    if (selectedOption === optionId) {
      return `${baseClasses} bg-mystic-sage border-mystic-sage text-white transform scale-105 shadow-lg`
    }
    
    if (hoveredOption === optionId) {
      return `${baseClasses} bg-soft-ivory border-mystic-sage text-charcoal-mist transform scale-102 shadow-md`
    }
    
    return `${baseClasses} bg-soft-ivory border-mystic-sage/20 text-charcoal-mist hover:border-mystic-sage/40 hover:shadow-sm`
  }

  /**
   * Get option letter styling
   * 
   * @param optionId - The option ID to get styling for
   * @returns CSS classes for the option letter
   */
  const getOptionLetterStyling = (optionId: string): string => {
    const baseClasses = "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 transition-all duration-200"
    
    if (selectedOption === optionId) {
      return `${baseClasses} bg-white text-mystic-sage`
    }
    
    if (hoveredOption === optionId) {
      return `${baseClasses} bg-mystic-sage text-white`
    }
    
    return `${baseClasses} bg-mystic-sage/20 text-mystic-sage`
  }

  return (
    <div className="card card-mystical animate-fade-in">
      {/* Question header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-mystic-sage text-white rounded-full text-lg font-bold mb-4">
          {questionNumber}
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold text-charcoal-mist leading-relaxed">
          {question.text}
        </h2>
        <p className="text-silver-fog mt-2">
          Choose the answer that resonates most with you
        </p>
      </div>

      {/* Answer options */}
      <div className="space-y-4 mb-8">
        {question.options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleOptionSelect(option.id)}
            onMouseEnter={() => handleOptionHover(option.id)}
            onMouseLeave={handleOptionHoverEnd}
            className={getOptionStyling(option.id)}
            disabled={selectedOption !== null && !isReviewing}
            aria-label={`Select option ${option.id}: ${option.text}`}
          >
            <div className="flex items-center">
              {/* Option letter */}
              <div className={getOptionLetterStyling(option.id)}>
                {option.id}
              </div>
              
              {/* Option text */}
              <span className="flex-1">
                {option.text}
              </span>
              
              {/* Selection indicator */}
              {selectedOption === option.id && (
                <div className="text-white text-xl animate-fade-in">
                  ✓
                </div>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Skip button */}
      <div className="text-center">
        <button
          onClick={onSkip}
          disabled={selectedOption !== null && !isReviewing}
          className={`text-silver-fog hover:text-charcoal-mist transition-colors duration-200 ${
            selectedOption !== null && !isReviewing ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          aria-label="Skip this question"
        >
          Skip this question
        </button>
      </div>

      {/* Question category indicator */}
      <div className="mt-6 pt-6 border-t border-mystic-sage/20">
        <div className="flex items-center justify-center">
          <span className="text-xs text-silver-fog uppercase tracking-wide font-medium">
            {question.category.replace('-', ' ')} • Question {questionNumber} of {totalQuestions}
          </span>
        </div>
      </div>
    </div>
  )
}
