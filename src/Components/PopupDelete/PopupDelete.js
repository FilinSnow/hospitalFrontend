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
          <div className="container__content">
            <div className="content__header">
              <h1>Удалить прием</h1>
            </div>
            <Box className='container__delete'>
              <span>
                Вы действительно хотите удалить прием?
              </span>
            </Box>
            <Box className='btn__container__del-cancel'>
              <Button variant="outlined"
                className='btn__cancel'
                onClick={() => props.setDeleteMode(false)}
              >
                Cancel
              </Button>
              <Button variant="contained"
                className='btn__save'
                onClick={() => deleteRecord()}
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