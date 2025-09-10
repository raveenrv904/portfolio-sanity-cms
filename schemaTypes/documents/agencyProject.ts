import {defineType, defineField} from 'sanity'
import {CaseIcon} from '@sanity/icons'

export default defineType({
  name: 'agencyProject',
  title: 'Agency Projects',
  type: 'document',
  icon: CaseIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      description: 'Generic project title (no client names)',
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
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'longDescription',
      title: 'Detailed Case Study',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Focus on technical challenges and solutions',
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Project Screenshots',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'liveUrl',
      title: 'Live Demo URL',
      type: 'url',
    }),
    defineField({
      name: 'projectType',
      title: 'Project Type',
      type: 'string',
      options: {
        list: [
          {title: 'Web Application', value: 'web-app'},
          {title: 'Mobile Application', value: 'mobile-app'},
          {title: 'E-commerce', value: 'e-commerce'},
          {title: 'Landing Page', value: 'landing-page'},
          {title: 'Other', value: 'other'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'clientIndustry',
      title: 'Client Industry',
      type: 'string',
      description: 'e.g., Healthcare, Finance, E-commerce (no specific company names)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'projectDuration',
      title: 'Project Duration',
      type: 'string',
      description: 'e.g., 3 months, 6 weeks',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'teamSize',
      title: 'Team Size',
      type: 'number',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'myRole',
      title: 'My Role',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Project Completion Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
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
      title: 'Completion Date, New',
      name: 'publishedAtDesc',
      by: [{field: 'publishedAt', direction: 'desc'}],
    },
    {
      title: 'Featured First',
      name: 'featuredFirst',
      by: [
        {field: 'featured', direction: 'desc'},
        {field: 'publishedAt', direction: 'desc'},
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'featuredImage',
      projectType: 'projectType',
      featured: 'featured',
    },
    prepare({title, media, projectType, featured}) {
      return {
        title,
        media,
        subtitle: `${projectType}${featured ? ' • Featured' : ''}`,
      }
    },
  },
})
