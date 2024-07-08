import { TypographyOptions } from '@mui/material/styles/createTypography'

const typography: TypographyOptions = {
  fontFamily: ['Oxygen', '-apple-system', 'Arial', 'sans-serif'].join(','),
  fontSize: 13,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontSize: '1.5rem',
    fontWeight: 700,
    lineHeight: 1.25,
  },
  h2: {
    fontSize: '1.75rem',
    fontWeight: 600,
    lineHeight: 1.25,
  },
  h3: {
    fontSize: '24px',
    fontWeight: 500,
    lineHeight: '28.8px',
  },
  h4: {
    fontSize: '1.125rem',
    fontWeight: 500,
    lineHeight: 1.25,
  },
  h5: {
    fontSize: '1.0625rem',
    fontWeight: 500,
    lineHeight: 1.25,
  },
  h6: {
    fontSize: '1rem',
    fontWeight: 500,
    lineHeight: 1.25,
  },
  body1: {
    fontSize: 13,
  },
}

export default typography
