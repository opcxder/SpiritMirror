/**
 * About Page Component for Spirit Animal Discovery Website
 * 
 * This page provides information about the spirit animal quiz, how it works,
 * the methodology behind the scoring algorithm, and general information
 * about spirit animals and their significance.
 * 
 * Author: Spirit Animal Discovery Team
 * Date: 2024
 * Purpose: Inform users about the quiz methodology and spirit animal concepts
 * 
 * Features:
 * - Information about the quiz methodology
 * - Explanation of spirit animal concepts
 * - How the scoring algorithm works
 * - Cultural significance of spirit animals
 * - FAQ section
 * - Contact information
 */

import Link from 'next/link'
import { Metadata } from 'next'

/**
 * Page-specific metadata for SEO optimization
 */
export const metadata: Metadata = {
  title: 'About Spirit Animal Discovery - How Our Quiz Works',
  description: 'Learn about our spirit animal quiz methodology, how we calculate results, and the cultural significance of spirit animals. Discover the science behind our personality assessment.',
  openGraph: {
    title: 'About Spirit Animal Discovery - How Our Quiz Works',
    description: 'Learn about our spirit animal quiz methodology, how we calculate results, and the cultural significance of spirit animals. Discover the science behind our personality assessment.',
    images: [
      {
        url: '/images/about-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'About Spirit Animal Discovery - Understanding spirit animals and quiz methodology',
      },
    ],
  },
}

