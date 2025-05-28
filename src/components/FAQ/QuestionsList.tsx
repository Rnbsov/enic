'use client'

import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { formatDistance } from 'date-fns'
import { MessageSquare, User, Calendar, ChevronDown } from 'lucide-react'

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
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
        <MessageSquare className="w-12 h-12 text-gray-300 mx-auto mb-4" />
        <h4 className="font-medium text-gray-700 mb-2">No Questions Yet</h4>
        <p className="text-gray-500 text-sm">
          Be the first to ask a question using the form.
        </p>
      </div>
    )
  }

  return (
    <Accordion type="single" collapsible className="space-y-4">
      {questions.map((question) => (
        <AccordionItem
          key={question.id}
          value={question.id}
          className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md group"
        >
          <AccordionTrigger className="px-6 py-5 hover:bg-gray-50 text-left transition-all duration-200">
            <div className="flex-1 text-left pr-4">
              <div className="font-medium text-gray-800 group-hover:text-brand-blue-600 transition-colors duration-300 mb-2">
                {question.content}
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span className="flex items-center">
                  <User className="w-4 h-4 mr-1 text-gray-400" />
                  {question.author.name}
                </span>
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1 text-gray-400" />
                  {formatDistance(new Date(question.publishedAt), new Date(), { addSuffix: true })}
                </span>
              </div>
            </div>
            <ChevronDown className="h-5 w-5 shrink-0 text-brand-blue-500 transition-transform duration-300 ease-in-out" />
          </AccordionTrigger>
          <AccordionContent className="px-6 py-5 bg-white border-t border-gray-100">
            <div className="prose max-w-none">
              <div className="text-gray-700">
                <div dangerouslySetInnerHTML={{ __html: question.answer }} />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default QuestionsList