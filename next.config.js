/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["avatars.githubusercontent.com", "images.unsplash.com", "www.mercurynews.com", "www.washingtonpost.com", "imgs.callofduty.com", "live.staticflickr.com", "cdn.apollo.audio", "image.cnbcfm.com", "m.media-amazon.com", "boldoutline.in", "www.google.com.hk"],
    }
}

module.exports = nextConfig
