// Utilisez la syntaxe d'exportation ES Module
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Utilisez remotePatterns à la place de domains
    remotePatterns: [
      {
        protocol: 'https', // Spécifiez le protocole (optionnel si seulement https est utilisé)
        hostname: 'images.unsplash.com', // Spécifiez le domaine ici
      },
    ],
  },
  reactStrictMode: true, // Active le mode strict de React
};

export default nextConfig;
