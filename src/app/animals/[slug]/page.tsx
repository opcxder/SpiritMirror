/**
 * Individual Animal Page Component for Spirit Animal Discovery Website
 * 
 * This page displays detailed information about a specific spirit animal,
 * including all traits, strengths, challenges, cultural significance, and more.
 * 
 * Author: Spirit Animal Discovery Team
 * Date: 2024
 * Purpose: Display comprehensive information about individual spirit animals
 * 
 * Features:
 * - Complete animal profile information
 * - SEO-optimized content
 * - Related animals suggestions
 * - Social sharing functionality
 * - Mobile-responsive design
 */

import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import { SpiritAnimal } from '@/lib/types'
import animalsData from '@/data/animals.json'

/**
 * Generate static params for all animal pages
 * 
 * This function generates static paths for all spirit animals at build time
 * for optimal performance and SEO.
 * 
 * @returns Array of params for static generation
 */
export async function generateStaticParams() {
  const animals = animalsData as SpiritAnimal[]
  
  return animals.map((animal) => ({
    slug: animal.id,
  }))
}

/**
 * Generate metadata for individual animal pages
 * 
 * This function creates dynamic metadata for each animal page,
 * optimizing SEO and social media sharing.
 * 
 * @param params - Route parameters containing the animal slug
 * @returns Metadata object for the animal page
 */
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const animals = animalsData as SpiritAnimal[]
  const animal = animals.find(a => a.id === params.slug)

  if (!animal) {
    return {
      title: 'Spirit Animal Not Found',
      description: 'The requested spirit animal could not be found.',
    }
  }

  return {
    title: `${animal.name} Spirit Animal: Meaning, Symbolism & Personality Traits`,
    description: `Discover the ${animal.name} spirit animal meaning. Learn about ${animal.name} symbolism, personality traits, strengths, challenges, and spiritual significance.`,
    keywords: [
      `${animal.name} spirit animal`,
      `${animal.name} meaning`,
      `${animal.name} symbolism`,
      `${animal.name} traits`,
      `${animal.name} totem`,
      'spirit animal guide',
      'animal symbolism'
    ],
    openGraph: {
      title: `${animal.name} Spirit Animal Guide`,
      description: `Discover the ${animal.name} spirit animal meaning. Learn about ${animal.name} symbolism, personality traits, and spiritual significance.`,
      images: [
        {
          url: animal.imageUrl,
          width: 1200,
          height: 630,
          alt: `${animal.name} spirit animal - ${animal.description}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${animal.name} Spirit Animal Guide`,
      description: `Discover the ${animal.name} spirit animal meaning and symbolism.`,
      images: [animal.imageUrl],
    },
  }
}

/**
 * Individual Animal Page Component
 * 
 * This component displays comprehensive information about a specific spirit animal,
 * including all details from the animal database.
 * 
 * @param params - Route parameters containing the animal slug
 * @returns JSX element with the complete animal information page
 */
export default function AnimalPage({ params }: { params: { slug: string } }) {
  const animals = animalsData as SpiritAnimal[]
  const animal = animals.find(a => a.id === params.slug)

  // Return 404 if animal not found
  if (!animal) {
    notFound()
  }

  /**
   * Get tier information for display
   */
  const getTierInfo = (tier: number) => {
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

  const tierInfo = getTierInfo(animal.tier)

  return (
    <div className="min-h-screen bg-moon-beige">
      {/* Page header */}
      <div className="bg-soft-ivory border-b border-mystic-sage/20">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            {/* Breadcrumb navigation */}
            <nav className="mb-6">
              <Link href="/animals" className="text-mystic-sage hover:text-forest-whisper">
                ← All Spirit Animals
              </Link>
            </nav>

            {/* Animal image placeholder */}
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-mystic-sage to-forest-whisper rounded-full flex items-center justify-center text-white text-6xl">
              {animal.name.charAt(0)}
            </div>

            {/* Animal name and scientific name */}
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal-mist mb-4">
              {animal.name}
            </h1>
            <p className="text-xl text-silver-fog italic mb-6">
              {animal.scientificName}
            </p>

            {/* Tier badge */}
            <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${tierInfo.color}`}>
              {tierInfo.name}
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Animal description */}
          <section className="card card-mystical">
            <h2 className="text-2xl font-bold text-charcoal-mist mb-4">
              About the {animal.name}
            </h2>
            <p className="text-silver-fog leading-relaxed text-lg">
              {animal.description}
            </p>
          </section>

          {/* Primary traits */}
          <section className="card bg-soft-ivory">
            <h2 className="text-2xl font-bold text-charcoal-mist mb-6">
              Primary Traits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {animal.primaryTraits.map((trait, index) => (
                <div
                  key={index}
                  className="bg-moon-beige p-4 rounded-lg text-center"
                >
                  <span className="text-mystic-sage font-semibold">
                    {trait}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Strengths and challenges */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Strengths */}
            <div className="card bg-soft-ivory">
              <h3 className="text-xl font-bold text-charcoal-mist mb-4 flex items-center">
                <span className="text-2xl mr-2">💪</span>
                Strengths
              </h3>
              <ul className="space-y-3">
                {animal.strengths.map((strength, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-mystic-sage mr-3 mt-1">•</span>
                    <span className="text-silver-fog">{strength}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges */}
            <div className="card bg-soft-ivory">
              <h3 className="text-xl font-bold text-charcoal-mist mb-4 flex items-center">
                <span className="text-2xl mr-2">🌱</span>
                Growth Areas
              </h3>
              <ul className="space-y-3">
                {animal.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-forest-whisper mr-3 mt-1">•</span>
                    <span className="text-silver-fog">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Life lesson */}
          <section className="card card-mystical">
            <h2 className="text-2xl font-bold text-charcoal-mist mb-4 flex items-center">
              <span className="text-2xl mr-2">🌟</span>
              Life Lesson
            </h2>
            <div className="bg-moon-beige p-6 rounded-lg border-l-4 border-mystic-sage">
              <p className="text-charcoal-mist font-medium italic text-lg">
                {animal.lifeLesson}
              </p>
            </div>
          </section>

          {/* Mythology and cultural significance */}
          <section className="card bg-soft-ivory">
            <h2 className="text-2xl font-bold text-charcoal-mist mb-6">
              Mythology & Cultural Significance
            </h2>
            <p className="text-silver-fog leading-relaxed mb-6">
              {animal.mythologyBackground}
            </p>
            
            <div>
              <h3 className="text-lg font-semibold text-charcoal-mist mb-4">
                Cultural Traditions:
              </h3>
              <ul className="space-y-2">
                {animal.culturalSignificance.map((significance, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-golden-amber mr-3 mt-1">•</span>
                    <span className="text-silver-fog">{significance}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Additional information */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Habitat */}
            <div className="card bg-soft-ivory">
              <h3 className="text-lg font-semibold text-charcoal-mist mb-3 flex items-center">
                <span className="text-xl mr-2">🌍</span>
                Natural Habitat
              </h3>
              <p className="text-silver-fog">
                {animal.habitat}
              </p>
            </div>

            {/* Color symbolism */}
            <div className="card bg-soft-ivory">
              <h3 className="text-lg font-semibold text-charcoal-mist mb-3 flex items-center">
                <span className="text-xl mr-2">🎨</span>
                Color Symbolism
              </h3>
              <p className="text-silver-fog">
                {animal.colorSymbolism}
              </p>
            </div>
          </section>

          {/* Compatible animals */}
          {animal.compatibleAnimals.length > 0 && (
            <section className="card card-mystical">
              <h2 className="text-2xl font-bold text-charcoal-mist mb-6">
                Compatible Spirit Animals
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {animal.compatibleAnimals.map((compatibleAnimal, index) => (
                  <Link
                    key={index}
                    href={`/animals/${compatibleAnimal}`}
                    className="bg-moon-beige p-4 rounded-lg text-center hover:bg-mystic-sage/10 transition-colors"
                  >
                    <span className="text-forest-whisper font-medium capitalize">
                      {compatibleAnimal}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Call to action */}
          <section className="text-center">
            <div className="card bg-gradient-to-br from-mystic-sage to-forest-whisper text-white">
              <h2 className="text-3xl font-bold mb-4">
                Is the {animal.name} Your Spirit Animal?
              </h2>
              <p className="text-xl mb-6 opacity-90">
                Take our quiz to discover if the {animal.name} resonates with your personality.
              </p>
              <Link 
                href="/quiz" 
                className="btn bg-golden-amber text-charcoal-mist hover:bg-white text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                🦅 Take the Quiz
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
