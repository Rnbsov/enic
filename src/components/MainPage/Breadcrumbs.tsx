'use client'

import React from 'react'
import { ChevronRight, Home } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

interface BreadcrumbConfig {
  [key: string]: string
}

// FIXME: Rewritten this component, might need fix

const Breadcrumbs = () => {
  const pathname = usePathname()
  const t = useTranslations('breadcrumbs')

  // Don't show breadcrumbs on home page
  if (pathname === '/') {
    return null
  }

  // Remove locale prefix from pathname if it exists
  const pathWithoutLocale = pathname.split('/').slice(2).join('/')
  const pathSegments = pathname.split('/').filter((x) => x)

  // Check if first segment is a locale and remove it for breadcrumb calculation
  const locales = ['en', 'ru', 'kz']
  const firstSegmentIsLocale = pathSegments.length > 0 && locales.includes(pathSegments[0])
  const segments = firstSegmentIsLocale ? pathSegments.slice(1) : pathSegments

  return (
    <div className="bg-gray-50 border-b">
      <div className="container mx-auto px-4 py-3">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  href="/"
                  className="flex items-center text-brand-blue-600 hover:text-brand-blue-700"
                >
                  <Home className="w-4 h-4 mr-1" />
                  {t('home')}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            {segments.map((segment, index) => {
              // Build the route progressively
              const routeSegments = segments.slice(0, index + 1)
              const routeTo = `/${routeSegments.join('/')}`
              const isLast = index === segments.length - 1

              // Try to get translation key based on segment
              const translationKey = segment.toLowerCase()

              return (
                <React.Fragment key={routeTo}>
                  <BreadcrumbSeparator>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    {isLast ? (
                      <BreadcrumbPage className="text-gray-900 font-medium">
                        {t(translationKey, { fallback: segment })}
                      </BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink asChild>
                        <Link
                          href={routeTo}
                          className="text-brand-blue-600 hover:text-brand-blue-700"
                        >
                          {t(translationKey, { fallback: segment })}
                        </Link>
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                </React.Fragment>
              )
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  )
}

export default Breadcrumbs
