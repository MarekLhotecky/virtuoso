import React from 'react'

import { parse, stringify } from 'qs'
import { useLocation } from 'react-router-dom'
import {
  EncodedQuery,
  objectToSearchString,
  QueryParamProvider,
  searchStringToObject,
  transformSearchStringJsonSafe,
} from 'use-query-params'
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6'

import { getHash } from './utils/getHash'
import useStorageState from './utils/useStorageState'

export const stringifyUrl = (query: EncodedQuery) => {
  // for arrays in query params objects for stringify function
  // use-query-params doesn't support this out of the box without setting a param type,
  // this will override default StringParam by parsing it and then stringify it again

  const customQueryObj = parse(transformSearchStringJsonSafe(objectToSearchString(query)), {
    comma: true,
  })

  return stringify(customQueryObj, {
    arrayFormat: 'comma',
    // replaces spaces with '+', etc.
    format: 'RFC1738',
    // encode spec symbols like ':', '/', '&', '@' etc. with URL-encoded version
    encodeValuesOnly: true,
    skipNulls: true,
  })
}

const QueryParamHashProvider = ({ children }: { children: React.ReactElement }) => {
  const { pathname, search } = useLocation()
  const hashParam = new URLSearchParams(search).get('hash') ?? ''
  const [storedParams, setStoredParams] = useStorageState<{ [key: string]: string }>(
    'hashed-params',
    {}
  )

  const getNewFilters = (hash: string, searchString: string) => {
    // remember only 10 last values
    const newFilters = Object.entries(storedParams)
    if (newFilters.length > 9) {
      newFilters.pop()
    }
    newFilters.unshift([hash, searchString])
    return Object.fromEntries(newFilters)
  }

  const getHashParams = (searchParams: string) => {
    const params = hashParam?.length ? storedParams[hashParam] : searchParams

    return searchStringToObject(params)
  }

  const setHashParams = (query: EncodedQuery) => {
    const searchString = stringifyUrl(query)

    // check if params should be hashed
    const { hash } = getHash(pathname, searchString)

    if (hash.length) {
      if (hash !== hashParam && storedParams[hash] === undefined) {
        const newFilters = getNewFilters(hash, searchString)
        setStoredParams(newFilters)
      }
      return stringifyUrl({ hash })
    } else {
      return stringifyUrl({ ...query, hash: null })
    }
  }

  return (
    <QueryParamProvider
      adapter={ReactRouter6Adapter}
      options={{
        searchStringToObject: (searchString) => getHashParams(searchString),
        objectToSearchString: (queryObj) => setHashParams(queryObj),
        includeKnownParams: false,
        includeAllParams: true,
      }}
    >
      {children}
    </QueryParamProvider>
  )
}

export default QueryParamHashProvider
