
import { useTranslations } from 'next-intl'

export default function RegistryPage() {
  const t = useTranslations('registry')

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">{t('pageTitle')}</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              {t('description')}
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">{t('purposeTitle')}</h2>
            <p className="text-gray-600 mb-6">
              {t('purposeText')}
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">{t('informationTitle')}</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>{t('information.programName')}</li>
              <li>{t('information.programCode')}</li>
              <li>{t('information.organizationName')}</li>
              <li>{t('information.accreditationPeriod')}</li>
              <li>{t('information.decisionDate')}</li>
              <li>{t('information.accreditationStatus')}</li>
            </ul>

            <div className="bg-brand-light-blue-50 border border-brand-light-blue-200 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold text-brand-blue-900 mb-2">{t('searchTitle')}</h3>
              <p className="text-brand-blue-700">
                {t('searchText')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
