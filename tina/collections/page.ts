import type { Collection } from "tinacms";

export const PageCollection: Collection = {
  name: "page",
  label: "Pages",
  path: "src/content/pages",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: 'image',
      name: 'mainImage',
      label: 'Main Image'
    },
    {
      type: 'object',
      name: 'seo',
      label: 'SEO Settings',
      fields: [
        {
          type: 'string',
          name: 'title',
          label: 'Meta Title',
          description: 'This is the meta Title that will appear in search engines'
        },
        {
          type: 'string',
          name: 'description',
          label: 'Meta Description',
          description: 'This is the meta description that will appear in search engines'
        },
        {
          type: 'object',
          name: 'image',
          label: 'Image',
          fields: [
            {
              type: 'image',
              name: 'src',
              label: 'Src'
            },
            {
              type: 'string',
              name: 'alt',
              label: 'Image Alt'
            }
          ]
        }
      ]
    },
    {
      type: "rich-text",
      name: "body",
      isBody: true
    }
  ]
}
