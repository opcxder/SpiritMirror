/**
 * Share Button Component for Spirit Animal Discovery Website
 * 
 * This component provides sharing functionality for quiz results,
 * allowing users to share their spirit animal discovery on social media
 * or copy the result to their clipboard.
 * 
 * Author: Spirit Animal Discovery Team
 * Date: 2024
 * Purpose: Enable users to share their spirit animal results
 * 
 * Features:
 * - Social media sharing
 * - Clipboard copy functionality
 * - Web Share API support
 * - Fallback for unsupported browsers
 * - Toast notifications
 * - Accessibility features
 */

'use client'

import { useState } from 'react'

/**
 * Props interface for ShareButton component
 */
interface ShareButtonProps {
  onShare: () => void
  animalName: string
}

/**
 * Share Button Component
 * 
 * This component renders a share button with multiple sharing options,
 * including social media sharing and clipboard copy functionality.
 * 
 * @param onShare - Callback function for sharing
 * @param animalName - Name of the spirit animal to share
 * @returns JSX element with the share button interface
 */
export default function ShareButton({ onShare, animalName }: ShareButtonProps) {
  // State for share menu visibility and feedback
  const [showShareMenu, setShowShareMenu] = useState(false)
  const [shareFeedback, setShareFeedback] = useState<string | null>(null)

  /**
   * Handle share button click
   * 
   * This function shows the share menu or triggers the share action
   * depending on the browser's capabilities.
   */
  const handleShareClick = () => {
    // Check if Web Share API is available
    if ('share' in navigator) {
      // Use native share dialog
      onShare()
    } else {
      // Show custom share menu
      setShowShareMenu(!showShareMenu)
    }
  }

  /**
   * Handle social media sharing
   * 
   * @param platform - Social media platform to share to
   */
  const handleSocialShare = (platform: string) => {
    const shareText = `I discovered my spirit animal is the ${animalName}! 🦅 Take the quiz to find yours:`
    const shareUrl = window.location.origin
    const encodedText = encodeURIComponent(shareText)
    const encodedUrl = encodeURIComponent(shareUrl)

    let shareLink = ''

    switch (platform) {
      case 'twitter':
        shareLink = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`
        break
      case 'facebook':
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
        break
      case 'linkedin':
        shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`
        break
      case 'whatsapp':
        shareLink = `https://wa.me/?text=${encodedText}%20${encodedUrl}`
        break
      case 'telegram':
        shareLink = `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`
        break
      case 'reddit':
        shareLink = `https://reddit.com/submit?url=${encodedUrl}&title=${encodedText}`
        break
      default:
        return
    }

    // Open share link in new window
    window.open(shareLink, '_blank', 'width=600,height=400')
    setShowShareMenu(false)
    setShareFeedback(`Shared to ${platform}!`)
    setTimeout(() => setShareFeedback(null), 3000)
  }

  /**
   * Handle copy to clipboard
   */
  const handleCopyToClipboard = async () => {
    const shareText = `I discovered my spirit animal is the ${animalName}! 🦅 Take the quiz to find yours: ${window.location.origin}`
    
    try {
      await navigator.clipboard.writeText(shareText)
      setShareFeedback('Copied to clipboard!')
      setShowShareMenu(false)
      setTimeout(() => setShareFeedback(null), 3000)
    } catch (err) {
      console.error('Failed to copy to clipboard:', err)
      setShareFeedback('Failed to copy to clipboard')
      setTimeout(() => setShareFeedback(null), 3000)
    }
  }

  /**
   * Handle email sharing
   */
  const handleEmailShare = () => {
    const subject = `My Spirit Animal: ${animalName}`
    const body = `I discovered my spirit animal is the ${animalName}! 🦅\n\nTake the quiz to find yours: ${window.location.origin}`
    const mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    
    window.location.href = mailtoLink
    setShowShareMenu(false)
    setShareFeedback('Email opened!')
    setTimeout(() => setShareFeedback(null), 3000)
  }

  return (
    <div className="relative">
      {/* Main share button */}
      <button
        onClick={handleShareClick}
        className="btn btn-primary flex items-center gap-2"
        aria-label="Share your spirit animal result"
      >
        <span>📤</span>
        Share Your Result
      </button>

      {/* Share feedback */}
      {shareFeedback && (
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-charcoal-mist text-white px-3 py-1 rounded-md text-sm whitespace-nowrap animate-fade-in">
          {shareFeedback}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-charcoal-mist"></div>
        </div>
      )}

      {/* Share menu */}
      {showShareMenu && (
        <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-50 min-w-64 animate-slide-up">
          <div className="text-sm font-semibold text-charcoal-mist mb-3">
            Share Your Spirit Animal
          </div>
          
          {/* Social media buttons */}
          <div className="grid grid-cols-2 gap-2 mb-3">
            <button
              onClick={() => handleSocialShare('twitter')}
              className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition-colors text-sm"
            >
              <span>🐦</span>
              Twitter
            </button>
            
            <button
              onClick={() => handleSocialShare('facebook')}
              className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition-colors text-sm"
            >
              <span>📘</span>
              Facebook
            </button>
            
            <button
              onClick={() => handleSocialShare('linkedin')}
              className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition-colors text-sm"
            >
              <span>💼</span>
              LinkedIn
            </button>
            
            <button
              onClick={() => handleSocialShare('whatsapp')}
              className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition-colors text-sm"
            >
              <span>💬</span>
              WhatsApp
            </button>
            
            <button
              onClick={() => handleSocialShare('telegram')}
              className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition-colors text-sm"
            >
              <span>✈️</span>
              Telegram
            </button>
            
            <button
              onClick={() => handleSocialShare('reddit')}
              className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition-colors text-sm"
            >
              <span>🤖</span>
              Reddit
            </button>
          </div>
          
          {/* Other sharing options */}
          <div className="border-t border-gray-200 pt-3 space-y-2">
            <button
              onClick={handleCopyToClipboard}
              className="w-full flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition-colors text-sm"
            >
              <span>📋</span>
              Copy Link
            </button>
            
            <button
              onClick={handleEmailShare}
              className="w-full flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition-colors text-sm"
            >
              <span>📧</span>
              Email
            </button>
          </div>
        </div>
      )}

      {/* Backdrop to close menu */}
      {showShareMenu && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowShareMenu(false)}
        />
      )}
    </div>
  )
}
