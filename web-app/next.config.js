/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: true,
      },
    ]
  },
  output: 'standalone',
  env: {
    prodDbApiUrl: 'http://dbmicroservice:80',
    devDbApiUrl: 'http://localhost:4000',
    prodAccountApiUrl: 'http://accountmicroservice:81',
    devAccountApiUrl: 'http://localhost:5069',
    prodMinecraftApiUrl: 'http://minecraftmicroservice:82',
    devMinecraftApiUrl: 'http://localhost:5069'
  }
}

module.exports = nextConfig
