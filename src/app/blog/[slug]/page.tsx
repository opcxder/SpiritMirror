/**
 * Individual Blog Post Page Component for Spirit Animal Discovery Website
 * 
 * This page displays individual blog posts with full content,
 * navigation, and related articles.
 * 
 * Author: Spirit Animal Discovery Team
 * Date: 2024
 * Purpose: Display blog post content with SEO optimization
 * 
 * Features:
 * - Full blog post content
 * - Table of contents
 * - Social sharing
 * - Related articles
 * - SEO optimization
 * - Mobile-responsive design
 */

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

// Blog post content data
const blogPosts = {
  'what-are-spirit-animals-complete-guide': {
    id: '1',
    title: 'What are Spirit Animals? Complete Guide to Understanding Your Spiritual Connection',
    slug: 'what-are-spirit-animals-complete-guide',
    publishDate: '2024-01-15',
    readTime: '10-12 minutes',
    category: 'Spiritual Guidance',
    tags: ['spirit animals', 'spiritual connection', 'animal guides', 'meditation', 'totem animals'],
    featured: true,
    metaDescription: 'Discover what spirit animals are, their meanings, and how to find yours. Complete guide covering symbolism, cultural significance, and practical steps to connect with your spirit animal.',
    content: `
# What are Spirit Animals? Complete Guide to Understanding Your Spiritual Connection

**Spirit animals** are spiritual guides believed to offer wisdom, protection, and insight throughout your life journey. These animal spirits are thought to reflect your inner nature, represent your strengths and challenges, and provide guidance during important life transitions.

Unlike physical animals, spirit animals exist in the spiritual realm and connect with individuals through dreams, meditation, synchronicities, and intuitive experiences. They serve as messengers from the natural world, helping us understand our place in the greater web of life.

## Key Characteristics of Spirit Animals:
- **Spiritual guides** that appear during significant life moments
- **Reflection of personality traits** and life lessons
- **Protective energy** that offers comfort and strength
- **Teachers** that provide wisdom through symbolic meanings
- **Bridges** between the physical and spiritual worlds

## The History and Cultural Origins

### Indigenous Traditions

The concept of spirit animals has deep roots in **Indigenous North American cultures**, where animal spirits have been revered for thousands of years. Many Native American tribes believe that every person has one or more animal guides that walk alongside them throughout life.

**Key Indigenous Beliefs:**
- Animals possess unique spiritual qualities and wisdom
- Humans can learn from animal behaviors and characteristics
- Spiritual animals choose their human partners, not vice versa
- Respect and reciprocity are essential in animal-human spiritual relationships

### Global Animal Spirituality

Similar concepts exist across cultures worldwide:

**Celtic Tradition:** Animal spirits as protectors and guides in the Otherworld
**Aboriginal Australian:** Dreamtime animals as ancestral spirits
**African Traditions:** Animal totems representing clan identity and spiritual power
**Hindu & Buddhist:** Animals as sacred beings with divine qualities
**Shamanic Practices:** Animal spirits as allies in healing and spiritual journeys

## Spirit Animals vs Totem Animals vs Power Animals

While these terms are often used interchangeably, they have distinct meanings:

### Spirit Animals
- **Personal guides** that appear temporarily or permanently
- Offer **specific messages** or lessons
- Can change throughout your lifetime
- Connected through **personal spiritual experiences**

### Totem Animals
- **Hereditary or clan-based** animal connections
- Represent **family or group identity**
- Typically **permanent** throughout life
- Rooted in **cultural or ancestral traditions**

### Power Animals
- **Shamanic concept** of animal allies
- Provide **specific powers** or abilities
- Retrieved through **shamanic journeying**
- Focus on **healing and protection**

## How Spirit Animals Communicate With Us

Spirit animals reach out through various channels:

### 1. Dreams and Visions
- **Recurring animal dreams** with significant meaning
- **Vivid encounters** that feel more real than ordinary dreams
- **Symbolic messages** delivered through dream scenarios

### 2. Physical World Encounters
- **Unusual animal behavior** or repeated sightings
- **Animals appearing** in unexpected places or times
- **Close encounters** that feel spiritually significant

### 3. Meditation and Quiet Moments
- **Animal imagery** appearing during meditation
- **Spontaneous visions** of specific animals
- **Inner knowing** about animal connections

### 4. Synchronicities and Signs
- **Repeated animal symbols** in art, media, or conversations
- **Animal imagery** appearing during important decisions
- **Meaningful coincidences** involving specific animals

## Common Spirit Animals and Their Meanings

### Land Animals

**Wolf** 🐺
- **Meaning:** Leadership, loyalty, family bonds
- **Message:** Trust your instincts and lead with wisdom
- **Qualities:** Pack mentality, fierce protection, intuition

**Bear** 🐻
- **Meaning:** Strength, healing, introspection
- **Message:** Take time for self-reflection and renewal
- **Qualities:** Courage, hibernation wisdom, maternal protection

**Fox** 🦊
- **Meaning:** Cunning, adaptability, intelligence
- **Message:** Use cleverness to navigate complex situations
- **Qualities:** Shapeshifting, camouflage, wit

### Birds

**Eagle** 🦅
- **Meaning:** Vision, freedom, spiritual connection
- **Message:** See the bigger picture and soar above challenges
- **Qualities:** Sharp sight, high perspective, dignity

**Owl** 🦉
- **Meaning:** Wisdom, intuition, hidden knowledge
- **Message:** Look beyond illusions to find truth
- **Qualities:** Night vision, silent flight, ancient wisdom

**Hawk** 🦅
- **Meaning:** Focus, clarity, messengers
- **Message:** Pay attention to signs and stay focused on goals
- **Qualities:** Keen observation, hunting precision, solar energy

### Water Animals

**Dolphin** 🐬
- **Meaning:** Joy, playfulness, communication
- **Message:** Approach life with lightness and connect through love
- **Qualities:** Intelligence, healing, group harmony

**Turtle** 🐢
- **Meaning:** Patience, longevity, grounding
- **Message:** Slow and steady progress leads to lasting success
- **Qualities:** Ancient wisdom, shell protection, earth connection

## How to Discover Your Spirit Animal

### Method 1: Meditation Journey

**Steps:**
1. **Create sacred space** with candles, crystals, or incense
2. **Sit comfortably** and close your eyes
3. **Set intention** to meet your spirit animal guide
4. **Visualize walking** through a natural landscape
5. **Notice what animals** appear and how they interact with you
6. **Ask questions** and listen for responses
7. **Thank the animal** before returning to awareness

### Method 2: Dream Work

**Preparation:**
- Keep a **dream journal** by your bedside
- Set **clear intention** before sleep
- Ask your spirit animal to **reveal itself in dreams**
- Record **all animal encounters** in dreams

**Interpretation:**
- Look for **recurring animal themes**
- Note **emotional feelings** associated with dream animals
- Consider **actions and behaviors** of dream animals
- Research **symbolic meanings** of featured animals

### Method 3: Nature Observation

**Practice:**
- Spend **quiet time in nature** regularly
- **Notice which animals** you encounter repeatedly
- Observe **unusual animal behaviors** around you
- Pay attention to **animals that capture your attention**

### Method 4: Synchronicity Tracking

**Awareness:**
- **Document animal appearances** in daily life
- Notice **animal symbols** in art, books, or media
- Track **meaningful animal encounters** or references
- Look for **patterns and repetitions**

## Working With Your Spirit Animal

### Building the Connection

**Daily Practices:**
- **Morning acknowledgment** of your spirit animal
- **Carry animal symbols** or images
- **Study animal behaviors** and habitats
- **Incorporate animal qualities** into daily life

### Seeking Guidance

**When to Call Upon Your Spirit Animal:**
- During **major life decisions**
- When facing **challenges or obstacles**
- Seeking **clarity or direction**
- Needing **strength or courage**
- Desiring **spiritual growth**

### Honoring Your Spirit Animal

**Respectful Practices:**
- Learn about the **animal's natural habitat and needs**
- Support **conservation efforts** for your spirit animal
- Create **altar space** with animal representations
- **Never harm** your spirit animal in physical form
- **Share wisdom** respectfully with others

## Misconceptions About Spirit Animals

### Common Myths Debunked

**Myth 1:** "You choose your spirit animal"
**Truth:** Spirit animals choose you based on spiritual needs and life lessons

**Myth 2:** "Spirit animals are just Native American beliefs"
**Truth:** Animal spirituality exists across many cultures worldwide

**Myth 3:** "You can only have one spirit animal"
**Truth:** People often have multiple spirit animals for different life phases

**Myth 4:** "Fierce animals are better spirit guides"
**Truth:** All animals offer valuable wisdom regardless of perceived power

**Myth 5:** "Spirit animals must be exotic or rare"
**Truth:** Common animals like cats, dogs, or pigeons can be profound guides

### Cultural Appropriation Concerns

**Respectful Approach:**
- **Acknowledge Indigenous origins** of spirit animal concepts
- **Avoid claiming tribal-specific practices** without permission
- **Focus on personal spiritual connection** rather than cultural imitation
- **Support Indigenous communities** and their rights
- **Learn about cultural context** before adopting practices

## Scientific Perspective vs Spiritual Beliefs

### Scientific Viewpoint

**Psychological Explanations:**
- **Confirmation bias:** Noticing patterns that support existing beliefs
- **Anthropomorphism:** Attributing human characteristics to animals
- **Symbolism processing:** Brain's natural tendency to create meaning
- **Archetypal psychology:** Universal animal symbols in human consciousness

**Evolutionary Biology:**
- Humans evolved alongside animals, creating deep neural connections
- Animal behavior observation provided survival advantages
- Emotional bonds with animals served protective functions

### Spiritual Perspective

**Metaphysical Beliefs:**
- **Interconnectedness** of all living beings
- **Non-physical realms** where spirits communicate
- **Animal consciousness** extending beyond physical form
- **Universal wisdom** accessible through spiritual connection

### Finding Balance

Both scientific and spiritual perspectives offer valuable insights:
- **Personal meaning** can coexist with scientific understanding
- **Practical benefits** exist regardless of belief in supernatural aspects
- **Cultural significance** deserves respect independent of scientific proof
- **Individual experience** remains valid within chosen belief system

## Frequently Asked Questions

### Can I have more than one spirit animal?
**Yes!** Most people have multiple spirit animals throughout their lifetime. You might have a **primary guide** that stays with you long-term, plus **temporary guides** that appear during specific situations or life phases.

### How do I know if an animal encounter is spiritually significant?
Look for these **key indicators**:
- **Unusual circumstances** surrounding the encounter
- **Strong emotional response** to the animal
- **Repeated sightings** of the same animal type
- **Perfect timing** during important life moments
- **Inner knowing** that the encounter holds meaning

### What if my spirit animal is an insect or "undesirable" creature?
**Every creature** offers valuable wisdom! Insects and other small creatures often represent:
- **Attention to details** and small things
- **Community cooperation** and teamwork
- **Transformation** and metamorphosis
- **Persistence** and determination
- **Cycles of life** and renewal

### Can pets be spirit animals?
**Beloved pets** can definitely serve as spirit guides, especially after they pass away. Living pets might also carry spiritual significance, but it's important to distinguish between **physical animal companionship** and **spiritual animal guidance**.

### How long do spirit animal connections last?
**Duration varies greatly:**
- Some spirit animals are **lifelong companions**
- Others appear for **specific life phases** or challenges
- **Seasonal or temporary guides** may come and go
- **Multiple animals** might work with you simultaneously

### What if I can't identify my spirit animal?
**Be patient!** Spirit animal connection often develops over time:
- Continue **meditation and dream work**
- Stay **open to unexpected animals**
- Focus on **personal growth** rather than finding the "right" animal
- **Trust the process** and allow natural revelation

## Conclusion: Embracing Your Spiritual Animal Connection

Spirit animals offer a profound way to connect with the natural world and access ancient wisdom that can guide us through modern life challenges. Whether you view them as psychological symbols, spiritual guides, or cultural metaphors, these animal allies provide valuable insights into our deepest selves.

The journey of discovering and working with your spirit animal is deeply personal and unfolds uniquely for each individual. **Trust your intuition**, **remain open to unexpected messages**, and **approach the process with respect** for the rich cultural traditions that gave birth to these beautiful concepts.

Remember that the most important aspect of spirit animal work is not identifying the "perfect" animal, but developing a **deeper connection with nature**, **greater self-awareness**, and **openness to guidance** from the world around us.

Your spirit animal is waiting to connect with you. Take the first step by quieting your mind, opening your heart, and listening to the whispers of the wild that already exist within you.

**Ready to discover your spirit animal?** Start with meditation, keep a dream journal, and pay attention to the animals that cross your path. Your spiritual guide may be closer than you think.
    `
  }
}

