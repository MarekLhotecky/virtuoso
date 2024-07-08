import { md5 } from 'js-md5'

export const getHash = (route: string, params: string) => {
  const link = `${route}?${params}`

  // max 8000 characters - 50 max url origin length
  if (link.length > 7950) {
    const hash = md5(params)

    return {
      link: `${route}?hash=${hash}`,
      hash,
    }
  } else {
    return {
      link,
      hash: '',
    }
  }
}
