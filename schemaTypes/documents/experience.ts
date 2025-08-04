import {defineType, defineField} from 'sanity'
import {UsersIcon} from '@sanity/icons'

export default defineType({
  name: 'experience',
  title: 'Work Experience',
  type: 'document',
  icon: UsersIcon,
  fields: [
    defineField({
      name: 'company',
      title: 'Company Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'position',
      title: 'Position/Job Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Job Description',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      hidden: ({document}) => document?.current === true,
    }),
    defineField({
      name: 'current',
      title: 'Currently Working Here',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'employmentType',
      title: 'Employment Type',
      type: 'string',
      options: {
        list: [
          {title: 'Full-time', value: 'full-time'},
          {title: 'Part-time', value: 'part-time'},
          {title: 'Contract', value: 'contract'},
          {title: 'Freelance', value: 'freelance'},
          {title: 'Internship', value: 'internship'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'achievements',
      title: 'Key Achievements',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'companyLogo',
      title: 'Company Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
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
      title: 'Start Date, New',
      name: 'startDateDesc',
      by: [{field: 'startDate', direction: 'desc'}],
    },
    {
      title: 'Current First',
      name: 'currentFirst',
      by: [
        {field: 'current', direction: 'desc'},
        {field: 'startDate', direction: 'desc'},
      ],
    },
  ],
  preview: {
    select: {
      title: 'position',
      subtitle: 'company',
      media: 'companyLogo',
      current: 'current',
    },
    prepare({title, subtitle, media, current}) {
      return {
        title,
        subtitle: `${subtitle}${current ? ' • Current' : ''}`,
        media,
      }
    },
  },
})
