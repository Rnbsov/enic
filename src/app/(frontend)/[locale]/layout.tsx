import type { Metadata } from 'next'

import { cn } from '@/utilities/ui'
import { Roboto } from 'next/font/google'
import { Roboto_Mono } from 'next/font/google'
import React from 'react'

import { AdminBar } from '@/components/AdminBar'
import Footer from '@/components/MainPage/footer'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'

import Navigation from '@/components/MainPage/Navigation'
import { getServerSideURL } from '@/utilities/getURL'
import '../globals.css'
import LocaleLayout from './locale-layout'
import Breadcrumbs from '@/components/MainPage/Breadcrumbs'
import AccessibilityToggle from '@/components/MainPage/AccessibilityToggle'
import ChatbotWidget from '@/components/MainPage/ChatbotWidget'

const roboto = Roboto({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-roboto',
  display: 'swap',
})

const robotoMono = Roboto_Mono({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin', 'cyrillic'],
  variable: '--font-roboto-mono',
  display: 'swap',
})

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { isEnabled } = await draftMode()

  return (
    <html className={cn(roboto.variable, robotoMono.variable)} lang="en" suppressHydrationWarning>
      <head>
        <InitTheme />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body>
        <Providers>
          <AdminBar
            adminBarProps={{
              preview: isEnabled,
            }}
          />
          <LocaleLayout params={params}>
            <AccessibilityToggle />
            <Navigation />
            <Breadcrumbs />

            {children}
            <Footer />
            <ChatbotWidget />
          </LocaleLayout>
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@payloadcms',
  },
}
