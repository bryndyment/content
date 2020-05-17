import React from 'react'

/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
export default {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      // Styles let you set what your user can mark up blocks with. These
      // corrensponds with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' }
      ],
      lists: [{ title: 'Bullet', value: 'bullet' }],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' }
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            name: 'externalLink',
            title: 'External Link',
            type: 'object',
            blockEditor: {
              icon: () => <>🌏</>
            },
            fields: [
              {
                name: 'url',
                title: 'URL',
                type: 'url'
              },
              {
                name: 'blank',
                title: 'Open in a new tab',
                type: 'boolean'
              }
            ]
          },
          {
            name: 'internalLink',
            title: 'Internal Link',
            type: 'object',
            blockEditor: {
              icon: () => <>🔗</>
            },
            fields: [
              {
                name: 'slug',
                title: 'Slug',
                type: 'string'
              },
              {
                name: 'offscreen',
                title: 'Reveal from offscreen',
                type: 'boolean'
              }
            ]
          },
          {
            name: 'mailto',
            title: 'Email',
            type: 'object',
            blockEditor: {
              icon: () => <>@</>
            },
            fields: [
              {
                name: 'email',
                title: 'Email',
                type: 'string'
              }
            ]
          }
        ]
      }
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    {
      type: 'image',
      options: { hotspot: true }
    }
  ]
}
