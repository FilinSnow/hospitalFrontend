import React, { useEffect, useState } from "react";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from "react-redux";
import {IconButton} from "@mui/material";
import {makeStyles} from '@material-ui/core/styles';
import {thunkGetAllRecords} from "../../Reducers/ReceptionMainReducer";

const ListRecords = (props) => {

    useEffect(() => {
        props.thunkGetAllRecords();
    }, [])

    return (
        <>
            {
                props.records?.map(record => {
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
                                    {record.date}
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
                                    <IconButton aria-label="cancel"

                                        onClick={() => {

                                        }}
                                    >

                                        <EditIcon  />
                                    </IconButton>
                                </div>

                                <div>
                                    <IconButton aria-label="cancel"
                                        
                                        onClick={() => {

                                        }}
                                    >

                                        <DeleteIcon  />
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


export default connect(mapStateToProps, {thunkGetAllRecords})(ListRecords);