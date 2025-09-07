/**
 * Confidence Indicator Component for Spirit Animal Discovery Website
 * 
 * This component displays the confidence level of the quiz result,
 * helping users understand how reliable their spirit animal result is
 * based on the number of questions answered and score differences.
 * 
 * Author: Spirit Animal Discovery Team
 * Date: 2024
 * Purpose: Display confidence level for quiz results
 * 
 * Features:
 * - Visual confidence level indicator
 * - Color-coded confidence levels
 * - Confidence explanation
 * - Accessibility features
 * - Responsive design
 */

'use client'

import { CONFIDENCE_LEVELS } from '@/lib/types'

/**
 * Props interface for ConfidenceIndicator component
 */
interface ConfidenceIndicatorProps {
  confidence: 'high' | 'medium' | 'low'
}

/**
 * Confidence Indicator Component
 * 
 * This component renders a visual indicator of the quiz result confidence,
 * including color coding and explanatory text.
 * 
 * @param confidence - Confidence level string ('high', 'medium', or 'low')
 * @returns JSX element with the confidence indicator
 */
export default function ConfidenceIndicator({ confidence }: ConfidenceIndicatorProps) {
  /**
   * Get confidence level styling
   * 
   * @param level - Confidence level string
   * @returns Object with CSS classes and icon for the confidence level
   */
  const getConfidenceStyling = (level: string) => {
    switch (level) {
      case CONFIDENCE_LEVELS.HIGH:
        return {
          container: 'bg-green-100 border-green-300 text-green-800',
          icon: '🟢',
          title: 'High Confidence',
          description: 'Your result is very reliable! You answered most questions and there was a clear winner.',
          bgColor: 'bg-green-500'
        }
      case CONFIDENCE_LEVELS.MEDIUM:
        return {
          container: 'bg-yellow-100 border-yellow-300 text-yellow-800',
          icon: '🟡',
          title: 'Medium Confidence',
          description: 'Your result is quite reliable. Consider answering more questions for higher accuracy.',
          bgColor: 'bg-yellow-500'
        }
      case CONFIDENCE_LEVELS.LOW:
        return {
          container: 'bg-red-100 border-red-300 text-red-800',
          icon: '🔴',
          title: 'Low Confidence',
          description: 'Your result has lower confidence. Consider retaking the quiz and answering more questions.',
          bgColor: 'bg-red-500'
        }
      default:
        return {
          container: 'bg-gray-100 border-gray-300 text-gray-800',
          icon: '⚪',
          title: 'Unknown Confidence',
          description: 'Confidence level could not be determined.',
          bgColor: 'bg-gray-500'
        }
    }
  }

  const styling = getConfidenceStyling(confidence)

  return (
    <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-lg border-2 ${styling.container}`}>
      {/* Confidence icon */}
      <span className="text-xl" role="img" aria-label={`${styling.title} indicator`}>
        {styling.icon}
      </span>
      
      {/* Confidence text */}
      <div>
        <div className="font-semibold text-sm">
          {styling.title}
        </div>
        <div className="text-xs opacity-75">
          {styling.description}
        </div>
      </div>
      
      {/* Confidence bar */}
      <div className="w-16 h-2 bg-white/50 rounded-full overflow-hidden">
        <div 
          className={`h-full ${styling.bgColor} transition-all duration-500 ease-out`}
          style={{ 
            width: confidence === 'high' ? '100%' : 
                   confidence === 'medium' ? '66%' : '33%' 
          }}
        />
      </div>
    </div>
  )
}
