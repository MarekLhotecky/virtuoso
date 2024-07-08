import { BreakpointsOptions } from '@mui/system'

const breakpoints: BreakpointsOptions = {
  values: {
    xs: 300, // extra-small
    xsm: 570, // extra-small/small
    sm: 600, // small
    smd: 768, // small/medium
    mid: 992, // middle
    md: 1200, // medium
    mdx: 1350, // medium
    mdl: 1500, // medium/large
    lg: 1600, // large
    xl: 2200, // extra-large
  },
}

export default breakpoints

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xsm: true
    smd: true
    mid: true
    mdl: true
    mdx: true
  }
}
