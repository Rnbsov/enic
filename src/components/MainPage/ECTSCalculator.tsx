'use client'
import React, { useState } from 'react'
import { Calculator, Info } from 'lucide-react'
import { useTranslations } from 'next-intl'

const ECTSCalculator = () => {
  const t = useTranslations('calculator')
  const [localCredits, setLocalCredits] = useState('')
  const [academicHours, setAcademicHours] = useState('')
  const [result, setResult] = useState<number | null>(null)

  const calculateECTS = () => {
    const hours = parseFloat(academicHours)
    const credits = parseFloat(localCredits)

    if (hours && !isNaN(hours)) {
      // Standard ECTS calculation: 1 ECTS = 25-30 academic hours
      const ectsFromHours = hours / 30
      setResult(Math.round(ectsFromHours * 10) / 10)
    } else if (credits && !isNaN(credits)) {
      // Approximate conversion for Kazakhstan credits
      const ectsFromCredits = credits * 2
      setResult(Math.round(ectsFromCredits * 10) / 10)
    }
  }

  const resetCalculator = () => {
    setLocalCredits('')
    setAcademicHours('')
    setResult(null)
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="bg-brand-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calculator className="w-8 h-8 text-brand-blue-600" />
            </div>{' '}
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('title')}</h2>
            <p className="text-lg text-gray-600">{t('description')}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Form */}{' '}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">{t('formTitle')}</h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('academicHours')}
                  </label>
                  <input
                    type="number"
                    value={academicHours}
                    onChange={(e) => setAcademicHours(e.target.value)}
                    placeholder={t('academicHoursPlaceholder')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="text-center text-gray-500 font-medium">{t('or')}</div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('localCredits')}
                  </label>
                  <input
                    type="number"
                    value={localCredits}
                    onChange={(e) => setLocalCredits(e.target.value)}
                    placeholder={t('localCreditsPlaceholder')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="flex space-x-3 pt-4">
                  <button
                    onClick={calculateECTS}
                    className="flex-1 bg-brand-blue-600 text-white py-3 rounded-lg hover:bg-brand-blue-700 transition-colors duration-300 font-medium"
                  >
                    {t('calculateButton')}
                  </button>
                  <button
                    onClick={resetCalculator}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                  >
                    {t('resetButton')}
                  </button>
                </div>

                {result !== null && (
                  <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-800">{result} ECTS</div>
                      <div className="text-sm text-green-600 mt-1">{t('approximateValue')}</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* Information Panel */}{' '}
            <div className="space-y-6">
              <div className="bg-brand-light-blue-50 p-6 rounded-xl border border-brand-light-blue-200">
                <div className="flex items-start space-x-3">
                  <Info className="w-5 h-5 text-brand-light-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-brand-light-blue-800 mb-2">
                      {t('whatIsECTS')}
                    </h4>
                    <p className="text-sm text-brand-light-blue-700">{t('ectsDescription')}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h4 className="font-medium text-gray-800 mb-4">{t('calculationPrinciples')}</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• {t('principle1')}</li>
                  <li>• {t('principle2')}</li>
                  <li>• {t('principle3')}</li>
                  <li>• {t('principle4')}</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                <h4 className="font-medium text-orange-800 mb-2">{t('importantToKnow')}</h4>
                <p className="text-sm text-orange-700">{t('disclaimer')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ECTSCalculator
