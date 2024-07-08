import React from 'react'

import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import routeConfig from '@/routes/routeConfig'
import generateTheme from '@/theme'

const root = createRoot(document.getElementById('root') ?? document.body)

if (process.env.ENVNAME === 'PROD_ENV' && process.env.RELEASE_NAME) {
  /* eslint-disable-next-line no-console */
  console.log(`%cRelease ${process.env.RELEASE_NAME}`, 'font-weight:bold;font-size:18px')
}

root.render(
  <React.StrictMode>
    <ThemeProvider theme={generateTheme()}>
      <CssBaseline />
      <RouterProvider router={createBrowserRouter(createRoutesFromElements(routeConfig))} />
    </ThemeProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
