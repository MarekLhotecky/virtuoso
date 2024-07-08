import React, { useState, Children, cloneElement } from 'react'

import { ArrowRight } from '@mui/icons-material'
import { ListItemIcon, ListItemText, Menu } from '@mui/material'
import { NavLink, Link, useLocation } from 'react-router-dom'

import { NavigationLink } from '@/utils/useNavigationLinks'

import * as S from './styled'

type Props = {
  link: NavigationLink
  onClose?: () => void
  children?: React.ReactNode
}

const MenuItemSecondLevel = ({ link, onClose, children }: Props) => {
  const [anchorElNav, setAnchorElNav] = useState<HTMLElement | null>(null)
  const { search } = useLocation()

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
    onClose?.()
  }

  const isSearchImportant = typeof link.path?.search === 'string'
  const isSearchLinkActive = isSearchImportant && link.path.search === search

  if (!link.children) {
    return (
      <S.MenuItemSecondLevel
        component={isSearchImportant ? Link : NavLink}
        to={link.path}
        end={isSearchImportant ? undefined : true}
        className={isSearchLinkActive ? 'active' : ''}
        onClick={() => handleCloseNavMenu()}
      >
        {link.icon && <ListItemIcon>{link.icon}</ListItemIcon>}
        <ListItemText>{link.name}</ListItemText>
      </S.MenuItemSecondLevel>
    )
  }

  return (
    <>
      <S.MenuItemSecondLevel onClick={handleOpenNavMenu}>
        {link.icon && <ListItemIcon>{link.icon}</ListItemIcon>}
        <ListItemText>{link.name}</ListItemText>
        <ArrowRight />
      </S.MenuItemSecondLevel>

      <Menu
        id={`menu-appbar-${link.id}`}
        anchorEl={anchorElNav}
        MenuListProps={{ component: 'nav' }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        color='black'
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
      >
        {Children.map(children, (child) =>
          cloneElement(child as React.ReactElement, {
            onClose: () => handleCloseNavMenu(),
          })
        )}
      </Menu>
    </>
  )
}
export default MenuItemSecondLevel
