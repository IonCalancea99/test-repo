import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#211919',
        },
        secondary: {
            main: '#393939',
        },
        background: {
            default: '#2e2e2e',
            paper: '#ffffff',
        },
        text: {
            primary: 'white',
            secondary: 'cyan',
        },
    },
});

export default theme;
