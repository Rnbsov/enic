import React from 'react'
import {
  ArrowRight,
  BookOpen,
  Users,
  Award,
  Globe,
  Shield,
  CheckCircle,
  FileText,
  Clock,
} from 'lucide-react'
import { useTranslations } from 'next-intl'

const HeroSection = () => {
  const t = useTranslations()

  return (
    <section className="relative bg-gradient-to-br from-brand-blue-700 via-brand-blue-800 to-brand-blue-900 py-20 lg:py-28 overflow-hidden">
      {/* Professional Grid Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-grid-pattern"></div>
      </div>

      {/* Geometric Patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-48 -translate-y-48 blur-3xl"></div>
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-brand-gold-400/10 rounded-full translate-x-40 blur-2xl"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-brand-light-blue-400/10 rounded-full -translate-y-32 blur-xl"></div>

        {/* Decorative lines */}
        <div className="absolute top-20 left-20 w-32 h-px bg-white/20 rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-24 h-px bg-brand-gold-300/30 -rotate-45"></div>
        <div className="absolute top-1/2 left-10 w-16 h-px bg-white/15 rotate-90"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Official Badge */}
            <div className="inline-flex items-center mb-8 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <Shield className="w-5 h-5 text-brand-gold-300 mr-3" />
              <span className="text-white font-medium text-sm">
                Министерство образования и науки РК
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-8 leading-tight">
              <span className="block">ENIC</span>
              <span className="text-brand-gold-300 block">Kazakhstan</span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-xl lg:text-2xl text-brand-light-blue-100 mb-6 font-medium">
              Национальный центр развития высшего образования
            </h2>

            {/* Description */}
            <p className="text-lg text-brand-light-blue-100 mb-12 leading-relaxed max-w-xl">
              Официальное признание иностранных документов об образовании и академической
              мобильности в соответствии с международными стандартами качества.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="group bg-brand-gold-500 hover:bg-brand-gold-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <FileText className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                Подать заявление
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group border-2 border-white/80 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm hover:shadow-lg transform hover:-translate-y-1">
                <Globe className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                Услуги центра
              </button>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span className="text-brand-light-blue-100 text-sm">
                  Быстрое признание дипломов
                </span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-brand-gold-300 mr-3 flex-shrink-0" />
                <span className="text-brand-light-blue-100 text-sm">Обработка за 30 дней</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-5 h-5 text-brand-light-blue-300 mr-3 flex-shrink-0" />
                <span className="text-brand-light-blue-100 text-sm">Международные стандарты</span>
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 text-brand-gold-300 mr-3 flex-shrink-0" />
                <span className="text-brand-light-blue-100 text-sm">Болонский процесс</span>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Info Cards */}
          <div className="relative">
            <div className="space-y-6">
              {/* Main Statistics Card */}
              <div className="bg-white/15 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-brand-gold-500 rounded-lg flex items-center justify-center mr-4">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl">ENIC Kazakhstan</h3>
                    <p className="text-brand-light-blue-200 text-sm">Центр качества образования</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">Успешность признания</span>
                      <span className="text-green-400 font-bold text-lg">98%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
                      <div className="bg-gradient-to-r from-green-400 to-green-500 h-3 rounded-full w-[98%] shadow-sm"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">Скорость обработки</span>
                      <span className="text-brand-light-blue-300 font-bold text-lg">30 дней</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
                      <div className="bg-gradient-to-r from-brand-light-blue-400 to-brand-blue-500 h-3 rounded-full w-[85%] shadow-sm"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Statistics Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 group hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-white">15K+</div>
                      <div className="text-brand-light-blue-200 text-sm">Признанных дипломов</div>
                    </div>
                    <BookOpen className="w-8 h-8 text-brand-gold-300 group-hover:scale-110 transition-transform" />
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 group hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-white">120+</div>
                      <div className="text-brand-light-blue-200 text-sm">Стран партнеров</div>
                    </div>
                    <Users className="w-8 h-8 text-brand-gold-300 group-hover:scale-110 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-center space-x-8">
                  <div className="text-center">
                    <Award className="w-8 h-8 text-brand-gold-300 mx-auto mb-2" />
                    <span className="text-white text-xs font-medium">UNESCO</span>
                  </div>
                  <div className="text-center">
                    <Shield className="w-8 h-8 text-brand-light-blue-300 mx-auto mb-2" />
                    <span className="text-white text-xs font-medium">ENIC-NARIC</span>
                  </div>
                  <div className="text-center">
                    <Globe className="w-8 h-8 text-brand-gold-300 mx-auto mb-2" />
                    <span className="text-white text-xs font-medium">Bologna</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
