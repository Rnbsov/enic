import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Metadata } from 'next'
import QuestionForm from '@/components/FAQ/QuestionForm'
import QuestionsList from '@/components/FAQ/QuestionsList'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Find answers to common questions or ask your own',
}

export default async function FAQPage() {
  const payload = await getPayload({ config: configPromise })

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

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>

      <p className="text-lg text-gray-700 mb-12">
        Find answers to common questions below or submit your own question using the form.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-6">Browse Questions</h2>
          <QuestionsList questions={questions} />
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-6">Ask a Question</h2>
          <QuestionForm />
        </div>
      </div>
    </div>
  )
}
