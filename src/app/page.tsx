/**
 * Landing Page Component for Spirit Animal Discovery Website
 * 
 * This is the main landing page that introduces users to the spirit animal quiz.
 * It features an elegant, mystical design with clear call-to-action buttons
 * and compelling content to encourage users to start their journey.
 * 
 * Author: Spirit Animal Discovery Team
 * Date: 2024
 * Purpose: Main entry point for users to discover and start the spirit animal quiz
 * 
 * Features:
 * - Hero section with compelling headline and CTA
 * - Feature highlights explaining the quiz benefits
 * - Mystical design with nature-inspired elements
 * - Mobile-responsive layout
 * - SEO-optimized content structure
 */

import Link from 'next/link'
import { Metadata } from 'next'

/**
 * Page-specific metadata for SEO optimization
 * 
 * This metadata is specific to the landing page and helps with
 * search engine optimization and social media sharing.
 */
export const metadata: Metadata = {
  title: 'Discover Your Spirit Animal - Free Quiz & Personality Insights',
  description: 'Unlock the secrets of your soul with our free spirit animal quiz. Answer 15 mystical questions to discover your true spirit animal and receive personalized insights about your personality, strengths, and life path.',
  openGraph: {
    title: 'Discover Your Spirit Animal - Free Quiz & Personality Insights',
    description: 'Unlock the secrets of your soul with our free spirit animal quiz. Answer 15 mystical questions to discover your true spirit animal and receive personalized insights about your personality, strengths, and life path.',
    images: [
      {
        url: '/images/landing-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Mystical forest with spirit animals - Discover your spirit animal',
      },
    ],
  },
}

/**
 * Hero Section Component
 * 
 * The main hero section that captures user attention and encourages
 * them to start the spirit animal quiz.
 * 
 * @returns JSX element with hero content and call-to-action
 */
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background mystical elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-moon-beige via-soft-ivory to-moon-beige">
        <div className="absolute inset-0 opacity-10">
          {/* Mystical pattern overlay */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-mystic-sage rounded-full blur-xl animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-golden-amber rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-forest-whisper rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal-mist mb-6 animate-fade-in">
            Discover Your
            <span className="block text-mystic-sage font-accent italic">Spirit Animal</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-silver-fog mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Unlock the ancient wisdom within your soul through our mystical questionnaire. 
            Find your true spirit animal and receive personalized insights about your personality, 
            strengths, and life path.
          </p>
          
          {/* Call-to-action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up">
            <Link 
              href="/quiz" 
              className="btn btn-primary text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              🦅 Start Your Journey
            </Link>
            <Link 
              href="/about" 
              className="btn btn-outline text-lg px-8 py-4 rounded-full"
            >
              Learn More
            </Link>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-silver-fog animate-fade-in">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✨</span>
              <span>100% Free</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔮</span>
              <span>15 Mystical Questions</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌿</span>
              <span>Instant Results</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-mystic-sage rounded-full flex justify-center">
          <div className="w-1 h-3 bg-mystic-sage rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

/**
 * Features Section Component
 * 
 * Highlights the key features and benefits of the spirit animal quiz
 * to encourage user engagement and build trust.
 * 
 * @returns JSX element with feature highlights
 */
function FeaturesSection() {
  const features = [
    {
      icon: '🧠',
      title: 'Thoughtful Analysis',
      description: 'Our carefully designed scoring system analyzes your responses to provide accurate and meaningful results based on personality traits and preferences.'
    },
    {
      icon: '🎯',
      title: 'Personalized Insights',
      description: 'Receive detailed information about your spirit animal, including personality traits, strengths, challenges, and life lessons.'
    },
    {
      icon: '🌙',
      title: 'Mystical Experience',
      description: 'Immerse yourself in a beautiful, mystical interface designed to connect you with the spiritual realm and ancient wisdom.'
    },
    {
      icon: '📱',
      title: 'Mobile Optimized',
      description: 'Take the quiz anywhere, anytime with our fully responsive design that works perfectly on all devices.'
    },
    {
      icon: '🔒',
      title: 'Privacy Focused',
      description: 'Your responses are completely anonymous. We respect your privacy and never store personal information.'
    },
    {
      icon: '🎨',
      title: 'Beautiful Design',
      description: 'Experience a carefully crafted design inspired by nature and spirituality, creating a calming and engaging atmosphere.'
    }
  ]

  return (
    <section className="py-20 bg-soft-ivory">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal-mist mb-6">
            Why Choose Our
            <span className="block text-mystic-sage font-accent italic">Spirit Animal Quiz?</span>
          </h2>
          <p className="text-xl text-silver-fog max-w-3xl mx-auto">
            Our quiz combines ancient wisdom with thoughtful design to provide you with 
            the most accurate and meaningful spirit animal discovery experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="card card-mystical text-center hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-charcoal-mist mb-3">
                {feature.title}
              </h3>
              <p className="text-silver-fog leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/**
 * How It Works Section Component
 * 
 * Explains the simple process of taking the spirit animal quiz
 * to reduce user anxiety and encourage participation.
 * 
 * @returns JSX element with step-by-step process
 */
function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Answer Questions',
      description: 'Complete our carefully crafted 15-question quiz designed to understand your personality and preferences.'
    },
    {
      number: '02', 
      title: 'Get Your Results',
      description: 'Our scoring system analyzes your responses and matches you with your perfect spirit animal.'
    },
    {
      number: '03',
      title: 'Discover Insights',
      description: 'Receive detailed information about your spirit animal, including traits, strengths, and life guidance.'
    }
  ]

  return (
    <section className="py-20 bg-moon-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal-mist mb-6">
            How It Works
          </h2>
          <p className="text-xl text-silver-fog max-w-3xl mx-auto">
            Discovering your spirit animal is simple, quick, and completely free. 
            Follow these three easy steps to begin your spiritual journey.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                {/* Connection line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-mystic-sage opacity-30 transform translate-x-4"></div>
                )}
                
                <div className="relative z-10">
                  <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-mystic-sage to-forest-whisper rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-semibold text-charcoal-mist mb-4">
                    {step.title}
                  </h3>
                  <p className="text-silver-fog leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * Call to Action Section Component
 * 
 * Final call-to-action section that encourages users to start the quiz
 * with compelling copy and prominent buttons.
 * 
 * @returns JSX element with final CTA
 */
function CallToActionSection() {
  return (
    <section className="py-12 bg-gradient-to-br from-mystic-sage to-forest-whisper text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Discover Your
            <span className="block font-accent italic text-golden-amber">Spirit Animal?</span>
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of others who have discovered their true spirit animal 
            and gained valuable insights into their personality and life path.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/quiz" 
              className="btn bg-golden-amber text-charcoal-mist hover:bg-white text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              🦅 Start Your Journey Now
            </Link>
            <Link 
              href="/animals" 
              className="btn btn-outline border-white text-white hover:bg-white hover:text-charcoal-mist text-lg px-8 py-4 rounded-full"
            >
              Explore Animals
            </Link>
          </div>
          
          <p className="text-sm mt-6 opacity-75">
            ✨ 100% Free • 🔒 Privacy Protected • ⚡ Instant Results
          </p>
        </div>
      </div>
    </section>
  )
}

/**
 * Main Landing Page Component
 * 
 * This is the main component that renders the complete landing page
 * with all sections and components combined.
 * 
 * @returns JSX element with the complete landing page
 */
export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Features Section */}
      <FeaturesSection />
      
      {/* How It Works Section */}
      <HowItWorksSection />
      
      {/* Call to Action Section */}
      <CallToActionSection />
    </div>
  )
}
