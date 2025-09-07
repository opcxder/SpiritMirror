/**
 * Blog Page Component for Spirit Animal Discovery Website
 * 
 * This page displays the blog section with articles about spirit animals,
 * spiritual guidance, and related topics.
 * 
 * Author: Spirit Animal Discovery Team
 * Date: 2024
 * Purpose: Educational content and SEO optimization
 * 
 * Features:
 * - Blog post listings
 * - Article previews
 * - Search and filtering
 * - Mobile-responsive design
 * - SEO optimization
 */

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Metadata } from 'next'

// Blog post data structure
interface BlogPost {
  id: string
  title: string
  excerpt: string
  slug: string
  publishDate: string
  readTime: string
  category: string
  tags: string[]
  featured: boolean
}

// Sample blog posts (you can expand this)
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'What are Spirit Animals? Complete Guide to Understanding Your Spiritual Connection',
    excerpt: 'Discover what spirit animals are, their meanings, and how to find yours. Complete guide covering symbolism, cultural significance, and practical steps to connect with your spirit animal.',
    slug: 'what-are-spirit-animals-complete-guide',
    publishDate: '2024-01-15',
    readTime: '10-12 minutes',
    category: 'Spiritual Guidance',
    tags: ['spirit animals', 'spiritual connection', 'animal guides', 'meditation'],
    featured: true
  }
  // Add more blog posts here as you create them
]

/**
 * Main Blog Page Component
 * 
 * This component displays the blog listing page with:
 * - Featured articles
 * - Recent posts
 * - Category filtering
 * - Search functionality
 * 
 * @returns JSX element with the blog page interface
 */
export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Filter posts based on search and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))]

  return (
    <div className="min-h-screen bg-moon-beige">
      {/* Blog header */}
      <div className="bg-soft-ivory border-b border-mystic-sage/20">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal-mist mb-6">
              Spirit Animal Blog
            </h1>
            <p className="text-lg text-silver-fog mb-8">
              Discover the wisdom of spirit animals through our comprehensive guides, 
              spiritual insights, and practical advice for connecting with your animal guides.
            </p>
            
            {/* Search and filter */}
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <div className="relative w-full md:w-96">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-10 rounded-lg border border-mystic-sage/30 focus:outline-none focus:ring-2 focus:ring-mystic-sage/50 focus:border-transparent"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-silver-fog">
                  🔍
                </div>
              </div>
              
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 rounded-lg border border-mystic-sage/30 focus:outline-none focus:ring-2 focus:ring-mystic-sage/50 focus:border-transparent bg-white"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Blog content */}
      <div className="container mx-auto px-4 py-12">
        {/* Featured post */}
        {filteredPosts.filter(post => post.featured).length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-charcoal-mist mb-6">Featured Article</h2>
            <div className="card card-mystical">
              {filteredPosts.filter(post => post.featured).map(post => (
                <div key={post.id} className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-2/3">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-mystic-sage/20 text-mystic-sage rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <span className="text-silver-fog text-sm">
                        {new Date(post.publishDate).toLocaleDateString()} • {post.readTime}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-charcoal-mist mb-4">
                      {post.title}
                    </h3>
                    
                    <p className="text-silver-fog text-lg mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-soft-ivory text-charcoal-mist rounded text-sm">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link
                      href={`/blog/${post.slug}`}
                      className="btn btn-primary inline-flex items-center gap-2"
                    >
                      Read Full Article
                      <span>→</span>
                    </Link>
                  </div>
                  
                  <div className="lg:w-1/3">
                    <div className="bg-mystic-sage/10 rounded-lg p-8 text-center">
                      <div className="text-6xl mb-4">🦅</div>
                      <h4 className="text-lg font-semibold text-charcoal-mist mb-2">
                        Discover Your Spirit Animal
                      </h4>
                      <p className="text-silver-fog text-sm mb-4">
                        Take our comprehensive quiz to find your spiritual guide
                      </p>
                      <Link href="/quiz" className="btn btn-outline">
                        Take Quiz Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All posts */}
        <div>
          <h2 className="text-2xl font-bold text-charcoal-mist mb-6">
            {selectedCategory === 'All' ? 'All Articles' : `${selectedCategory} Articles`}
          </h2>
          
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map(post => (
                <article key={post.id} className="card bg-soft-ivory hover:shadow-lg transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-mystic-sage/20 text-mystic-sage rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <span className="text-silver-fog text-sm">
                        {new Date(post.publishDate).toLocaleDateString()}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-charcoal-mist mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-silver-fog mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-silver-fog text-sm">
                        {post.readTime}
                      </span>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-mystic-sage hover:text-forest-whisper font-medium transition-colors"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-charcoal-mist mb-2">
                No articles found
              </h3>
              <p className="text-silver-fog">
                Try adjusting your search terms or category filter
              </p>
            </div>
          )}
        </div>

        {/* Call to action */}
        <div className="mt-16 mb-10 text-center">
          <div className="card card-mystical max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-charcoal-mist mb-4">
              Ready to Discover Your Spirit Animal?
            </h3>
            <p className="text-silver-fog mb-6">
              Take our comprehensive quiz and unlock the wisdom of your spiritual guide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quiz" className="btn btn-primary">
                Take Spirit Animal Quiz
              </Link>
              <Link href="/animals" className="btn btn-outline">
                Explore All Animals
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
