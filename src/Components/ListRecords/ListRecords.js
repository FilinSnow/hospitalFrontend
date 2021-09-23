import React, {useEffect, useState} from "react";

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {connect} from "react-redux";
import {IconButton} from "@mui/material";

import {
  thunkChangeInfoRecord,
  thunkDeleteRecord,
  thunkGetAllRecords
} from "../../Reducers/ReceptionMainReducer";

import PopupEdit from "../PopupEdit/PopupEdit";
import PopupDelete from "../PopupDelete/PopupDelete";

const ListRecords = (props) => {

  const {sortNameInput, sortDirectionInput} = props;

  const [editMode, setEditMode] = useState(false);
  const [deleteMode, setDeleteMode] = useState(false);
  const [indexRecord, setIndexRecord] = useState(0);


  return (
      <>
        {
          deleteMode
              ? <PopupDelete
                  thunkDeleteRecord={props.thunkDeleteRecord}
                  records={props?.records}
                  id={indexRecord}
                  setDeleteMode={setDeleteMode}
              />
              : null
        }
        {
          editMode
              ? <PopupEdit
                  thunkChangeInfoRecord={props.thunkChangeInfoRecord}
                  records={props?.records}
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
                                    setIndexRecord(index);
                                    setEditMode(true);
                                  }}
                      >

                        <EditIcon/>
                      </IconButton>
                    </div>

                    <div>
                      <IconButton aria-label="deleteIcon"
                                  onClick={() => {
                                    setIndexRecord(index);
                                    setDeleteMode(true);
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


export default connect(null,
    {
      thunkChangeInfoRecord,
      thunkDeleteRecord
    }
)
(ListRecords);