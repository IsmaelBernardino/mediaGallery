import sanityClient from '@sanity/client'
import imageUrlBulder from '@sanity/image-url'

export const Client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2021-11-16',
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
})

const builder = imageUrlBulder(Client)

export const urlFor = (source) => builder.image(source)