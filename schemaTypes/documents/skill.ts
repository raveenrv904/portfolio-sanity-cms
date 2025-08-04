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
      name: 'proficiency',
      title: 'Proficiency Level',
      type: 'string',
      options: {
        list: [
          {title: 'Beginner', value: 'beginner'},
          {title: 'Intermediate', value: 'intermediate'},
          {title: 'Advanced', value: 'advanced'},
          {title: 'Expert', value: 'expert'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'yearsOfExperience',
      title: 'Years of Experience',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
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
      title: 'Proficiency Level',
      name: 'proficiencyDesc',
      by: [{field: 'proficiency', direction: 'desc'}],
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
      proficiency: 'proficiency',
      media: 'icon',
      featured: 'featured',
    },
    prepare({title, category, proficiency, media, featured}) {
      return {
        title,
        subtitle: `${category} • ${proficiency}${featured ? ' • Featured' : ''}`,
        media,
      }
    },
  },
})
