import React, { useState } from 'react'

import MenuIcon from '@mui/icons-material/Menu'
import { IconButton, Toolbar } from '@mui/material'
import { NavLink } from 'react-router-dom'

import { MenuItemFirstLevel, MenuItemSecondLevel } from '@/components/AppBarNavigation'
import Logo from '@/constants/logo'
import { useNavigationLinks, NavigationLink } from '@/utils/useNavigationLinks'

import * as S from './styled'

const AppBar = () => {
  const { links } = useNavigationLinks()
  const [anchorElMobileNav, setAnchorElMobileNav] = useState<HTMLElement | null>(null)

  const handleOpenMobileNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElMobileNav(event.currentTarget)
  }

  const handleCloseMobileNavMenu = () => {
    setAnchorElMobileNav(null)
  }

  const firstSixLinks = links.slice(0, 6)
  const otherLinks = links.slice(6)

  return (
    <S.AppBar color='secondary' position='relative'>
      <Toolbar disableGutters>
        <S.LogoContainer>
          <NavLink to='/'>
            <Logo />
          </NavLink>
        </S.LogoContainer>

        {/* mobile menu */}
        <S.MobileMenuContainer>
          <IconButton
            size='large'
            aria-label='account of current user'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            onClick={handleOpenMobileNavMenu}
            color='inherit'
          >
            <MenuIcon />
          </IconButton>

          <S.MobileMenu
            id='menu-appbar'
            anchorEl={anchorElMobileNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            keepMounted
            open={Boolean(anchorElMobileNav)}
            onClose={handleCloseMobileNavMenu}
          >
            {links?.map((route) => (
              <MenuItemSecondLevel link={route} key={route.id} onClose={handleCloseMobileNavMenu}>
                {route.children?.map((innerLink) => (
                  <MenuItemSecondLevel link={innerLink} key={innerLink.id} />
                ))}
              </MenuItemSecondLevel>
            ))}
          </S.MobileMenu>
        </S.MobileMenuContainer>

        {/* desktop menu */}
        <S.DesktopMenuContainer>
          {firstSixLinks.map((category: NavigationLink) => (
            <MenuItemFirstLevel link={category} key={category.id}>
              {category.children?.map((route) => (
                <MenuItemSecondLevel link={route} key={route.id} />
              ))}
            </MenuItemFirstLevel>
          ))}

          {otherLinks.length ? (
            <MenuItemFirstLevel
              link={{ id: 'more', name: 'More...', path: '', children: otherLinks }}
            >
              {otherLinks?.map((route) => (
                <MenuItemSecondLevel link={route} key={route.id}>
                  {route.children?.map((innerLink) => (
                    <MenuItemSecondLevel link={innerLink} key={innerLink.id} />
                  ))}
                </MenuItemSecondLevel>
              ))}
            </MenuItemFirstLevel>
          ) : null}
        </S.DesktopMenuContainer>
      </Toolbar>
    </S.AppBar>
  )
}
export default AppBar
