import React from 'react'

import * as Icon from '@mui/icons-material'
import { To } from 'react-router-dom'

import routes from '@/routes/routeNames'

export type NavigationLink = {
  id: string
  name: string
  path: To
  icon?: React.ReactNode
  children?: null | NavigationLink[]
}

export const useNavigationLinks = () => {
  const homepageRoute: NavigationLink = {
    id: 'Virtuoso',
    name: 'Virtuoso',
    path: routes.index,
    icon: <Icon.WorkspacePremium color='primary' />,
  }

  const links: NavigationLink[] = [homepageRoute]
  return { links }
}
