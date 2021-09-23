import React, { useState } from "react";
import { useHistory } from "react-router";

import iconPlus from '../../img/plus.svg';
import iconManufacture from '../../img/manufacture.svg';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import { Box } from "@mui/material";



const LoginAuth = (props) => {

  const [data, setData] = useState({
    login: '',
    password: '',
  });
  const [errorLogin, setErrorLogin] = useState(false);
  const [errorPass, setErrorPass] = useState(false);
  const history = useHistory();

  const goRegisterPage = () => {
    history.push('/register')
  }

  const changeDataAuth = (nameInput, value) => {
    switch (nameInput) {
      case 'login': {
        if (!/^[a-z]*$/i.test(value) || value.length < 6) {
          setErrorLogin(true);
        } else {
          setErrorLogin(false);
        }
        setData({
          ...data,
          login: value,
        });
        break;
      }
      case 'password': {
        if (
          !/^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]+$/i.test(value)
          || value.length < 6
        ) {
          setErrorPass(true);
        }

        else {
          setErrorPass(false);
        }
        setData({
          ...data,
          password: value,
        });
        break;
      }
      default: {
        return 1;
      }
    }
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
        <div className='header__icon-title'>
          <div className="header__icon">
            <img src={iconPlus} alt="" />
          </div>

          <div className="header__title">
            <h1>Войти в систему</h1>
          </div>
        </div>
      </div>
      <div className="auth__main">
        <div className="main__icon">
          <img src={iconManufacture} alt="" />
        </div>
        <div className="main__auth">
          <form className='form__auth'>
            <h3>Войти в систему</h3>
            <div className='input-form'>
              <label>
                Login:
                {
                  data.login.length && errorLogin
                    ? <span className='error'>
                      Password is less then 6
                    </span>
                    : null
                }
                <div>
                  <input type="text"
                    name="login"
                    placeholder='Login'
                    value={data.login}
                    className={
                      data.login.length && errorLogin
                        ? 'errorInput'
                        : null
                    }
                    onChange={(e) =>
                      changeDataAuth(e.target.name,
                        e.target.value)
                    }
                  />
                </div>
              </label>
            </div>
            <div className='input-form'>
              <label>
                Password:
                {
                  data.password && errorPass
                    ? <span className='error'>
                      Password is
                      less than 6 not contain
                      latin letters not contain
                      1 number
                    </span>
                    : null
                }
                <div>
                  <input type="password"
                    name="password"
                    placeholder='Password'
                    className={
                      data.password && errorPass
                        ? 'errorInput'
                        : null
                    }
                    value={data.password}
                    onChange={(e) =>
                      changeDataAuth(e.target.name,
                        e.target.value)
                    }
                  />
                </div>
              </label>
            </div>

            <Box sx={{
              display: 'flex',
              justifyContent: 'end',
              marginTop: '15px'
            }}
            >
              <ThemeProvider theme={theme} >
                <Button
                  sx={{
                    color: "black",
                    textTransform: 'none'
                  }}
                  variant="outlined"
                  disabled={
                    data.login
                      && data.password
                      ? false
                      : true
                  }
                >
                  Войти
                </Button>
              </ThemeProvider>
            </Box>
            <Box sx={{
              display: 'flex',
              justifyContent: 'end'
            }}
            >
              <ThemeProvider theme={theme} >
                <Button onClick={() =>
                  goRegisterPage()}
                  sx={{
                    color: "black",
                    textTransform: 'none'
                  }}
                  variant="text"
                >
                  Зарегистрироваться
                </Button>
              </ThemeProvider>
            </Box>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginAuth;