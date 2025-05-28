'use client'

import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { formatDistance } from 'date-fns'

type Question = {
  id: string
  content: string
  answer: any // RichText content
  author: {
    name: string
  }
  publishedAt: string
}

type Props = {
  questions: Question[]
}

const QuestionsList: React.FC<Props> = ({ questions }) => {
  if (questions.length === 0) {
    return (
      <div className="bg-gray-100 p-8 rounded-lg text-center">
        <p className="text-gray-500">No answered questions yet.</p>
      </div>
    )
  }

  return (
    <Accordion type="single" collapsible className="space-y-4">
      {questions.map((question) => (
        <AccordionItem
          key={question.id}
          value={question.id}
          className="border border-gray-200 rounded-lg overflow-hidden"
        >
          <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
            <div className="text-left">
              <div className="font-medium text-lg">{question.content}</div>
              <div className="text-sm text-gray-500 mt-1">
                Asked by {question.author.name} •
                {formatDistance(new Date(question.publishedAt), new Date(), { addSuffix: true })}
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 py-4 bg-white border-t border-gray-200">
            <div className="prose max-w-none">
              {/* Render the richText answer - you may need a specific renderer for your richText format */}
              <div dangerouslySetInnerHTML={{ __html: question.answer }} />
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default QuestionsList
