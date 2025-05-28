import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function POST(req: NextRequest) {
  try {
    const { content, author, category } = await req.json()

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
