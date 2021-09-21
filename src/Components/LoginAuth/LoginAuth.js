import React from "react";
import { useHistory } from "react-router";

import iconPlus from '../../img/plus.svg';
import iconManufacture from '../../img/manufacture.svg';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {grey} from '@mui/material/colors';
import Button from '@mui/material/Button';
import {Box} from "@mui/material";



const LoginAuth = (props) => {
  const history = useHistory;
  const goRegisterPage = () => {
    history.push('/register')
  }
  
  const theme = createTheme({
    palette: {
      primary: {
        bd: grey[900],
        // Purple and green play nicely together.
        main: grey[400],
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#11cb5f',
      },
      overrides: {
        MuiButton: {
          raisedPrimary: {
            color: 'white',
          },
        },
      }
    },
  });
  return (
      <div className='container__auth'>
        <div className="auth__header">
          <div className="header__icon">
            <img src={iconPlus} alt=""/>
          </div>
          <div className="header__title">
            <h1>Войти в систему</h1>
          </div>
        </div>
        <div className="auth__main">
          <div className="main__icon">
            <img src={iconManufacture} alt=""/>
          </div>
          <div className="main__auth">

            <form className='form__auth'>
              <h3>Войти в систему</h3>
              <div className='input-form'>
                <label>
                  Login:
                  <div>
                    <input type="text" name="name" placeholder='Login'/>
                  </div>
                </label>
              </div>
              <div className='input-form'>
                <label>
                  Password:
                  <div>
                    <input type="password" name="name" placeholder='Password'/>
                  </div>
                </label>
              </div>
              
              <Box sx={{display: 'flex', justifyContent:'end', marginTop: '15px'}}>
                <ThemeProvider theme={theme} >
                  <Button sx={{color: "black", textTransform: 'none'}} variant="outlined">Войти</Button>
                </ThemeProvider>
              </Box>
              <Box sx={{display: 'flex', justifyContent:'end'}}>
                <ThemeProvider theme={theme} >
                  <Button onClick={() => goRegisterPage()} sx={{color: "black", textTransform: 'none'}} variant="text">Зарегистрироваться</Button>
                </ThemeProvider>
              </Box>
            </form>
          </div>
        </div>
      </div>
  );
}

export default LoginAuth;