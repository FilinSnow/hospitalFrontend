import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {Box} from "@mui/system";
import {TextField} from "@mui/material";
import MenuItem from '@mui/material/MenuItem';


import AuthHOC from "../../hoc/AuthHOC";
import {thunkCreateNewRecord, thunkGetAllRecords} from "../../Reducers/ReceptionMainReducer";

import iconPlus from '../../img/plus.svg';
import ListRecords from "../ListRecords/ListRecords";

const Main = (props) => {
  const [data, setData] = useState({
    name: '',
    doctor: '',
    date: '',
    complaint: ''
  });
  useEffect(() => {
    props.thunkGetAllRecords();
  }, []);
  useEffect(() => {
    setRecords(props.records);
  }, [props.records])
  const [sortNameInput, setSortNameInput] = useState('');
  const [sortDirectionInput, setSortDirectionInput] = useState('');
  const [sortDirectionShow, setSortDirectionShow] = useState(false);
  const [records, setRecords] = useState(props.records);

  const doctors = [
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
  const sortProp = [
    {
      value: 'name',
      label: 'Имя',
    },
    {
      value: 'doctor',
      label: 'Врач',
    },
    {
      value: 'date',
      label: 'Дата',
    },
    {
      value: 'none',
      label: 'None',
    },
  ];
  const directionName = [
    {
      value: 'asc',
      label: 'По возрастанию',
    },
    {
      value: 'desc',
      label: 'По убыванию',
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
      default: {
        return 1;
      }
    }
  };
  const addRecord = () => {
    const obj = {
      ...data,
    };
    setData({
      name: '',
      doctor: '',
      date: '',
      complaint: ''
    });
    props.thunkCreateNewRecord(obj)
  }

  const changeInputSort = (value) => {
    if (value === 'none') {
      setSortDirectionShow(false);
      setSortDirectionInput('');
      props.thunkGetAllRecords();
      return setSortNameInput('');
    }
    setSortNameInput(value);
    setSortDirectionShow(true);
    if (value !== 'none' && value) {
      if(value === 'name') {
        let copy = records.sort((a,b) => a.name > b.name ? 1 : -1);
        setRecords(copy);
      }
      else if(value === 'doctor') {
        let copy = records.sort((a,b) => a.doctor > b.doctor ? 1 : -1);
        setRecords(copy);
      }
      else if(value === 'date') {
        let copy = records.sort((a,b) => a.date > b.date ? 1 : -1);
        setRecords(copy);
      }
    }
  }

  const changeInputDirection = (value) => {
    setSortDirectionInput(value);
    if(value === 'asc') {
      let copy = records.sort((a,b) => a.sortNameInput > b.sortNameInput ? 1 : -1);
      setRecords(copy);
    }
    else if (value === 'desc') {
      let copy = records.sort((a,b) => a.sortNameInput < b.sortNameInput ? 1 : -1);
      setRecords(copy);
    }
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
                        borderRadius: '3px'
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
                      sx={{
                        background: 'white',
                        borderRadius: '3px',
                        width: '300px'
                      }}
                      onChange={
                        (e) =>
                            handleChange(e.target.name, e.target.value)
                      }
                  >
                    {doctors.map((option) => (
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
                        background: 'white',
                        borderRadius: '3px',
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
                            !(data.name.length
                                && data.doctor.length
                                && data.date.length
                                && data.complaint.length)
                                ? true
                                : false
                          }
                  >
                    Добавить
                  </button>
                </div>

              </Box>
            </Box>
            <Box className='sortBy__container'
                 sx={{
                   display: 'flex',
                   justifyContent: 'end',
                   padding: '24px',
                   flexWrap: 'wrap'
                 }}
            >
              <Box className='sortBy' sx={{marginRight: '18px', display: 'flex'}}>
                <Box sx={{alignSelf: 'center'}}>
                  <span style={{fontSize: '18px', marginRight: '18px'}}>Сортировать по: </span>
                </Box>
                <Box>
                  <TextField
                      id="outlined-select-currency"
                      select
                      name='sort'
                      value={sortNameInput}
                      sx={{
                        background: 'white',
                        borderRadius: '3px',
                        width: '300px'
                      }}
                      onChange={
                        (e) =>
                            changeInputSort(e.target.value)
                      }
                  >
                    {sortProp.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                    ))}
                  </TextField>
                </Box>
              </Box>
              {
                sortDirectionShow
                    ? <Box className='direction' sx={{display: 'flex'}}>
                      <Box sx={{alignSelf: 'center'}}>
                        <span style={{fontSize: '18px', marginRight: '18px'}}>Направление : </span>
                      </Box>
                      <Box>
                        <TextField
                            id="outlined-select-currency"
                            select
                            name='direction'
                            value={sortDirectionInput}
                            sx={{
                              background: 'white',
                              borderRadius: '3px',
                              width: '300px'
                            }}
                            onChange={
                              (e) =>
                                  changeInputDirection(e.target.value)
                            }
                        >
                          {directionName.map((option) => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.label}
                              </MenuItem>
                          ))}
                        </TextField>
                      </Box>
                    </Box>
                    : null

              }


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
                <ListRecords records={records}
                             sortNameInput={sortNameInput}
                             sortDirectionInput={sortDirectionInput}
                />
              </div>
            </Box>
          </div>

        </div>

      </div>

  );
}
const mapStateToProps = (state) => {
  return {
    records: state.receptionPage.data
  }
}

const MainContainer = connect(mapStateToProps,
    {
      thunkCreateNewRecord,
      thunkGetAllRecords
    }
)
(AuthHOC(Main));
export default MainContainer;