/**
 * Individual Blog Post Page Component
 * 
 * This component displays a single blog post with:
 * - Full article content
 * - Table of contents
 * - Social sharing
 * - Related articles
 * - Navigation
 * 
 * @returns JSX element with the blog post interface
 */
export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string
  const [activeHeading, setActiveHeading] = useState('')
  
  const post = blogPosts[slug as keyof typeof blogPosts]

  // Generate table of contents from headings
  const generateTOC = (content: string) => {
    const headings = content.match(/^#{2,3}\s+(.+)$/gm)
    if (!headings) return []
    
    return headings.map(heading => {
      const level = heading.match(/^#+/)?.[0].length || 2
      const text = heading.replace(/^#+\s+/, '')
      const id = text.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-')
      return { level, text, id }
    })
  }

  const toc = post ? generateTOC(post.content) : []

  // Handle social sharing
  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href)
    const title = encodeURIComponent(post?.title || '')
    const text = encodeURIComponent(post?.metaDescription || '')
    
    let shareUrl = ''
    
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${title}&url=${url}`
        break
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`
        break
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
        break
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${title}%20${url}`
        break
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400')
    }
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-moon-beige flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-2xl font-bold text-charcoal-mist mb-4">
            Article Not Found
          </h1>
          <p className="text-silver-fog mb-6">
            The article you're looking for doesn't exist.
          </p>
          <Link href="/blog" className="btn btn-primary">
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-moon-beige">
      {/* Article header */}
      <div className="bg-soft-ivory border-b border-mystic-sage/20">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <Link href="/blog" className="text-mystic-sage hover:text-forest-whisper transition-colors">
                ← Back to Blog
              </Link>
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-mystic-sage/20 text-mystic-sage rounded-full text-sm font-medium">
                {post.category}
              </span>
              <span className="text-silver-fog text-sm">
                {new Date(post.publishDate).toLocaleDateString()} • {post.readTime}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal-mist mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-lg text-silver-fog mb-6 leading-relaxed">
              {post.metaDescription}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map(tag => (
                <span key={tag} className="px-2 py-1 bg-soft-ivory text-charcoal-mist rounded text-sm">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Article content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main content */}
            <article className="lg:w-2/3">
              <div className="prose prose-lg max-w-none">
                <div 
                  className="blog-content"
                  dangerouslySetInnerHTML={{ 
                    __html: post.content
                      .replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold text-charcoal-mist mb-6 mt-8">$1</h1>')
                      .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold text-charcoal-mist mb-4 mt-8" id="$1">$1</h2>')
                      .replace(/^### (.+)$/gm, '<h3 class="text-xl font-semibold text-charcoal-mist mb-3 mt-6">$1</h3>')
                      .replace(/^\- (.+)$/gm, '<li class="text-silver-fog mb-2">$1</li>')
                      .replace(/\*\*([^*]+)\*\*/g, '<strong class="font-semibold text-charcoal-mist">$1</strong>')
                      .replace(/\n\n/g, '</p><p class="text-silver-fog mb-4 leading-relaxed">')
                      .replace(/^(?!<[h|l])/gm, '<p class="text-silver-fog mb-4 leading-relaxed">')
                      .replace(/<p class="text-silver-fog mb-4 leading-relaxed"><\/p>/g, '')
                  }}
                />
              </div>
              
              {/* Social sharing */}
              <div className="mt-12 mb-8 pt-8 border-t border-mystic-sage/20">
                <h3 className="text-lg font-semibold text-charcoal-mist mb-4">
                  Share this article
                </h3>
                <div className="flex gap-4">
                  <button
                    onClick={() => handleShare('twitter')}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    🐦 Twitter
                  </button>
                  <button
                    onClick={() => handleShare('facebook')}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    📘 Facebook
                  </button>
                  <button
                    onClick={() => handleShare('linkedin')}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
                  >
                    💼 LinkedIn
                  </button>
                  <button
                    onClick={() => handleShare('whatsapp')}
                    className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                  >
                    💬 WhatsApp
                  </button>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:w-1/3">
              {/* Table of contents */}
              {toc.length > 0 && (
                <div className="card bg-soft-ivory mb-8">
                  <h3 className="text-lg font-semibold text-charcoal-mist mb-4">
                    Table of Contents
                  </h3>
                  <nav className="space-y-2">
                    {toc.map((item, index) => (
                      <a
                        key={index}
                        href={`#${item.id}`}
                        className={`block text-sm text-silver-fog hover:text-mystic-sage transition-colors ${
                          item.level === 3 ? 'ml-4' : ''
                        }`}
                      >
                        {item.text}
                      </a>
                    ))}
                  </nav>
                </div>
              )}

              {/* Call to action */}
              <div className="card card-mystical">
                <h3 className="text-lg font-semibold text-charcoal-mist mb-4">
                  Discover Your Spirit Animal
                </h3>
                <p className="text-silver-fog text-sm mb-4">
                  Take our comprehensive quiz to find your spiritual guide
                </p>
                <Link href="/quiz" className="btn btn-primary w-full text-center">
                  Take Quiz Now
                </Link>
              </div>

              {/* Related articles placeholder */}
              <div className="card bg-soft-ivory mt-8">
                <h3 className="text-lg font-semibold text-charcoal-mist mb-4">
                  Related Articles
                </h3>
                <p className="text-silver-fog text-sm">
                  More articles coming soon...
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  )
}
