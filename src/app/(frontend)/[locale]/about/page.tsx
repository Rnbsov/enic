import { useTranslations } from 'next-intl'

export default function AboutPage() {
  const t = useTranslations('about')

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">{t('pageTitle')}</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              {t('description')}
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">{t('missionTitle')}</h2>
            <p className="text-gray-600 mb-6">
              {t('missionText')}
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              {t('activitiesTitle')}
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>{t('activities.recognition')}</li>
              <li>{t('activities.accreditation')}</li>
              <li>{t('activities.bologna')}</li>
              <li>{t('activities.quality')}</li>
              <li>{t('activities.research')}</li>
              <li>{t('activities.cooperation')}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
