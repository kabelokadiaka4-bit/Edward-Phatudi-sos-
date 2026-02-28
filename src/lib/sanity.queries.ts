export const PAGES_QUERY = `
  *[_type == "page"] {
    _id,
    slug,
    title,
    description,
    content,
  }
`

export const PAGE_BY_SLUG_QUERY = `
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    slug,
    title,
    description,
    content,
    image,
  }
`

export const NEWS_ARTICLES_QUERY = `
  *[_type == "news"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    content,
    image,
    author,
    publishedAt,
  }
`

export const NEWS_BY_SLUG_QUERY = `
  *[_type == "news" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    content,
    image,
    author,
    publishedAt,
  }
`

export const PROGRAMS_QUERY = `
  *[_type == "program"] {
    _id,
    name,
    slug,
    description,
    image,
    requirements,
    duration,
  }
`

export const FACILITIES_QUERY = `
  *[_type == "facility"] {
    _id,
    name,
    description,
    image,
    capacity,
  }
`

export const STAFF_QUERY = `
  *[_type == "staff"] {
    _id,
    name,
    position,
    email,
    image,
    bio,
  }
`

export const SETTINGS_QUERY = `
  *[_type == "settings"][0] {
    siteName,
    description,
    logo,
    contact {
      email,
      phone,
      address,
    },
    socialLinks,
  }
`
