import React, {useEffect, useState} from "react";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {connect} from "react-redux";
import {Button, IconButton, TextField} from "@mui/material";
import PopupEdit from "../PopupEdit/PopupEdit";

import {thunkChangeInfoRecord, thunkGetAllRecords} from "../../Reducers/ReceptionMainReducer";

const ListRecords = (props) => {

  useEffect(() => {
    props.thunkGetAllRecords();
  }, []);

  const [editMode, setEditMode] = useState(false);
  const [deleteMode, setDeleteMode] = useState(false);
  const [indexRecord, setIndexRecord] = useState(0);


  return (
      <>
        {
          editMode
              ? <PopupEdit thunkChangeInfoRecord={props.thunkChangeInfoRecord}
                           records={props.records}
                           id={indexRecord}
                           setEditMode={setEditMode}
              />
              : null
        }

        {
          props.records?.map((record, index) => {
            return (
                <div key={record._id} className='container__record'>
                  <div className="record__span"
                       style={{width: '25%'}}
                  >
                                <span>
                                    {record.name}
                                </span>
                  </div>
                  <div className="record__span"
                       style={{width: '25%'}}
                  >
                                <span>
                                    {record.doctor}
                                </span>
                  </div>
                  <div className="record__span"
                       style={{width: '17%'}}
                  >
                                <span>
                                    {record.date
                                        .split('-')
                                        .reverse().join('-')}
                                </span>
                  </div>
                  <div className="record__span"
                       style={{width: '21%'}}
                  >
                                <span>
                                    {record.complaint}
                                </span>
                  </div>
                  <div className="record__btn__edit-icon"
                       style={{width: '11%'}}
                  >
                    <div>
                      <IconButton aria-label="editIcon"
                                  onClick={() => {
                                    setIndexRecord(index)
                                    setEditMode(true)
                                  }}
                      >

                        <EditIcon/>
                      </IconButton>
                    </div>

                    <div>
                      <IconButton aria-label="deleteIcon"
                                  onClick={() => {

                                  }}
                      >

                        <DeleteIcon/>
                      </IconButton>
                    </div>
                  </div>
                </div>
            );
          })
        }
      </>
  );
}

const mapStateToProps = (state) => {
  return {
    records: state.receptionPage.data
  }
}


export default connect(mapStateToProps, {thunkGetAllRecords, thunkChangeInfoRecord})(ListRecords);