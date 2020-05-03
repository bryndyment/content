export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'visible',
      title: 'Visible',
      type: 'boolean'
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'titleInBody',
      title: 'Title In Body',
      type: 'boolean'
    },
    {
      name: 'slug',
      options: {
        maxLength: 96,
        source: 'title'
      },
      title: 'Slug',
      type: 'slug'
    },
    {
      name: 'sequence',
      title: 'Sequence',
      type: 'number'
    },
    {
      name: 'thumbnailImage',
      title: 'Thumbnail Image',
      type: 'image'
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'blockContent'
    },
    {
      name: 'extra',
      title: 'Extra',
      type: 'blockContent'
    },
    {
      name: 'centerBody',
      title: 'Center Body',
      type: 'boolean'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    },
    {
      name: 'html',
      title: 'HTML',
      type: 'text'
    },
    {
      name: 'bodyTwo',
      title: 'Body Two',
      type: 'blockContent'
    },
    {
      name: 'htmlTwo',
      title: 'HTML Two',
      type: 'text'
    },
    {
      name: 'bodyThree',
      title: 'Body Three',
      type: 'blockContent'
    },
    {
      name: 'css',
      title: 'CSS',
      type: 'text'
    }
  ],
  initialValue: {
    centerBody: false,
    titleInBody: false,
    visible: true
  }
}
