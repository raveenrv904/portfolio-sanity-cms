import {defineType, defineField} from 'sanity'
import {BookIcon} from '@sanity/icons'

export default defineType({
  name: 'education',
  title: 'Education',
  type: 'document',
  icon: BookIcon,
  fields: [
    defineField({
      name: 'institution',
      title: 'Institution Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'degree',
      title: 'Degree',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'field',
      title: 'Field of Study',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'Graduation Date',
      type: 'date',
      hidden: ({document}) => document?.current === true,
    }),
    defineField({
      name: 'current',
      title: 'Currently Studying',
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
      name: 'gpa',
      title: 'GPA/Grade',
      type: 'string',
    }),
    defineField({
      name: 'achievements',
      title: 'Achievements/Honors',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'institutionLogo',
      title: 'Institution Logo',
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
  ],
  preview: {
    select: {
      title: 'degree',
      subtitle: 'institution',
      media: 'institutionLogo',
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
