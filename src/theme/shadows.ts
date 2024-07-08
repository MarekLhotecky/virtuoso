import { createTheme } from '@mui/material/styles'
import { Shadows } from '@mui/material/styles/shadows'

const defaultTheme = createTheme()

const shadows = [
  'none',
  'rgb(0 0 0 / 10%) 0px 3px 15px 0px',
  '0 0 9px 3px rgb(0 0 0 / 5%), rgb(0 0 0 / 5%) 0px 0px 9px 3px',
  ...defaultTheme.shadows.slice(3),
] as Shadows

export default shadows
