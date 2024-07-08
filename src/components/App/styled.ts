import { AppBar as MuiAppBar, Box, Menu } from '@mui/material'
import { styled } from '@mui/material/styles'

import { SIDEBAR_WIDTH } from '@/theme'

export const Page = styled('div')`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  min-height: 100vh;
  margin: auto;
`

export const AppBar = styled(MuiAppBar)`
  z-index: ${({ theme }) => theme.zIndex.drawer + 1};
`

export const LogoContainer = styled(Box)`
  flex-grow: 0;
  flex-shrink: 0;
  text-align: center;
  padding: ${({ theme }) => theme.spacing(1)};
  margin-right: ${({ theme }) => theme.spacing(4)};
  ${({ theme }) => theme.breakpoints.down('sm')} {
    display: none;
  }
`

export const MobileMenuContainer = styled(Box)`
  flex-grow: 1;
  display: none;

  ${({ theme }) => theme.breakpoints.down('md')} {
    display: flex;
  }
`

export const MobileMenu = styled(Menu)`
  display: none;

  ${({ theme }) => theme.breakpoints.down('md')} {
    display: flex;
  }
`

export const DesktopMenuContainer = styled(Box)`
  flex-grow: 1;
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};

  ${({ theme }) => theme.breakpoints.down('md')} {
    display: none;
  }
`

export const UserInfoContainer = styled(Box)`
  flex-grow: 0;
  margin-right: ${({ theme }) => theme.spacing(4)};
`

export const Content = styled('div')`
  flex-grow: 1;
  display: flex;
`

export const Main = styled('main', {
  shouldForwardProp: (prop) => prop !== 'bulkActionsHeight',
})<{ bulkActionsHeight?: number }>`
  padding: ${({ bulkActionsHeight }) =>
    bulkActionsHeight ? `40px 40px ${bulkActionsHeight + 40}px 40px` : '40px'};
  transition: padding 0.2s ease-in-out;
  width: calc(100% - ${SIDEBAR_WIDTH}px);
  flex: 1;

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    flex: none;
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 100%;
  }
`
