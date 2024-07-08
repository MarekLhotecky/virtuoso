import React from 'react'

import { Typography, Button } from '@mui/material'

import routes from '@/routes/routeNames'

import * as Icon from '@mui/icons-material'

import * as S from './styled'

const NotFoundErrorPage = () => (
  <S.Root>
    <S.Wrapper>
      <Icon.Error width={60} height={60} />
      <Typography variant='h1' marginTop={4} marginBottom={4}>
        404 Page not found.
      </Typography>
      <Typography component='h2' variant='h5' marginBottom={6}>
        The page you are looking for might have been removed.
      </Typography>

      <Button
        onClick={() => window.location.replace(`${window.location.origin}${routes.index}`)}
        variant='contained'
        color='secondary'
      >
        Go to homepage
      </Button>
    </S.Wrapper>
  </S.Root>
)

export default NotFoundErrorPage
