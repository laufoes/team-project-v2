import { createTheme } from "@mui/material";

const primaryColor = '#074EE8'; 
const bodyColor = '#767676';
const bgColor ='#ECEEF2';
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
            default:  bgColor,
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
});

export default theme