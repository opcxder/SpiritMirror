/**
 * Animal Profile Component for Spirit Animal Discovery Website
 * 
 * This component displays detailed information about a spirit animal,
 * including traits, strengths, challenges, life lessons, and cultural significance.
 * 
 * Author: Spirit Animal Discovery Team
 * Date: 2024
 * Purpose: Display comprehensive spirit animal profile information
 * 
 * Features:
 * - Animal image and basic information
 * - Primary traits and characteristics
 * - Strengths and challenges
 * - Life lessons and guidance
 * - Cultural significance and mythology
 * - Habitat and scientific information
 * - Mobile-responsive design
 */

'use client'

import { SpiritAnimal } from '@/lib/types'

/**
 * Props interface for AnimalProfile component
 */
interface AnimalProfileProps {
  animal: SpiritAnimal
  isPrimary: boolean
  score: number
}

/**
 * Animal Profile Component
 * 
 * This component renders a comprehensive profile of a spirit animal,
 * including all the detailed information from the animal database.
 * 
 * @param animal - SpiritAnimal object containing all animal information
 * @param isPrimary - Boolean indicating if this is the primary result
 * @param score - Score points for this animal from the quiz
 * @returns JSX element with the complete animal profile
 */
export default function AnimalProfile({ animal, isPrimary, score }: AnimalProfileProps) {
  /**
   * Get tier styling based on animal tier
   * 
   * @param tier - Animal tier number (1-4)
   * @returns CSS classes for tier styling
   */
  const getTierStyling = (tier: number) => {
    switch (tier) {
      case 1:
        return 'bg-golden-amber text-charcoal-mist'
      case 2:
        return 'bg-mystic-sage text-white'
      case 3:
        return 'bg-forest-whisper text-white'
      case 4:
        return 'bg-charcoal-mist text-white'
      default:
        return 'bg-silver-fog text-white'
    }
  }

  /**
   * Get tier name based on tier number
   * 
   * @param tier - Animal tier number (1-4)
   * @returns Human-readable tier name
   */
  const getTierName = (tier: number) => {
    switch (tier) {
      case 1:
        return 'Universal Power Animal'
      case 2:
        return 'Wisdom & Mystery'
      case 3:
        return 'Social & Emotional'
      case 4:
        return 'Specialized Traits'
      default:
        return 'Spirit Animal'
    }
  }

  return (
    <div className={`card ${isPrimary ? 'card-mystical' : 'bg-soft-ivory'} animate-fade-in`}>
      {/* Animal header */}
      <div className="text-center mb-8">
        {/* Animal image placeholder */}
        <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-mystic-sage to-forest-whisper rounded-full flex items-center justify-center text-white text-4xl">
          {animal.name.charAt(0)}
        </div>
        
        {/* Animal name and scientific name */}
        <h3 className="text-3xl font-bold text-charcoal-mist mb-2">
          {animal.name}
        </h3>
        <p className="text-silver-fog italic mb-4">
          {animal.scientificName}
        </p>
        
        {/* Tier badge */}
        <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getTierStyling(animal.tier)}`}>
          {getTierName(animal.tier)}
        </div>
        
        {/* Score display for primary animal */}
        {isPrimary && (
          <div className="mt-4 text-center">
            <div className="text-2xl font-bold text-mystic-sage">
              {score} Points
            </div>
            <div className="text-sm text-silver-fog">
              Quiz Score
            </div>
          </div>
        )}
      </div>

      {/* Primary traits */}
      <div className="mb-8">
        <h4 className="text-xl font-semibold text-charcoal-mist mb-4">
          Primary Traits
        </h4>
        <div className="flex flex-wrap gap-2">
          {animal.primaryTraits.map((trait, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-mystic-sage/20 text-mystic-sage rounded-full text-sm font-medium"
            >
              {trait}
            </span>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="mb-8">
        <h4 className="text-xl font-semibold text-charcoal-mist mb-4">
          About the {animal.name}
        </h4>
        <p className="text-silver-fog leading-relaxed">
          {animal.description}
        </p>
      </div>

      {/* Strengths and challenges grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Strengths */}
        <div>
          <h4 className="text-xl font-semibold text-charcoal-mist mb-4 flex items-center">
            <span className="text-2xl mr-2">💪</span>
            Strengths
          </h4>
          <ul className="space-y-2">
            {animal.strengths.map((strength, index) => (
              <li key={index} className="flex items-start">
                <span className="text-mystic-sage mr-2 mt-1">•</span>
                <span className="text-silver-fog">{strength}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Challenges */}
        <div>
          <h4 className="text-xl font-semibold text-charcoal-mist mb-4 flex items-center">
            <span className="text-2xl mr-2">🌱</span>
            Growth Areas
          </h4>
          <ul className="space-y-2">
            {animal.challenges.map((challenge, index) => (
              <li key={index} className="flex items-start">
                <span className="text-forest-whisper mr-2 mt-1">•</span>
                <span className="text-silver-fog">{challenge}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Life lesson */}
      <div className="mb-8">
        <h4 className="text-xl font-semibold text-charcoal-mist mb-4 flex items-center">
          <span className="text-2xl mr-2">🌟</span>
          Life Lesson
        </h4>
        <div className="bg-moon-beige p-4 rounded-lg border-l-4 border-mystic-sage">
          <p className="text-charcoal-mist font-medium italic">
            {animal.lifeLesson}
          </p>
        </div>
      </div>

      {/* Mythology and cultural significance */}
      <div className="mb-8">
        <h4 className="text-xl font-semibold text-charcoal-mist mb-4 flex items-center">
          <span className="text-2xl mr-2">🏛️</span>
          Mythology & Cultural Significance
        </h4>
        <p className="text-silver-fog leading-relaxed mb-4">
          {animal.mythologyBackground}
        </p>
        
        <div>
          <h5 className="font-semibold text-charcoal-mist mb-2">
            Cultural Traditions:
          </h5>
          <ul className="space-y-1">
            {animal.culturalSignificance.map((significance, index) => (
              <li key={index} className="flex items-start">
                <span className="text-golden-amber mr-2 mt-1">•</span>
                <span className="text-silver-fog text-sm">{significance}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Additional information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Habitat */}
        <div>
          <h4 className="text-lg font-semibold text-charcoal-mist mb-2 flex items-center">
            <span className="text-xl mr-2">🌍</span>
            Natural Habitat
          </h4>
          <p className="text-silver-fog text-sm">
            {animal.habitat}
          </p>
        </div>

        {/* Color symbolism */}
        <div>
          <h4 className="text-lg font-semibold text-charcoal-mist mb-2 flex items-center">
            <span className="text-xl mr-2">🎨</span>
            Color Symbolism
          </h4>
          <p className="text-silver-fog text-sm">
            {animal.colorSymbolism}
          </p>
        </div>
      </div>

      {/* Compatible animals */}
      {animal.compatibleAnimals.length > 0 && (
        <div className="mt-8">
          <h4 className="text-lg font-semibold text-charcoal-mist mb-3 flex items-center">
            <span className="text-xl mr-2">🤝</span>
            Compatible Spirit Animals
          </h4>
          <div className="flex flex-wrap gap-2">
            {animal.compatibleAnimals.map((compatibleAnimal, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-forest-whisper/20 text-forest-whisper rounded-full text-sm font-medium capitalize"
              >
                {compatibleAnimal}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
