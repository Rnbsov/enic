import { useTranslations } from 'next-intl'

export default function BolognaPage() {
  const t = useTranslations('bologna')

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">{t('pageTitle')}</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600 mb-6">{t('description')}</p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">{t('goalsTitle')}</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>{t('goals.quality')}</li>
              <li>{t('goals.mobility')}</li>
              <li>{t('goals.recognition')}</li>
              <li>{t('goals.employment')}</li>
              <li>{t('goals.attractiveness')}</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              {t('participationTitle')}
            </h2>
            <p className="text-gray-600 mb-6">{t('participationText')}</p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">{t('toolsTitle')}</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>{t('tools.ects')}</li>
              <li>{t('tools.levels')}</li>
              <li>{t('tools.supplement')}</li>
              <li>{t('tools.quality')}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
