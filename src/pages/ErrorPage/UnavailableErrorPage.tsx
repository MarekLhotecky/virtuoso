import React from 'react'

import { Typography, Button } from '@mui/material'

import * as Icon from '@mui/icons-material'

import * as S from './styled'

const UnavailableErrorPage = () => (
  <S.Root>
    <S.Wrapper>
      <Icon.Error width={60} height={60} />
      <Typography variant='h1' marginTop={4} marginBottom={4}>
        503 Service Unavailable
      </Typography>
      <Typography component='h2' variant='h5' marginBottom={6}>
        The server is currently unavailable due to maintenance. We will be back up and running
        shortly. Please try again in a few minutes.
      </Typography>

      <Button onClick={() => window.location.reload()} variant='contained' color='secondary'>
        Reload
      </Button>
    </S.Wrapper>
  </S.Root>
)

export default UnavailableErrorPage