/**
 * About Page Component
 * 
 * This component renders the complete about page with information about
 * the quiz methodology, spirit animal concepts, and cultural significance.
 * 
 * @returns JSX element with the complete about page
 */
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-moon-beige">
      {/* Page header */}
      <div className="bg-soft-ivory border-b border-mystic-sage/20">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal-mist mb-6">
              About Spirit Animal Discovery
            </h1>
            <p className="text-xl text-silver-fog max-w-3xl mx-auto">
              Discover the methodology behind our spirit animal quiz and learn about 
              the ancient wisdom that guides your personality assessment.
            </p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* What are Spirit Animals section */}
          <section className="card card-mystical">
            <h2 className="text-3xl font-bold text-charcoal-mist mb-6">
              What Are Spirit Animals?
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-silver-fog leading-relaxed mb-6">
                Spirit animals, also known as power animals or totems, are spiritual guides that 
                represent different aspects of our personality, strengths, and life journey. These 
                sacred beings have been revered across cultures for thousands of years, from Native 
                American traditions to Celtic mythology and beyond.
              </p>
              <p className="text-silver-fog leading-relaxed mb-6">
                Each spirit animal embodies unique qualities, traits, and wisdom that can provide 
                guidance, protection, and insight into our true nature. By connecting with your 
                spirit animal, you can gain a deeper understanding of yourself and your path in life.
              </p>
              <div className="bg-moon-beige p-6 rounded-lg border-l-4 border-mystic-sage">
                <p className="text-charcoal-mist font-medium italic">
                  "The spirit animal is not just a symbol, but a living connection to the natural 
                  world and the wisdom it holds. It reflects our innermost qualities and helps us 
                  navigate life's challenges with grace and strength."
                </p>
              </div>
            </div>
          </section>

          {/* How Our Quiz Works section */}
          <section className="card bg-soft-ivory">
            <h2 className="text-3xl font-bold text-charcoal-mist mb-6">
              How Our Quiz Works
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-charcoal-mist mb-3">
                  🧠 Thoughtful Question Design
                </h3>
                <p className="text-silver-fog leading-relaxed">
                  Our quiz features 15 carefully crafted questions across six categories: behavioral responses, 
                  social preferences, environmental affinity, decision-making style, life motivation, and 
                  conflict resolution. Each question is designed to reveal different aspects of your personality 
                  and help us match you with your most compatible spirit animal.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-charcoal-mist mb-3">
                  🎯 Simple Scoring System
                </h3>
                <p className="text-silver-fog leading-relaxed">
                  Our scoring system analyzes your responses and assigns points to different 
                  spirit animals based on personality traits and preferences. The system considers not 
                  just individual answers, but patterns across all questions to ensure accurate results.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-charcoal-mist mb-3">
                  📊 Confidence Assessment
                </h3>
                <p className="text-silver-fog leading-relaxed">
                  We provide a confidence level for your result based on the number of questions answered 
                  and the clarity of your responses. This helps you understand how reliable your result is 
                  and whether you might benefit from retaking the quiz.
                </p>
              </div>
            </div>
          </section>

          {/* The Science Behind section */}
          <section className="card card-mystical">
            <h2 className="text-3xl font-bold text-charcoal-mist mb-6">
              The Science Behind Spirit Animals
            </h2>
            <div className="space-y-6">
              <p className="text-silver-fog leading-relaxed">
                While spirit animals are deeply rooted in spiritual and cultural traditions, modern 
                psychology recognizes the value of animal symbolism in understanding human personality. 
                Our quiz combines ancient wisdom with contemporary psychological insights to provide 
                meaningful and accurate results.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-moon-beige p-6 rounded-lg">
                  <h4 className="font-semibold text-charcoal-mist mb-3">
                    🧬 Archetypal Psychology
                  </h4>
                  <p className="text-silver-fog text-sm">
                    Based on Carl Jung's work on archetypes and the collective unconscious, 
                    animal symbols represent universal patterns of human behavior and experience.
                  </p>
                </div>
                
                <div className="bg-moon-beige p-6 rounded-lg">
                  <h4 className="font-semibold text-charcoal-mist mb-3">
                    🎭 Personality Typology
                  </h4>
                  <p className="text-silver-fog text-sm">
                    Our system incorporates elements of established personality theories 
                    to ensure meaningful and psychologically grounded results.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Cultural Significance section */}
          <section className="card bg-soft-ivory">
            <h2 className="text-3xl font-bold text-charcoal-mist mb-6">
              Cultural Significance
            </h2>
            <div className="space-y-6">
              <p className="text-silver-fog leading-relaxed">
                Spirit animals have been revered across cultures for millennia, each tradition 
                bringing its own unique perspective and wisdom. Our quiz draws from this rich 
                tapestry of cultural knowledge to provide a comprehensive and respectful 
                representation of spirit animal traditions.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-3">🏹</div>
                  <h4 className="font-semibold text-charcoal-mist mb-2">
                    Native American
                  </h4>
                  <p className="text-silver-fog text-sm">
                    Spirit animals as guides, teachers, and protectors in the natural world.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl mb-3">🌿</div>
                  <h4 className="font-semibold text-charcoal-mist mb-2">
                    Celtic
                  </h4>
                  <p className="text-silver-fog text-sm">
                    Animal totems representing different aspects of nature and the otherworld.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl mb-3">🕉️</div>
                  <h4 className="font-semibold text-charcoal-mist mb-2">
                    Hindu/Buddhist
                  </h4>
                  <p className="text-silver-fog text-sm">
                    Sacred animals as manifestations of divine energy and spiritual qualities.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ section */}
          <section className="card card-mystical">
            <h2 className="text-3xl font-bold text-charcoal-mist mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-charcoal-mist mb-2">
                  How accurate is the spirit animal quiz?
                </h3>
                <p className="text-silver-fog leading-relaxed">
                  Our quiz is designed to provide meaningful and accurate results based on psychological 
                  principles and cultural wisdom. The accuracy depends on how honestly and thoughtfully 
                  you answer the questions. We provide a confidence level to help you understand the 
                  reliability of your result.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-charcoal-mist mb-2">
                  Can I have more than one spirit animal?
                </h3>
                <p className="text-silver-fog leading-relaxed">
                  Yes! Many people have a primary spirit animal and one or more secondary animals. 
                  Our quiz can identify both your primary and secondary spirit animals if your 
                  responses show strong connections to multiple animals.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-charcoal-mist mb-2">
                  What if I don't like my result?
                </h3>
                <p className="text-silver-fog leading-relaxed">
                  Spirit animals are meant to guide and teach us, sometimes revealing aspects of 
                  ourselves we need to work on. However, if you feel the result doesn't resonate, 
                  you can retake the quiz or explore the other animals in our database to find 
                  one that better matches your self-perception.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-charcoal-mist mb-2">
                  Is this quiz based on real spiritual traditions?
                </h3>
                <p className="text-silver-fog leading-relaxed">
                  Yes, our quiz is based on authentic spiritual and cultural traditions from around 
                  the world. We've researched Native American, Celtic, Hindu, Buddhist, and other 
                  traditions to create a respectful and accurate representation of spirit animal wisdom.
                </p>
              </div>
            </div>
          </section>

          {/* Call to action */}
          <section className="text-center">
            <div className="card bg-gradient-to-br from-mystic-sage to-forest-whisper text-white">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Discover Your Spirit Animal?
              </h2>
              <p className="text-xl mb-6 opacity-90">
                Take our free quiz and unlock the ancient wisdom within your soul.
              </p>
              <Link 
                href="/quiz" 
                className="btn bg-golden-amber text-charcoal-mist hover:bg-white text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                🦅 Start Your Journey
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
