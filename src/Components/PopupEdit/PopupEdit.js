import React, {useState} from "react";
import {Box} from "@mui/system";
import {Button, TextField} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

const PopupEdit = (props) => {
  const record = props?.records[props.id];

  const [data, setData] = useState({
    name: record.name,
    doctor: record.doctor,
    date: record.date,
    complaint: record.complaint,
  });
  const handleChangeEditPopup = (inputName, value) => {
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
  const saveData = () => {
    let obj = {
      ...record,
      ...data
    }
    props.setEditMode(false);
    props.thunkChangeInfoRecord(obj);
  }
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

  return (
      <>
        <div className='edit__popup'>
          <div className="popup__container">
            <div className="container__content" style={{borderRadius: '3px'}}>
              <div className="content__header">
                <h1>Изменить прием</h1>
              </div>
              <div className="content__main">
                <Box className='container__edit-record'>
                  <Box className='add-record'
                       sx={{display: 'flex'}}
                  >
                    <Box sx={{mb: '8px'}}>
                      <span className='text__record'>Имя:</span>
                    </Box>
                    <Box>
                      <TextField
                          fullWidth
                          name='name'
                          value={data.name}
                          sx={{
                            background: 'white',
                            borderRadius: '3px'
                          }}
                          onChange={
                            (e) =>
                                handleChangeEditPopup(e.target.name, e.target.value)
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
                          fullWidth
                          id="outlined-select-currency"
                          select
                          name='doctor'
                          value={data.doctor}
                          sx={{
                            background: 'white',
                            borderRadius: '3px',
                          }}
                          onChange={
                            (e) =>
                                handleChangeEditPopup(e.target.name, e.target.value)
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
                             style={{width: '100%'}}
                             value={data.date}
                             onChange={
                               (e) =>
                                   handleChangeEditPopup(e.target.name, e.target.value)
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
                          fullWidth
                          name='complaint'
                          value={data.complaint}
                          multiline
                          rows={4}
                          sx={{
                            background: 'white',
                            borderRadius: '3px',
                            mb: '63px'
                          }}
                          onChange={
                            (e) =>
                                handleChangeEditPopup(e.target.name, e.target.value)
                          }
                      >
                      </TextField>
                    </Box>
                  </Box>

                </Box>
              </div>
              <Box sx={{
                display: 'flex',
                justifyContent: 'end',
                padding: '24px',
                boxShadow: '0px -4px 4px 0px rgba(0, 0, 0, 0.25)',
                borderRadius: '0 0 3px 3px'
              }}
              >
                <Button variant="outlined"
                        className='btn__cancel'
                        sx={{
                          padding: '5px 45px',
                          mr: '12px',
                          textTransform: 'none',
                          border: '1px solid grey',
                          color: 'black',
                        }}
                        onClick={() => props.setEditMode(false)}
                >
                  Cancel
                </Button>
                <Button variant="contained"
                        className='btn__save'
                        onClick={() => saveData()}
                        sx={{
                          padding: '5px 45px',
                          textTransform: 'none',
                          color: 'black',
                          background: 'rgba(197, 233, 255, 0.72)'
                        }}
                >
                  Save
                </Button>
              </Box>
            </div>
          </div>
        </div>
      </>

  );
}

export default PopupEdit;