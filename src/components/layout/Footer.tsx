/**
 * Footer Component for Spirit Animal Discovery Website
 * 
 * This component provides a simple footer with a tagline and basic
 * information about the SpiritMirror project.
 * 
 * Author: Spirit Animal Discovery Team
 * Date: 2024
 * Purpose: Provide consistent footer across all pages
 * 
 * Features:
 * - Simple tagline
 * - Blends with existing design system
 * - Minimal and clean design
 * - Mobile-responsive
 */

import Link from 'next/link'

/**
 * Footer Component
 * 
 * This component renders a simple footer with the SpiritMirror tagline
 * and basic navigation links.
 * 
 * @returns JSX element with the footer
 */
export default function Footer() {
  return (
    <footer className="bg-charcoal-mist text-soft-ivory border-t border-mystic-sage/20">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          {/* Tagline */}
          <div className="mb-4 mt-4">
            <h3 className="text-xl font-semibold text-golden-amber mb-2">
              SpiritMirror
            </h3>
            <p className="text-silver-fog">
              Discover your true spirit animal and unlock the wisdom within
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex justify-center space-x-6 mb-4">
            <Link 
              href="/" 
              className="text-silver-fog hover:text-golden-amber transition-colors duration-300"
            >
              Home
            </Link>
            <Link 
              href="/quiz" 
              className="text-silver-fog hover:text-golden-amber transition-colors duration-300"
            >
              Quiz
            </Link>
            <Link 
              href="/animals" 
              className="text-silver-fog hover:text-golden-amber transition-colors duration-300"
            >
              Animals
            </Link>
            <Link 
              href="/about" 
              className="text-silver-fog hover:text-golden-amber transition-colors duration-300"
            >
              About
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-sm text-silver-fog/70 mb-5">
            © 2024 SpiritMirror. Discover your spiritual connection.
          </div>
        </div>
      </div>
    </footer>
  )
}
