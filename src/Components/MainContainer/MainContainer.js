import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AuthHOC from "../../hoc/AuthHOC";

import iconPlus from '../../img/plus.svg';

const Main = (props) => {
  console.log(props);
  return (
    <div className="container__main">
      <div className='container__auth'>
        <div className="auth__header">
          <div className='header__icon-title'>
            <div className="header__icon">
              <img src={iconPlus} alt="" />
            </div>

            <div className="header__title">
              <h1>Приемы</h1>
            </div>
          </div>

          <div className='header__button'>
            <div >
              <button>Выход</button>
            </div>
          </div>
        </div>

        <div className="container__reception">
          <Box className='container__add-record'>
            <Box className='add-record'
              sx={{ display: 'flex' }}
            >
              <Box sx={{ mb: '8px' }}>
                <span className='text__record'>Имя:</span>
              </Box>
              <Box>
                <TextField
                  sx={{
                    background: 'white'
                  }}
                >
                </TextField>
              </Box>
            </Box>
            <Box className='add-record'
              sx={{ display: 'flex' }}
            >
              <Box sx={{ mb: '8px' }}>
                <span className='text__record'>Врач:</span>
              </Box>
              <Box>
                <TextField
                  sx={{
                    background: 'white'
                  }}
                >
                </TextField>
              </Box>
            </Box>
            <Box className='add-record'
              sx={{ display: 'flex' }}
            >
              <Box sx={{ mb: '8px' }}>
                <span className='text__record'>Дата:</span>
              </Box>
              <Box>
                <TextField
                  sx={{
                    background: 'white'
                  }}
                >
                </TextField>
              </Box>
            </Box>
            <Box className='add-record'
              sx={{ display: 'flex' }}
            >
              <Box sx={{ mb: '8px' }}>
                <span className='text__record'>Жалобы:</span>
              </Box>
              <Box>
                <TextField
                  sx={{
                    background: 'white'
                  }}
                >
                </TextField>
              </Box>
            </Box>
          </Box>
        </div>
      </div>

    </div >

  );
}

const MainContainer = AuthHOC(Main);
export default MainContainer;
