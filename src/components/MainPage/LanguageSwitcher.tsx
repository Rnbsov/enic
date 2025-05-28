'use client'

import React from 'react'
import { Globe, ChevronDown } from 'lucide-react'
import { useLocale } from 'next-intl'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { usePathname, useRouter } from '@/i18n/nativation'

// Define languages with their display properties
const LANGUAGES = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'kz', name: 'Қазақша', flag: '🇰🇿' },
]

const LanguageSwitcher = () => {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const currentLang = LANGUAGES.find((lang) => lang.code === locale)

  const handleLanguageChange = (languageCode: string) => {
    router.replace(pathname, { locale: languageCode })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center space-x-2 text-white hover:text-brand-light-blue-200 transition-colors bg-transparent border-none outline-none p-2 rounded-lg hover:bg-white/10 touch-manipulation">
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">{currentLang?.name}</span>
        <ChevronDown className="w-3 h-3" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-40 bg-white shadow-lg border border-gray-200 rounded-lg z-[60]"
        sideOffset={5}
      >
        {LANGUAGES.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={`flex items-center space-x-3 cursor-pointer px-3 py-2 text-sm transition-colors hover:bg-brand-blue-50 rounded-md mx-1 touch-manipulation ${
              locale === language.code
                ? 'bg-brand-blue-50 text-brand-blue-700 font-medium'
                : 'text-gray-700'
            }`}
          >
            <span className="text-lg">{language.flag}</span>
            <span>{language.name}</span>
            {locale === language.code && (
              <span className="ml-auto w-2 h-2 bg-brand-blue-600 rounded-full"></span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LanguageSwitcher
