import React from 'react'

import { ThemeProvider } from '@mui/material/styles'
import { render, RenderOptions, RenderResult } from '@testing-library/react'
import { SnackbarProvider } from 'notistack'
import { MemoryRouter } from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6'

import '../i18n'

import generateTheme from '@/theme'

const AllProviders = ({ children }: { children: React.ReactNode }) => {
  const theme = generateTheme()

  return (
    <React.StrictMode>
      <MemoryRouter>
        <ThemeProvider theme={theme}>
          <SnackbarProvider maxSnack={5}>
            <QueryParamProvider adapter={ReactRouter6Adapter}>{children}</QueryParamProvider>
          </SnackbarProvider>
        </ThemeProvider>
      </MemoryRouter>
    </React.StrictMode>
  )
}

export const renderWithTheme = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
): RenderResult => render(ui, { wrapper: AllProviders, ...options })

export * from '@testing-library/react'
