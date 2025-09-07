/**
 * Result Display Component for Spirit Animal Discovery Website
 * 
 * This component displays the user's spirit animal result with detailed
 * information about their spirit animal, including traits, strengths,
 * challenges, and life lessons.
 * 
 * Author: Spirit Animal Discovery Team
 * Date: 2024
 * Purpose: Display comprehensive spirit animal result information
 * 
 * Features:
 * - Spirit animal profile display
 * - Confidence level indicator
 * - Detailed traits and characteristics
 * - Life lessons and guidance
 * - Sharing functionality
 * - Retake quiz option
 * - Secondary animal display (if applicable)
 * - Mobile-responsive design
 */

'use client'

import { useState } from 'react'
import { QuizResult, SpiritAnimal, ResultDisplayProps } from '@/lib/types'
import AnimalProfile from './AnimalProfile'
import ConfidenceIndicator from './ConfidenceIndicator'
import ShareButton from './ShareButton'

/**
 * Result Display Component
 * 
 * This component renders the complete result display, including:
 * - Primary spirit animal information
 * - Secondary spirit animal (if applicable)
 * - Confidence level indicator
 * - Action buttons for sharing and retaking
 * 
 * @param result - QuizResult object containing the calculated result
 * @param primaryAnimal - SpiritAnimal object for the primary result
 * @param secondaryAnimal - Optional SpiritAnimal object for secondary result
 * @param onRetake - Callback function for retaking the quiz
 * @param onShare - Callback function for sharing the result
 * @returns JSX element with the complete result display
 */
export default function ResultDisplay({ 
  result, 
  primaryAnimal, 
  secondaryAnimal, 
  onRetake, 
  onShare 
}: ResultDisplayProps) {
  // State for animations and interactions
  const [showSecondary, setShowSecondary] = useState(false)

  /**
   * Get confidence level styling
   * 
   * @param confidence - Confidence level string
   * @returns CSS classes for confidence styling
   */
  const getConfidenceStyling = (confidence: string) => {
    switch (confidence) {
      case 'high':
        return 'text-green-600 bg-green-100'
      case 'medium':
        return 'text-yellow-600 bg-yellow-100'
      case 'low':
        return 'text-red-600 bg-red-100'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }

  /**
   * Get confidence message
   * 
   * @param confidence - Confidence level string
   * @returns Human-readable confidence message
   */
  const getConfidenceMessage = (confidence: string) => {
    switch (confidence) {
      case 'high':
        return 'High confidence - Your result is very reliable!'
      case 'medium':
        return 'Medium confidence - Your result is quite reliable.'
      case 'low':
        return 'Low confidence - Consider retaking the quiz for better accuracy.'
      default:
        return 'Confidence level unknown.'
    }
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Result header with confidence indicator */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 mb-4">
          <ConfidenceIndicator confidence={result.confidence} />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-charcoal-mist mb-4">
          Your Spirit Animal is the
          <span className="block text-mystic-sage font-accent italic">
            {primaryAnimal.name}
          </span>
        </h2>
        
        <p className="text-lg text-silver-fog max-w-2xl mx-auto">
          {primaryAnimal.description}
        </p>
      </div>

      {/* Primary animal profile */}
      <div className="animate-fade-in">
        <AnimalProfile 
          animal={primaryAnimal} 
          isPrimary={true}
          score={result.primary.totalPoints}
        />
      </div>

      {/* Secondary animal (if exists) */}
      {secondaryAnimal && (
        <div className="animate-slide-up">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold text-charcoal-mist mb-2">
              You Also Have Strong Connection With
            </h3>
            <p className="text-silver-fog">
              Your personality also resonates strongly with the {secondaryAnimal.name}
            </p>
          </div>
          
          <AnimalProfile 
            animal={secondaryAnimal} 
            isPrimary={false}
            score={result.secondary?.totalPoints || 0}
          />
        </div>
      )}

      {/* Quiz statistics */}
      <div className="card bg-soft-ivory">
        <h3 className="text-xl font-semibold text-charcoal-mist mb-4 text-center">
          Your Quiz Journey
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-mystic-sage mb-2">
              {result.totalQuestionsAnswered}
            </div>
            <div className="text-silver-fog">
              Questions Answered
            </div>
          </div>
          
          <div>
            <div className="text-3xl font-bold text-charcoal-mist mb-2">
              {result.skippedQuestions}
            </div>
            <div className="text-silver-fog">
              Questions Skipped
            </div>
          </div>
          
          <div>
            <div className="text-3xl font-bold text-forest-whisper mb-2">
              {Math.round((result.totalQuestionsAnswered / (result.totalQuestionsAnswered + result.skippedQuestions)) * 100)}%
            </div>
            <div className="text-silver-fog">
              Completion Rate
            </div>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <ShareButton 
          onShare={onShare}
          animalName={primaryAnimal.name}
        />
        
        <button
          onClick={onRetake}
          className="btn btn-outline"
        >
          🔄 Take Quiz Again
        </button>
        
        <button
          onClick={() => window.location.href = '/'}
          className="btn btn-secondary"
        >
          🏠 Go Home
        </button>
      </div>

      {/* Additional insights */}
      <div className="card card-mystical text-center">
        <h3 className="text-xl font-semibold text-charcoal-mist mb-4">
          What's Next?
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="text-3xl mb-3">🌿</div>
            <h4 className="font-semibold text-charcoal-mist mb-2">
              Connect with Your Spirit Animal
            </h4>
            <p className="text-silver-fog text-sm">
              Spend time in nature, meditate, or create art inspired by your spirit animal to deepen your connection.
            </p>
          </div>
          
          <div>
            <div className="text-3xl mb-3">📚</div>
            <h4 className="font-semibold text-charcoal-mist mb-2">
              Learn More
            </h4>
            <p className="text-silver-fog text-sm">
              Explore the rich mythology and cultural significance of your spirit animal across different traditions.
            </p>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="text-center text-sm text-silver-fog">
        <p>
          This quiz is for entertainment and self-reflection purposes. 
          Spirit animals are symbolic representations that can provide insights into your personality and life path.
        </p>
      </div>
    </div>
  )
}
