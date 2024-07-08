import { createTheme } from '@mui/material/styles'

import breakpoints from './breakpoints'
import components from './components'
import palette from './palette'
import shadows from './shadows'
import typography from './typography'

export { SIDEBAR_WIDTH } from './components'

export default function generateTheme() {
  return createTheme({
    spacing: 4,
    breakpoints: breakpoints,
    components: components,
    typography: typography,
    shadows: shadows,
    palette: palette,
  })
}
