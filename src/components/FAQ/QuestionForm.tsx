'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useTranslations } from 'next-intl'

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
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">{t('yourName')}</Label>
          <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">{t('yourEmail')}</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="question">{t('yourQuestion')}</Label>
        <Textarea
          id="question"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows={4}
          placeholder={t('questionPlaceholder')}
        />
      </div>

      {error && <div className="text-red-500">{error}</div>}
      {success && <div className="text-green-500">{t('questionSubmitted')}</div>}

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? t('submitting') : t('submitQuestion')}
      </Button>
    </form>
  )
}

export default QuestionForm
