import { Button, MenuItem } from '@mui/material'
import { styled } from '@mui/material/styles'

export const MenuButtonFirstLevel = styled(Button)`
  &.active {
    background: ${({ theme }) => theme.palette.action.active};
  }
` as typeof Button

export const MenuItemSecondLevel = styled(MenuItem)`
  &.active {
    background: ${({ theme }) => theme.palette.action.selected};
  }
` as typeof MenuItem
