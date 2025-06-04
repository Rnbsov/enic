import { CollectionConfig } from 'payload'
import { authenticated } from '../access/authenticated'
import { adminGroups } from '@/utilities/adminGroups'

export const Questions: CollectionConfig = {
  slug: 'questions',
  admin: {
    defaultColumns: ['content', 'author', 'category', 'answer', 'createdAt'],
    description: 'Questions submitted by visitors for the FAQ section',
    group: adminGroups.main
  },
  access: {
    read: ({ req }) => {
      // Anyone can read questions that have answers
      if (!req.user) {
        return {
          answer: {
            exists: true,
          },
        }
      }
      // Admins can see all questions
      return true
    },
    create: () => true, // Anyone can submit a question
    update: authenticated, // Only admins can update (add answers)
    delete: authenticated,
  },
  fields: [
    {
      name: 'content',
      type: 'textarea',
      required: true,
      label: 'Question',
      validate: (value: string | null | undefined) => {
        if (!value || value.length < 10) return 'Questions must be at least 10 characters long'
        if (!value || value.length > 1000) return 'Questions cannot be longer than 1000 characters'
        return true
      },
    },
    {
      name: 'author',
      type: 'group',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
          maxLength: 100,
        },
        {
          name: 'email',
          type: 'email',
          required: true,
        },
      ],
    },
    {
      name: 'answer',
      type: 'richText',
      label: 'Admin Answer',
      admin: {
        description: 'The question will be published once an answer is provided',
      },
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            // Auto set publishedAt when answer is first provided
            if (siblingData.answer && !value) {
              return new Date()
            }
            return value
          },
        ],
      },
    },
  ],
  timestamps: true,
}
