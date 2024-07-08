import { backdropClasses } from '@mui/material/Backdrop'
import { grey } from '@mui/material/colors'

export const SIDEBAR_WIDTH = 260

const components = {
  MuiCssBaseline: {
    styleOverrides: `
      html,
      body,
      #root {
        height: 100%;
      }

      ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }

      ::-webkit-scrollbar-track {
        background: transparent;
      }

      ::-webkit-scrollbar-thumb {
        background-color: ${grey[500]};
        border-radius: 8px;
      }

      a {
        -webkit-user-drag: none;
      }
    `,
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        flexWrap: 'nowrap' as const,
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: 'none' as const,
      },
    },
  },
  MuiTabs: {
    styleOverrides: {
      root: {
        '& button': {
          transition: 'all 250ms ease-in-out',
          borderRadius: '0',
          padding: '12px 16px',
        },
        '& button:hover': { backgroundColor: grey[100] },
      },
    },
  },
  /* this is a hack to fix Backdrop bug
    can be deleted after https://github.com/mui/material-ui/issues/32286 is closed
  */
  MuiModal: {
    styleOverrides: {
      root: {
        [`&:has(> div.${backdropClasses.root}[style*="opacity: 0"])`]: {
          pointerEvents: 'none',
        },
      },
    },
  },
}

export default components
