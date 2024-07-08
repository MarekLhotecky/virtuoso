import React from 'react'

import { SnackbarProvider } from 'notistack'
import { Outlet } from 'react-router-dom'

import QueryParamHashProvider from '@/QueryParamHashProvider'

import AppBar from './AppBar'
import * as S from './styled'

const App = () => (
  <SnackbarProvider maxSnack={5}>
    <S.Page>
      <AppBar />
      <S.Content>
        <QueryParamHashProvider>
          <Outlet />
        </QueryParamHashProvider>
      </S.Content>
    </S.Page>
  </SnackbarProvider>
)

export default App
