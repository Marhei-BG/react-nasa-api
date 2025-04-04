import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
        light: '#105bd8',
        main: '#0b3d91',
        dark: '#061f4a',
        contrastText: '#fff',
    },
    secondary: {
        light: '#f4a261',
        main: '#ee6c4d',
        dark: '#9c4221',
        contrastText: '#fff',
    },
    background: {
      default: '#FFFFFF', 
      paper: '#f1f1f1', 
    },
    text: {
      primary: '#000000',
      secondary: '#000000', 
    },
  },
  typography: {
    fontFamily: 'Georgia, serif',
    h1: {
      color: '#061f4a', 
      textAlign: 'center',
      margin: '8px',
      
      fontSize: '4rem',
    },
    h2: {
      color: '#428BCA', 
      margin: '5px',
        fontSize: '2rem',
    },
  },
  body: {
    backgroundColor: '#212121',
  },
});

export default theme;