'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useTranslations } from 'next-intl'
import { User, Mail, MessageSquare, Send, AlertCircle, CheckCircle } from 'lucide-react'

const QuestionForm: React.FC = () => {
  const t = useTranslations('faq')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [content, setContent] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    setSuccess(false)

    try {
      const res = await fetch('/api/questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content,
          author: { name, email },
        }),
      })

      if (!res.ok) {
        const error = await res.json()
        throw new Error(error.errors?.[0]?.message || 'Failed to submit question')
      }

      setSuccess(true)
      setContent('')
      setName('')
      setEmail('')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit question. Please try again.')
      console.error('Question submission error:', err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-gray-700 font-medium flex items-center">
            <User className="w-4 h-4 mr-2 text-brand-blue-500" />
            {t('yourName')}
          </Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="rounded-lg bg-white border-gray-300 focus:border-brand-blue-500 focus:ring-brand-blue-500/20"
            placeholder={t('yourName')}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-gray-700 font-medium flex items-center">
            <Mail className="w-4 h-4 mr-2 text-brand-blue-500" />
            {t('yourEmail')}
          </Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="rounded-lg bg-white border-gray-300 focus:border-brand-blue-500 focus:ring-brand-blue-500/20"
            placeholder={t('yourEmail')}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="question" className="text-gray-700 font-medium flex items-center">
          <MessageSquare className="w-4 h-4 mr-2 text-brand-blue-500" />
          {t('yourQuestion')}
        </Label>
        <Textarea
          id="question"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows={4}
          placeholder={t('questionPlaceholder')}
          className="rounded-lg bg-white border-gray-300 focus:border-brand-blue-500 focus:ring-brand-blue-500/20"
        />
      </div>

      {error && (
        <div className="flex items-center space-x-2 p-3 bg-red-50 text-red-700 rounded-lg bg-white border border-red-200">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
          <p className="text-sm">{error}</p>
        </div>
      )}

      {success && (
        <div className="flex items-center space-x-2 p-3 bg-green-50 text-green-700 rounded-lg bg-white border border-green-200">
          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
          <p className="text-sm">{t('questionSubmitted')}</p>
        </div>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-brand-blue-600 hover:bg-brand-blue-700 text-white font-medium py-3 px-6 rounded-lg bg-white transition-colors duration-200 flex items-center justify-center space-x-2"
      >
        <Send className={`w-4 h-4 ${isSubmitting ? 'animate-pulse' : ''}`} />
        <span>{isSubmitting ? t('submitting') : t('submitQuestion')}</span>
      </Button>
    </form>
  )
}

export default QuestionForm
