import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import { Box } from "@mui/material";

import iconPlus from '../../img/plus.svg';
import iconManufacture from '../../img/manufacture.svg';
import { connect } from "react-redux";
import { thunkLogin } from "../../Reducers/ReceptionMainReducer";


const LoginAuth = (props) => {

  const [data, setData] = useState({
    username: '',
    password: '',
  });
  const [errorLogin, setErrorLogin] = useState(false);
  const [errorPass, setErrorPass] = useState(false);
  const history = useHistory();
  // useEffect(() => {
  //   if(props.token) {
  //     history.push('/login')
  //   }
  //   history.push('/')
  // })
  const goRegisterPage = () => {
    history.push('/register')
  }
  const login = () => {
    props.thunkLogin(data)
      .then(res => {
        if (res) {
          localStorage.setItem('token', JSON.stringify(`Bearer ${res.data.token}`));
          props.setFlag(!props.flag);
        }
      });
  }

  const changeDataAuth = (nameInput, value) => {
    switch (nameInput) {
      case 'username': {
        if (!/^[a-zA-Z]*\d*$/i.test(value) || value.length < 6) {
          setErrorLogin(true);
        } else {
          setErrorLogin(false);
        }
        setData({
          ...data,
          username: value,
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
        main: grey[400],
      },
      secondary: {
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

                <div>
                  <input type="text"
                    name="username"
                    placeholder='Login'
                    value={data.username}
                    className={
                      data.username.length && errorLogin
                        ? 'errorInput'
                        : null
                    }
                    onChange={(e) =>
                      changeDataAuth(e.target.name,
                        e.target.value)
                    }
                  />
                  {
                    data.username.length && errorLogin
                      ? <span className='error'>
                        Login is less then 6
                      </span>
                      : null
                  }
                </div>
              </label>
            </div>
            <div className='input-form'>
              <label>
                Password:

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
                    data.username
                      && data.password
                      ? false
                      : true
                  }
                  onClick={() => login()}
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


export default connect(null, {
  thunkLogin
})(LoginAuth);