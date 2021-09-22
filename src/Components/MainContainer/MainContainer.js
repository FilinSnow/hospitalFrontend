import React, {useState} from "react";
import {connect} from "react-redux";
import {Box} from "@mui/system";
import {TextField} from "@mui/material";
import MenuItem from '@mui/material/MenuItem';


import AuthHOC from "../../hoc/AuthHOC";
import {thunkCreateNewRecord} from "../../Reducers/ReceptionMainReducer";

import iconPlus from '../../img/plus.svg';
import ListRecords from "../ListRecords/ListRecords";

const Main = (props) => {
  const [data, setData] = useState({
    name: '',
    doctor: '',
    date: '',
    complaint: ''
  });

  const currencies = [
    {
      value: 'Иванов Иван Иванович',
      label: 'Иванов Иван Иванович',
    },
    {
      value: 'Демчук Алексей Павлович',
      label: 'Демчук Алексей Павлович',
    },
    {
      value: 'Гришина Ольга Константиновна',
      label: 'Гришина Ольга Константиновна',
    },
    {
      value: 'Бирюков Евгений Евгеньевич',
      label: 'Бирюков Евгений Евгеньевич',
    },
  ];

  const handleChange = (inputName, value) => {
    switch (inputName) {
      case 'name': {
        setData({
          ...data,
          name: value
        })
        break;
      }
      case 'doctor': {
        setData({
          ...data,
          doctor: value
        })
        break;
      }
      case 'date': {
        setData({
          ...data,
          date: value
        })
        break;
      }
      case 'complaint': {
        setData({
          ...data,
          complaint: value
        })
        break;
      }
    }
  };
  const addRecord = () => {
    const newData = data.date.split('-').reverse().join('-')
    const obj = {
      ...data,
      date: newData
    };
    setData({
      name: '',
      doctor: '',
      date: '',
      complaint: ''
    })
    props.thunkCreateNewRecord(obj)
    // console.log(obj)
  }

  return (
      <div className="container__main">
        <div className='container__auth'>
          <div className="auth__header">
            <div className='header__icon-title'>
              <div className="header__icon">
                <img src={iconPlus} alt=""/>
              </div>

              <div className="header__title">
                <h1>Приемы</h1>
              </div>
            </div>

            <div className='header__button'>
              <div>
                <button className='btn-main'>Выход</button>
              </div>
            </div>
          </div>

          <div className="container__reception">
            <Box className='container__add-record'>
              <Box className='add-record'
                   sx={{display: 'flex'}}
              >
                <Box sx={{mb: '8px'}}>
                  <span className='text__record'>Имя:</span>
                </Box>
                <Box>
                  <TextField
                      name='name'
                      value={data.name}
                      sx={{
                        background: 'white',
                      }}
                      onChange={
                        (e) =>
                            handleChange(e.target.name, e.target.value)
                      }
                  >
                  </TextField>
                </Box>
              </Box>
              <Box className='add-record'
                   sx={{display: 'flex'}}
              >
                <Box sx={{mb: '8px'}}>
                  <span className='text__record'>Врач:</span>
                </Box>
                <Box>
                  <TextField
                      id="outlined-select-currency"
                      select
                      name='doctor'
                      value={data.doctor}
                      onChange={handleChange}
                      sx={{
                        background: 'white',
                        width: '300px'
                      }}
                      onChange={
                        (e) =>
                            handleChange(e.target.name, e.target.value)
                      }
                  >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                    ))}
                  </TextField>
                </Box>
              </Box>
              <Box className='add-record'
                   sx={{display: 'flex'}}
              >
                <Box sx={{mb: '8px'}}>
                  <span className='text__record'>Дата:</span>
                </Box>
                <Box>

                  <input type="date"
                         id="date"
                         name="date"
                         value={data.date}
                         onChange={
                           (e) =>
                               handleChange(e.target.name, e.target.value)
                         }
                  />
                </Box>
              </Box>
              <Box className='add-record'
                   sx={{display: 'flex'}}
              >
                <Box sx={{mb: '8px'}}>
                  <span className='text__record'>Жалобы:</span>
                </Box>
                <Box>
                  <TextField
                      name='complaint'
                      value={data.complaint}
                      sx={{
                        background: 'white'
                      }}
                      onChange={
                        (e) =>
                            handleChange(e.target.name, e.target.value)
                      }
                  >
                  </TextField>
                </Box>
              </Box>
              <Box sx={{alignSelf: 'end'}}>
                <div className='container__btn-main'>
                  <button style={{padding: '13.5px 14px'}}
                          className='btn-main'
                          onClick={() => addRecord()}
                          disabled={
                            data.name.length
                            && data.doctor.length
                            && data.date.length
                            && data.complaint.length
                                ? false
                                : true
                          }
                  >
                    Добавить
                  </button>
                </div>

              </Box>
            </Box>
            <Box className='container__table'>
              <div className="table__header">
                <div style={{width: '25%'}}>
                  <span>Имя</span>
                </div>
                <div style={{width: '25%'}}>
                  <span>Врач</span>
                </div>
                <div style={{width: '17%'}}>
                  <span>Дата</span>
                </div>
                <div style={{width: '21%'}}>
                  <span>Жалобы</span>
                </div>
                <div style={{width: '11%'}}>
                  <span></span>
                </div>
              </div>
              <div className="table__main">
                <ListRecords/>
              </div>
            </Box>
          </div>

        </div>

      </div>

  );
}

const MainContainer = connect(null, {thunkCreateNewRecord})(AuthHOC(Main));
export default MainContainer;
