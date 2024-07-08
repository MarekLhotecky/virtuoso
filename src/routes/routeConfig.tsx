import React from 'react'

import { Navigate, Route } from 'react-router-dom'

import App from '@/components/App'

const routeConfig = (
  <Route element={<App />} path='/'>
    <Route element={<Navigate to='/login' />} path='*' />
  </Route>
)

export default routeConfig
