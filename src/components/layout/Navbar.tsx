/**
 * Navbar Component for Spirit Animal Discovery Website
 * 
 * This component provides the main navigation for the website with
 * the SpiritMirror branding and links to key pages.
 * 
 * Author: Spirit Animal Discovery Team
 * Date: 2024
 * Purpose: Provide consistent navigation across all pages
 * 
 * Features:
 * - SpiritMirror branding
 * - Navigation links (Home, Quiz, Animals)
 * - Mobile-responsive design
 * - Blends with existing design system
 * - No user authentication features
 */

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

/**
 * Navbar Component
 * 
 * This component renders the main navigation bar with SpiritMirror branding
 * and navigation links. It automatically highlights the current page.
 * 
 * @returns JSX element with the navigation bar
 */
export default function Navbar() {
  const pathname = usePathname()

  /**
   * Check if a navigation link is currently active
   */
  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true
    if (path !== '/' && pathname.startsWith(path)) return true
    return false
  }

  /**
   * Get styling for navigation links based on active state
   */
  const getLinkStyle = (path: string) => {
    const baseStyle = "px-4 py-2 rounded-lg transition-all duration-300 font-medium"
    const activeStyle = "bg-mystic-sage text-white shadow-md"
    const inactiveStyle = "text-charcoal-mist hover:bg-mystic-sage/10 hover:text-mystic-sage"
    
    return `${baseStyle} ${isActive(path) ? activeStyle : inactiveStyle}`
  }

  return (
    <nav className="bg-soft-ivory/95 backdrop-blur-sm border-b border-mystic-sage/20 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 text-2xl font-bold text-charcoal-mist hover:text-mystic-sage transition-colors duration-300"
          >
            <span className="text-3xl">🪞</span>
            <span>SpiritMirror</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-2">
            <Link href="/" className={getLinkStyle('/')}>
              Home
            </Link>
            <Link href="/quiz" className={getLinkStyle('/quiz')}>
              Quiz
            </Link>
            <Link href="/animals" className={getLinkStyle('/animals')}>
              Animals
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-charcoal-mist hover:text-mystic-sage transition-colors duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className="md:hidden border-t border-mystic-sage/20 py-4">
          <div className="flex flex-col space-y-2">
            <Link href="/" className={getLinkStyle('/')}>
              Home
            </Link>
            <Link href="/quiz" className={getLinkStyle('/quiz')}>
              Quiz
            </Link>
            <Link href="/animals" className={getLinkStyle('/animals')}>
              Animals
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
