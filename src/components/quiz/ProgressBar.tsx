/**
 * Progress Bar Component for Spirit Animal Discovery Website
 * 
 * This component displays the quiz progress with a visual progress bar,
 * question counter, and completion percentage. It provides users with
 * clear feedback about their progress through the quiz.
 * 
 * Author: Spirit Animal Discovery Team
 * Date: 2024
 * Purpose: Visual progress indicator for the quiz flow
 * 
 * Features:
 * - Animated progress bar
 * - Question counter display
 * - Completion percentage
 * - Responsive design
 * - Smooth animations
 * - Accessibility features
 */

'use client'

import { QuizProgress } from '@/lib/types'

/**
 * Props interface for ProgressBar component
 */
interface ProgressBarProps {
  progress: QuizProgress
}

/**
 * Progress Bar Component
 * 
 * This component renders a visual progress indicator for the quiz,
 * showing current progress, question numbers, and completion statistics.
 * 
 * @param progress - QuizProgress object containing current state information
 * @returns JSX element with the progress bar interface
 */
export default function ProgressBar({ progress }: ProgressBarProps) {
  // Calculate additional progress metrics
  const completionPercentage = Math.round((progress.answeredQuestions / progress.totalQuestions) * 100)
  const remainingQuestions = progress.totalQuestions - progress.answeredQuestions

  /**
   * Get progress bar color based on completion percentage
   * 
   * @param percentage - Completion percentage
   * @returns CSS classes for progress bar color
   */
  const getProgressColor = (percentage: number): string => {
    if (percentage < 25) return 'bg-mystic-sage'
    if (percentage < 50) return 'bg-mystic-sage'
    if (percentage < 75) return 'bg-forest-whisper'
    return 'bg-golden-amber'
  }

  /**
   * Get progress bar width for animation
   * 
   * @param percentage - Progress percentage
   * @returns CSS width value
   */
  const getProgressWidth = (percentage: number): string => {
    return `${Math.min(percentage, 100)}%`
  }

  return (
    <div className="card bg-soft-ivory border-mystic-sage/20 mt-5">
      {/* Progress header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-charcoal-mist">
            Your Journey Progress
          </h3>
          <p className="text-sm text-silver-fog">
            Discovering your spirit animal...
          </p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-mystic-sage">
            {progress.progressPercentage}%
          </div>
          <div className="text-xs text-silver-fog">
            Complete
          </div>
        </div>
      </div>

      {/* Main progress bar */}
      <div className="mb-4">
        <div className="flex items-center justify-between text-sm text-silver-fog mb-2">
          <span>Progress</span>
          <span>{progress.currentQuestion} of {progress.totalQuestions} questions</span>
        </div>
        
        {/* Progress bar container */}
        <div className="w-full bg-mystic-sage/20 rounded-full h-3 overflow-hidden">
          {/* Animated progress bar */}
          <div 
            className={`h-full rounded-full transition-all duration-500 ease-out ${getProgressColor(progress.progressPercentage)}`}
            style={{ width: getProgressWidth(progress.progressPercentage) }}
          >
            {/* Shimmer effect for active progress */}
            <div className="h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
          </div>
        </div>
      </div>

      {/* Progress statistics */}
      <div className="grid grid-cols-3 gap-4 text-center">
        {/* Questions answered */}
        <div className="bg-moon-beige rounded-lg p-3">
          <div className="text-lg font-bold text-mystic-sage">
            {progress.answeredQuestions}
          </div>
          <div className="text-xs text-silver-fog">
            Answered
          </div>
        </div>

        {/* Questions skipped */}
        <div className="bg-moon-beige rounded-lg p-3">
          <div className="text-lg font-bold text-charcoal-mist">
            {progress.skippedQuestions}
          </div>
          <div className="text-xs text-silver-fog">
            Skipped
          </div>
        </div>

        {/* Questions remaining */}
        <div className="bg-moon-beige rounded-lg p-3">
          <div className="text-lg font-bold text-forest-whisper">
            {remainingQuestions}
          </div>
          <div className="text-xs text-silver-fog">
            Remaining
          </div>
        </div>
      </div>

      {/* Motivational message based on progress */}
      <div className="mt-4 text-center">
        {progress.progressPercentage < 25 && (
          <p className="text-sm text-silver-fog">
            🌱 Your journey begins... Take your time with each question.
          </p>
        )}
        {progress.progressPercentage >= 25 && progress.progressPercentage < 50 && (
          <p className="text-sm text-silver-fog">
            🌿 You're making great progress! Trust your instincts.
          </p>
        )}
        {progress.progressPercentage >= 50 && progress.progressPercentage < 75 && (
          <p className="text-sm text-silver-fog">
            🌳 You're halfway there! Your spirit animal is becoming clearer.
          </p>
        )}
        {progress.progressPercentage >= 75 && progress.progressPercentage < 100 && (
          <p className="text-sm text-silver-fog">
            🌲 Almost there! Your spirit animal is waiting to be revealed.
          </p>
        )}
        {progress.progressPercentage === 100 && (
          <p className="text-sm text-mystic-sage font-medium">
            ✨ Journey complete! Your spirit animal has been discovered.
          </p>
        )}
      </div>
    </div>
  )
}
