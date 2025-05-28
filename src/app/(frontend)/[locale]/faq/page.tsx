import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Metadata } from 'next'
import { HelpCircle, MessageSquare } from 'lucide-react'
import QuestionForm from '@/components/FAQ/QuestionForm'
import QuestionsList from '@/components/FAQ/QuestionsList'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'faq' })

  return {
    title: t('pageTitle'),
    description: t('pageDescription'),
  }
}

export default async function FAQPage() {
  const payload = await getPayload({ config: configPromise })
  const t = await getTranslations('faq')

  // Get all answered questions
  const { docs: questions } = await payload.find({
    collection: 'questions',
    where: {
      answer: {
        exists: true,
      },
    },
    sort: '-publishedAt',
    depth: 1,
  })

  // Define FAQ process steps with translations
  const faqSteps = [
    { step: 1, title: t('steps.step1.title'), description: t('steps.step1.description') },
    { step: 2, title: t('steps.step2.title'), description: t('steps.step2.description') },
    { step: 3, title: t('steps.step3.title'), description: t('steps.step3.description') },
    { step: 4, title: t('steps.step4.title'), description: t('steps.step4.description') },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('pageTitle')}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t('mainDescription')}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Questions List */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-brand-blue-600 text-white p-2 rounded-lg">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{t('answeredQuestions')}</h3>
            </div>
            <QuestionsList questions={questions} />
          </div>

          {/* Question Form and Process */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-brand-blue-600 text-white p-2 rounded-lg">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{t('askQuestion')}</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
              <QuestionForm />
            </div>

            {/* Process Steps */}
            <h3 className="text-xl font-semibold text-gray-800 mb-6">{t('howItWorks')}</h3>
            <div className="space-y-6">
              {faqSteps.map((step) => (
                <div key={step.step} className="flex items-start space-x-4">
                  <div className="bg-brand-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">{step.title}</h4>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-brand-light-blue-50 rounded-xl border border-brand-light-blue-200">
              <h4 className="font-medium text-brand-blue-800 mb-2">{t('helpfulTips')}</h4>
              <ul className="text-sm text-brand-blue-700 space-y-1">
                <li>• {t('tipSpecific')}</li>
                <li>• {t('tipCheck')}</li>
                <li>• {t('tipDetails')}</li>
                <li>• {t('tipResponseTime')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
