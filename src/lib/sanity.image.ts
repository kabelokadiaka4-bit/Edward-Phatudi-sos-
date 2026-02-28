import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from 'sanity'
import { client } from './sanity.client'

const builder = imageUrlBuilder(client)

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source)
}

export const getSanityImageUrl = (source: SanityImageSource, width?: number, height?: number) => {
  let url = builder.image(source)

  if (width) {
    url = url.width(width)
  }

  if (height) {
    url = url.height(height)
  }

  return url.url()
}
