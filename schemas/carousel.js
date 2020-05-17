export default {
  name: 'carousel',
  title: 'Carousel',
  type: 'object',
  fields: [
    {
      name: 'carouselList',
      title: 'Carousel List',
      type: 'array',
      of: [
        {
          name: 'carouselListItem',
          title: 'Carousel List Item',
          type: 'carouselListItem'
        }
      ]
    }
  ]
}
