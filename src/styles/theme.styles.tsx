import { createTheme } from "@mui/material";
import { Box } from '@mui/material/';
import { styled } from "@mui/system"

const primaryColor = '#074EE8';
const bodyColor = '#767676';
const bgColor = '#ECEEF2';
const secondaryColor = '#AAAAAA';

const theme = createTheme({
    palette: {
        primary: {
            main: primaryColor,
        },
        secondary: {
            main: secondaryColor,
        },
        background: {
            default: bgColor,
        },
    },
    typography: {
        fontFamily: [
            'Nunito',
            'sans-serif'
        ].join(','),
        body1: {
            color: bodyColor,
            fontSize: 14,
        },
        body2: {
            color: primaryColor,
            fontSize: 16
        },
        h1: {
            fontSize: 24,
            fontWeight: 600,
            lineHeight: 3,
            textAlign: 'left'
        },
        button: {
            textTransform: 'none',
            color: primaryColor,
            fontSize: 18,
        },
    },
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    width: '50%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    elevation: 3,
                    marginTop: 100,
                    borderRadius: 20,
                    px: 6,
                }
            }
        },
    }
});

export const PageContainer = styled(Box, {
    name: 'PageContainer',
    slot: 'Wrapper'
})({
    width: 'auto',
    height: 'auto',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: bgColor,
});

export const TabContainer = styled(Box, {
    name: 'TabContainer',
    slot: 'Wrapper'
})({
    borderBottom: 2,
    borderColor: secondaryColor,
    width: '85%',
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
});

export default theme