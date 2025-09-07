/**
 * Animals Page Component for Spirit Animal Discovery Website
 * 
 * This page displays all available spirit animals in the database,
 * allowing users to browse and learn about different spirit animals
 * without taking the quiz.
 * 
 * Author: Spirit Animal Discovery Team
 * Date: 2024
 * Purpose: Display all spirit animals for browsing and learning
 * 
 * Features:
 * - Grid display of all spirit animals
 * - Animal tier categorization
 * - Individual animal detail links
 * - Mobile-responsive design
 */

'use client'

import Link from 'next/link'
import { SpiritAnimal, AnimalTier } from '@/lib/types'
import animalsData from '@/data/animals.json'

/**
 * Main Animals Page Component
 * 
 * This component displays all spirit animals in a simple grid layout.
 * Users can browse animals and click to learn more about each one.
 * 
 * @returns JSX element with the complete animals browsing interface
 */
export default function AnimalsPage() {
  // Load animals data
  const animals = animalsData as SpiritAnimal[]

  /**
   * Get tier styling and information
   */
  const getTierInfo = (tier: AnimalTier) => {
    switch (tier) {
      case 1:
        return {
          name: 'Universal Power Animals',
          color: 'bg-golden-amber text-charcoal-mist',
          description: 'The most powerful and universally recognized spirit animals'
        }
      case 2:
        return {
          name: 'Wisdom & Mystery',
          color: 'bg-mystic-sage text-white',
          description: 'Animals associated with wisdom, intuition, and mystical knowledge'
        }
      case 3:
        return {
          name: 'Social & Emotional',
          color: 'bg-forest-whisper text-white',
          description: 'Animals representing social bonds, emotions, and relationships'
        }
      case 4:
        return {
          name: 'Specialized Traits',
          color: 'bg-charcoal-mist text-white',
          description: 'Animals with unique and specialized characteristics'
        }
      default:
        return {
          name: 'Unknown',
          color: 'bg-silver-fog text-white',
          description: 'Unknown tier'
        }
    }
  }

  return (
    <div className="min-h-screen bg-moon-beige ">
      {/* Page header */}
      <div className="bg-soft-ivory border-b border-mystic-sage/20 mb-5">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal-mist pt-6 mb-6">
              All Spirit Animals
            </h1>
            <p className="text-xl text-silver-fog max-w-3xl mx-auto">
              Explore our complete database of spirit animals. Learn about their meanings, 
              symbolism, and the unique traits they represent.
            </p>
          </div>
        </div>
      </div>

      {/* Animals grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {animals.map((animal) => {
            const tierInfo = getTierInfo(animal.tier)
            
            return (
              <Link
                key={animal.id}
                href={`/animals/${animal.id}`}
                className="card bg-soft-ivory hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-lg"
              >
                {/* Animal image placeholder */}
                <div className="w-full h-48 bg-gradient-to-br from-mystic-sage to-forest-whisper rounded-lg mb-4 flex items-center justify-center text-white text-6xl">
                  {animal.name.charAt(0)}
                </div>

                {/* Animal name and tier */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-charcoal-mist mb-2">
                    {animal.name}
                  </h3>
                  <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${tierInfo.color}`}>
                    {tierInfo.name}
                  </div>
                </div>

                {/* Primary traits */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {animal.primaryTraits.slice(0, 3).map((trait, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-mystic-sage/20 text-mystic-sage rounded-full text-xs"
                      >
                        {trait}
                      </span>
                    ))}
                    {animal.primaryTraits.length > 3 && (
                      <span className="px-2 py-1 bg-silver-fog/20 text-silver-fog rounded-full text-xs">
                        +{animal.primaryTraits.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Description preview */}
                <p className="text-silver-fog text-sm leading-relaxed line-clamp-3">
                  {animal.description}
                </p>

                {/* Learn more link */}
                <div className="mt-4 text-center">
                  <span className="text-mystic-sage font-medium text-sm">
                    Learn More →
                  </span>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Call to action */}
        <div className="mt-12 text-center mb-5">
          <div className="card bg-gradient-to-br from-mystic-sage to-forest-whisper text-white">
            <h2 className="text-3xl font-bold mb-4">
              Want to Find Your Spirit Animal?
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Take our quiz to discover which spirit animal resonates most with your personality.
            </p>
            <Link 
              href="/quiz" 
              className="btn bg-golden-amber text-charcoal-mist hover:bg-white text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              🦅 Take the Quiz
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}