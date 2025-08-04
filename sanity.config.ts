import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

const structure = (S: any) =>
  S.list()
    .title('Portfolio Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .id('siteSettings')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),

      S.divider(),

      S.listItem()
        .title('Portfolio')
        .child(
          S.list()
            .title('Portfolio Content')
            .items([
              S.listItem()
                .title('Personal Projects')
                .schemaType('project')
                .child(S.documentTypeList('project')),
              S.listItem()
                .title('Agency Projects')
                .schemaType('agencyProject')
                .child(S.documentTypeList('agencyProject')),
            ]),
        ),

      S.divider(),

      S.listItem()
        .title('Professional Journey')
        .child(
          S.list()
            .title('Journey Content')
            .items([
              S.listItem()
                .title('Work Experience')
                .schemaType('experience')
                .child(S.documentTypeList('experience')),
              S.listItem()
                .title('Education')
                .schemaType('education')
                .child(S.documentTypeList('education')),
              S.listItem().title('Skills').schemaType('skill').child(S.documentTypeList('skill')),
            ]),
        ),

      S.divider(),

      S.listItem()
        .title('Learning Entries')
        .schemaType('learningEntry')
        .child(S.documentTypeList('learningEntry')),
    ])

export default defineConfig({
  name: 'default',
  title: 'My Portfolio',

  projectId: 'co4313sn',
  dataset: 'production',

  plugins: [
    structureTool({
      structure,
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
