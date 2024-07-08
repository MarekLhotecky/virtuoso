import { useCallback, useState } from 'react'

const useStorageState = <T>(
  keyName: string,
  defaultValue: T,
  storage: 'localStorage' | 'sessionStorage' = 'localStorage'
) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const value = window[storage].getItem(keyName)

      if (value) {
        return JSON.parse(value)
      } else {
        window[storage].setItem(keyName, JSON.stringify(defaultValue))
        return defaultValue
      }
    } catch (err) {
      return defaultValue
    }
  })

  const setValue = useCallback(
    (newValue: T | ((prevState: T) => T)) => {
      setStoredValue((prevState) => {
        const value = newValue instanceof Function ? newValue(prevState) : newValue

        window[storage].setItem(keyName, JSON.stringify(value))
        return value
      })
    },
    [keyName, storage]
  )
  return [storedValue, setValue] as const
}

export default useStorageState
