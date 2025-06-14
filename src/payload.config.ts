import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres'

import path from 'path'
import { buildConfig, PayloadRequest } from 'payload'
import sharp from 'sharp' // sharp-import
import { fileURLToPath } from 'url'

import { defaultLexical } from '@/fields/defaultLexical'
import { Categories } from './collections/Categories'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Posts } from './collections/Posts'
import { Questions } from './collections/Questions'
import { Users } from './collections/Users'
import { plugins } from './plugins'
import { getServerSideURL } from './utilities/getURL'
import { en } from '@payloadcms/translations/languages/en'
import { ru } from '@payloadcms/translations/languages/ru'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  localization: {
      locales: [
        { label: 'Edit Russian', code: 'ru' },
        { label: 'Edit Kazakh', code: 'kz' },
        { label: 'Edit English', code: 'en' },
      ],
      defaultLocale: 'ru',
    },
    i18n: {
      supportedLanguages: { ru, en },
    },
  admin: {
    components: {
      views: {
        dashboard: {
          Component: '/elements/Dashboard#Dashboard',
        },
      },
      beforeLogin: ['/elements/BeforeLogin#BeforeLogin'],
      graphics: {
        Icon: '/elements/Logo#Icon',
        Logo: '/elements/Logo#Logo',
      },
      Nav: '/elements/Nav#Nav',
    },
    avatar: {
      Component: '/elements/Avatar#Avatar',
    },
    theme: 'dark', // For demo purposes light mode is not implemented... yet!
    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: Users.slug,
    livePreview: {
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  // This config helps us configure global or default features that the other editors can inherit
  editor: defaultLexical,
  db: vercelPostgresAdapter(),
  collections: [Pages, Posts, Questions, Media, Categories, Users],
  cors: [getServerSideURL()].filter(Boolean),
  plugins: [
    ...plugins,
    // storage-adapter-placeholder
  ],
  secret: process.env.PAYLOAD_SECRET,
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  jobs: {
    access: {
      run: ({ req }: { req: PayloadRequest }): boolean => {
        // Allow logged in users to execute this endpoint (default)
        if (req.user) return true

        // If there is no logged in user, then check
        // for the Vercel Cron secret to be present as an
        // Authorization header:
        const authHeader = req.headers.get('authorization')
        return authHeader === `Bearer ${process.env.CRON_SECRET}`
      },
    },
    tasks: [],
  },
})
