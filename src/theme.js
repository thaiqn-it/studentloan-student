import { createTheme } from '@mui/material/styles';
import { PRIMARY_COLOR,PRIMARY_LIGHT_COLOR } from './constants/color';
import { FONT } from './constants/font';

const theme = createTheme({
    palette: {
      primary: {
        main: PRIMARY_COLOR,
        light : PRIMARY_LIGHT_COLOR,
      },
    },
    typography: {
        fontFamily : FONT
    },
});

export default theme