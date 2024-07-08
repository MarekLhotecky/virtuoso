import React, { useState, Children, cloneElement } from 'react'

import { ArrowDropDown } from '@mui/icons-material'
import { Menu } from '@mui/material'
import { NavLink } from 'react-router-dom'

import { NavigationLink } from '@/utils/useNavigationLinks'

import * as S from './styled'

type Props = {
  link: NavigationLink
  children?: React.ReactNode
}

const MenuItemFirstLevel = ({ link, children }: Props) => {
  const [anchorElNav, setAnchorElNav] = useState<HTMLElement | null>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  if (!link.children) {
    return (
      <S.MenuButtonFirstLevel
        key={link.id}
        component={NavLink}
        to={link.path}
        startIcon={link.icon}
        color='inherit'
      >
        {link.name}
      </S.MenuButtonFirstLevel>
    )
  }

  return (
    <>
      <S.MenuButtonFirstLevel
        startIcon={link.icon}
        endIcon={<ArrowDropDown />}
        color='inherit'
        onClick={handleOpenNavMenu}
      >
        {link.name}
      </S.MenuButtonFirstLevel>

      <Menu
        id={`menu-appbar-${link.id}`}
        anchorEl={anchorElNav}
        MenuListProps={{ component: 'nav' }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
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
export default MenuItemFirstLevel
