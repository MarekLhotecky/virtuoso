import React from 'react'

import { Typography, Button } from '@mui/material'
import { useRouteError } from 'react-router-dom'

import routes from '@/routes/routeNames'

import ForbiddenErrorPage from './ForbiddenErrorPage'
import NotFoundErrorPage from './NotFoundErrorPage'
import * as Icon from '@mui/icons-material'
import * as S from './styled'
import UnavailableErrorPage from './UnavailableErrorPage'

const ErrorPage = () => {
  const error = useRouteError() as Error
  const status = error?.cause as number

  switch (status) {
    case 403:
      return <ForbiddenErrorPage />
    case 404:
      return <NotFoundErrorPage />
    case 503:
      return <UnavailableErrorPage />
    default:
      return (
        <S.Root>
          <S.Wrapper>
            <Icon.Error width={60} height={60} />
            <Typography variant='h1' marginTop={4} marginBottom={4}>
              {`${status} Error`}
            </Typography>
            <Typography component='h2' variant='h5' marginBottom={6}>
              Error occurred while loading page.
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
  }
}

export default ErrorPage
