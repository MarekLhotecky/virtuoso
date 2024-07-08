import { styled } from '@mui/material/styles'

export const Root = styled('div')`
  max-width: 520px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  display: flex;
  min-height: 100%;
`

export const Wrapper = styled('div')`
  padding: ${({ theme }) => theme.spacing(6)};
  text-align: center;

  ${({ theme }) => theme.breakpoints.up('md')} {
    padding: ${({ theme }) => theme.spacing(10)};
  }
`
