import React from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";


const PopupDelete = (props) => {
  const record = props?.records[props.id];


  const deleteRecord = () => {
    props.setDeleteMode(false);
    props.thunkDeleteRecord(record._id);
  }

  return (
    <>
      <div className='edit__popup'>
        <div className="popup__container">
          <div className="container__content" style={{ borderRadius: '3px' }}>
            <div className="content__header">
              <h1>Удалить прием</h1>
            </div>
            <Box sx={{ padding: '24px 0 0 40px', mb: '80px' }}>
              <span style={{ fontSize: '24px' }}>
                Вы действительно хотите удалить прием?
              </span>

            </Box>
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
                onClick={() => props.setDeleteMode(false)}
              >
                Cancel
              </Button>
              <Button variant="contained"
                className='btn__save'
                onClick={() => deleteRecord()}
                sx={{
                  padding: '5px 45px',
                  textTransform: 'none',
                  color: 'black',
                  background: 'rgba(197, 233, 255, 0.72)'
                }}
              >
                Delete
              </Button>
            </Box>
          </div>
        </div>
      </div>
    </>

  );
}

export default PopupDelete;