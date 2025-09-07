/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration for the Spirit Animal Discovery Website
  // This file configures Next.js build settings and optimizations
  images: {
    // Configure image optimization for animal photos
    domains: ['localhost'], // Add your image CDN domain here
    formats: ['image/webp', 'image/avif'], // Use modern image formats for better performance
  },
  // Enable static optimization for better SEO
  output: 'standalone',
}

module.exports = nextConfig
