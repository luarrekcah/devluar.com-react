/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.discordapp.com',
          },
        ],
      },
      async headers() {
        return [
          {
            source: '/(.*)',
            headers: [
              {
                key: 'Access-Control-Allow-Origin',
                value: '*',
              },
            ],
          },
        ];
      },
}

module.exports = nextConfig
