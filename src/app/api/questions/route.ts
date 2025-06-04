import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function POST(req: NextRequest) {
  try {
    const { content, author, category, captchaToken } = await req.json()

    // Validate captcha
    if (!captchaToken) {
      return NextResponse.json(
        { errors: [{ message: 'Captcha verification is required' }] },
        { status: 400 },
      )
    }

    // Verify captcha with hCaptcha
    const captchaResponse = await fetch('https://hcaptcha.com/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: process.env.HCAPTCHA_SECRET || '',
        response: captchaToken,
      }),
    })

    const captchaResult = await captchaResponse.json()

    if (!captchaResult.success) {
      return NextResponse.json(
        { errors: [{ message: 'Captcha verification failed' }] },
        { status: 400 },
      )
    }

    // Validate input
    if (!content || content.length < 10) {
      return NextResponse.json(
        { errors: [{ message: 'Question must be at least 10 characters long' }] },
        { status: 400 },
      )
    }

    if (!author?.name || !author?.email) {
      return NextResponse.json(
        { errors: [{ message: 'Name and email are required' }] },
        { status: 400 },
      )
    }

    // Create the question
    const payload = await getPayload({ config: configPromise })
    const question = await payload.create({
      collection: 'questions',
      data: {
        content,
        author,
        category,
      },
    })

    return NextResponse.json({ success: true, questionId: question.id }, { status: 201 })
  } catch (error) {
    console.error('Error creating question:', error)
    return NextResponse.json(
      { errors: [{ message: 'Failed to submit question' }] },
      { status: 500 },
    )
  }
}
