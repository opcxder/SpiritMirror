/** @type {import('tailwindcss').Config} */
module.exports = {
  // Tailwind CSS configuration for Spirit Animal Discovery Website
  // This file defines the design system colors, fonts, and styling rules
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Custom color palette based on the design system
      colors: {
        // Primary brand colors
        'mystic-sage': '#9CAF88',      // Main brand color - calm, natural
        'forest-whisper': '#6B7C5E',   // Darker accent - deeper forest green
        'moon-beige': '#F5F1EB',       // Light background - warm, inviting
        'earth-clay': '#D4B896',       // Warm accent - earthy, grounded
        'charcoal-mist': '#3C3C3C',    // Primary text - readable, professional
        'silver-fog': '#8A8A8A',       // Secondary text - subtle, elegant
        
        // Accent colors for CTAs and highlights
        'golden-amber': '#E6B85C',     // Call-to-action - attention-grabbing
        'deep-forest': '#2C4A3B',      // Buttons - strong, trustworthy
        'soft-ivory': '#FEFCF8',       // Cards/backgrounds - clean, pure
      },
      // Custom typography system
      fontFamily: {
        'heading': ['Inter', 'sans-serif'],     // Modern, clean headings
        'body': ['Open Sans', 'sans-serif'],    // Readable, friendly body text
        'accent': ['Crimson Text', 'serif'],    // Mystical touch for spirit animal names
      },
      // Custom animations for mystical feel
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-gentle': 'pulseGentle 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseGentle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
}
