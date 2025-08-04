import {defineType, defineField} from 'sanity'
import {DocumentTextIcon} from '@sanity/icons'

export default defineType({
  name: 'learningEntry',
  title: 'Learning Entries',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Learning Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Learning Content',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Learning Category',
      type: 'string',
      options: {
        list: [
          {title: 'Tutorial', value: 'tutorial'},
          {title: 'Article', value: 'article'},
          {title: 'Course', value: 'course'},
          {title: 'Book', value: 'book'},
          {title: 'Video', value: 'video'},
          {title: 'Podcast', value: 'podcast'},
          {title: 'Other', value: 'other'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'source',
      title: 'Source/Author',
      type: 'string',
    }),
    defineField({
      name: 'sourceUrl',
      title: 'Source URL',
      type: 'url',
    }),
    defineField({
      name: 'completedAt',
      title: 'Completed Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Rating (1-5)',
      type: 'number',
      validation: (Rule) => Rule.min(1).max(5),
    }),
    defineField({
      name: 'notes',
      title: 'Personal Notes',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'featured',
      title: 'Featured Learning',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      hidden: true,
    }),
  ],
  orderings: [
    {
      title: 'Completed Date, New',
      name: 'completedAtDesc',
      by: [{field: 'completedAt', direction: 'desc'}],
    },
    {
      title: 'Category',
      name: 'categoryAsc',
      by: [
        {field: 'category', direction: 'asc'},
        {field: 'completedAt', direction: 'desc'},
      ],
    },
    {
      title: 'Featured First',
      name: 'featuredFirst',
      by: [
        {field: 'featured', direction: 'desc'},
        {field: 'completedAt', direction: 'desc'},
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      completedAt: 'completedAt',
      featured: 'featured',
    },
    prepare({title, category, completedAt, featured}) {
      const completedDate = completedAt ? new Date(completedAt).toLocaleDateString() : 'No date'
      return {
        title,
        subtitle: `${category} • ${completedDate}${featured ? ' • Featured' : ''}`,
      }
    },
  },
})
