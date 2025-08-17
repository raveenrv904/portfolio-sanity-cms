import {defineType, defineField} from 'sanity'
import {CogIcon} from '@sanity/icons'

export default defineType({
  name: 'skill',
  title: 'Skills',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Skill Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Frontend', value: 'frontend'},
          {title: 'Backend', value: 'backend'},
          {title: 'Database', value: 'database'},
          {title: 'DevOps', value: 'devops'},
          {title: 'Design', value: 'design'},
          {title: 'Other', value: 'other'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'icon',
      title: 'Skill Icon',
      type: 'image',
      options: {
        hotspot: false,
      },
    }),
    defineField({
      name: 'relatedProjects',
      title: 'Related Projects',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'project'}, {type: 'agencyProject'}],
        },
      ],
    }),
    defineField({
      name: 'relatedExperience',
      title: 'Related Work Experience',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'experience'}],
        },
      ],
    }),
    defineField({
      name: 'featured',
      title: 'Featured Skill',
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
      title: 'Category',
      name: 'categoryAsc',
      by: [
        {field: 'category', direction: 'asc'},
        {field: 'name', direction: 'asc'},
      ],
    },
    {
      title: 'Featured First',
      name: 'featuredFirst',
      by: [
        {field: 'featured', direction: 'desc'},
        {field: 'category', direction: 'asc'},
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      category: 'category',
      media: 'icon',
      featured: 'featured',
    },
    prepare({title, category, media, featured}) {
      return {
        title,
        subtitle: `${category}${featured ? ' • Featured' : ''}`,
        media,
      }
    },
  },
})
