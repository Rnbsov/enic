import React from 'react'
import { ArrowRight, CheckCircle, Globe, Award } from 'lucide-react'
import { useTranslations } from 'next-intl'

const HeroSection = () => {
  const t = useTranslations()

  return (
    <div className="bg-gradient-to-br from-brand-blue-600 via-brand-blue-700 to-brand-blue-900 py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-white rounded-full -translate-x-32 md:-translate-x-48 -translate-y-32 md:-translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-60 md:w-80 h-60 md:h-80 bg-brand-gold-300 rounded-full translate-x-30 md:translate-x-40 translate-y-30 md:translate-y-40"></div>
        <div className="absolute top-1/2 left-1/4 w-48 md:w-64 h-48 md:h-64 bg-brand-light-blue-300 rounded-full -translate-x-24 md:-translate-x-32 -translate-y-24 md:-translate-y-32"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-xl text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
              {t('hero.title1')}
              <span className="text-brand-gold-300 block">{t('hero.title2')}</span>
            </h1>

            <p className="text-lg lg:text-xl text-brand-light-blue-100 mb-8 leading-relaxed">
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
              <button className="bg-brand-gold-500 hover:bg-brand-gold-600 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 touch-manipulation">
                {t('hero.getStarted')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-brand-blue-700 px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 touch-manipulation">
                {t('hero.learnMore')}
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 lg:gap-6 justify-center lg:justify-start">
              <div className="flex items-center justify-center lg:justify-start">
                <CheckCircle className="w-5 h-5 text-brand-gold-300 mr-2 flex-shrink-0" />
                <span className="text-brand-light-blue-100 text-sm lg:text-base">
                  {t('hero.stat1')}
                </span>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <Globe className="w-5 h-5 text-brand-gold-300 mr-2 flex-shrink-0" />
                <span className="text-brand-light-blue-100 text-sm lg:text-base">
                  {t('hero.stat2')}
                </span>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative mt-8 lg:mt-0">
            <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 relative overflow-hidden border border-white/20">
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-16 lg:w-20 h-16 lg:h-20 bg-brand-gold-400/30 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-10 lg:w-12 h-10 lg:h-12 bg-white/30 rounded-full"></div>

              {/* Main content area */}
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 lg:p-8 shadow-xl relative z-10">
                <div className="flex items-center mb-4">
                  <Award className="w-6 lg:w-8 h-6 lg:h-8 text-brand-gold-500 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm lg:text-base">
                      ENIC Kazakhstan
                    </h3>
                    <p className="text-xs lg:text-sm text-gray-600">{t('hero.qualityCenter')}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm lg:text-base">
                      {t('hero.recognitionRate')}
                    </span>
                    <span className="font-semibold text-green-600">98%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full w-[98%]"></div>
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <span className="text-gray-600 text-sm lg:text-base">
                      {t('hero.processingTime')}
                    </span>
                    <span className="font-semibold text-brand-blue-600">30 {t('hero.days')}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-brand-blue-500 h-2 rounded-full w-[85%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
