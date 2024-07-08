import type { PaletteOptions } from '@mui/material'
import { grey, amber } from '@mui/material/colors'

export const current_env_color =
  {
    LOCAL_ENV: '#5C64FF',
    DEV_ENV: '#E9190F',
    FEATURE_ENV: '#76FF5D',
    FEATURE1_ENV: '#419D78',
    FEATURE2_ENV: '#98DFEA',
    FEATURE3_ENV: '#FB62F6',
    FEATURE4_ENV: '#BF00FF',
    FEATURE5_ENV: '#C80086',
    STAGING_ENV: '#FF6600',
  }[process.env.ENVNAME as string] ?? '#FBBB10'

const palette: PaletteOptions = {
  mode: 'light',
  primary: {
    /* ~ yellow[700]*/
    main: '#FFFFFF',
  },
  secondary: {
    main: grey[800],
  },
  action: {
    hover: grey[50],
    selected: grey[50],
  },
  background: { default: grey[100] },
}

export default palette
