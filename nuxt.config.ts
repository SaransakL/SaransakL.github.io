export default defineNuxtConfig({
  app: {
    head: {
      title: 'Saransak',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },

        { name: 'description', content: 'Saransak' },

        { property: 'og:title', content: 'Saransak' },
        { property: 'og:image', content: 'https://saransak.vercel.app/assets/saransak-logo.svg' },
        { property: 'og:url', content: 'https://saransak.vercel.app' },
        { property: 'og:type', content: 'website' },

        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Saransak' },
        { name: 'twitter:image', content: 'https://saransak.vercel.app/assets/saransak-logo.svg' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+Thai+Looped:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
        },
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css'
        }
      ]
    }
  }
})