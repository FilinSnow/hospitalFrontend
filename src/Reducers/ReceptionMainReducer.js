import api from "../api/api";

const SETDATA = 'SETDATA';

const initialState = {
  data: []
}

const ReceptionMainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SETDATA: {
      return {
        ...state,
        data: action.data,
      }
    }
    default: {
      return {...state};
    }
  }
}

export const actionSetRecords = (data) => {
  return {
    type: SETDATA,
    data
  }
}

export const thunkGetAllRecords = () => {
  return dispatch => {
    return api.getAllRecords()
        .then(res => {
          if (res) {
            dispatch(actionSetRecords(res.data.data));
          }
        })
  }
}
export const thunkCreateNewRecord = (record) => {
  return dispatch => {
    return api.createNewRecord(record)
        .then(res => {
          if (res) {
            return api.getAllRecords()
                .then(res => {
                  if (res) {
                    dispatch(actionSetRecords(res.data.data));
                  }
                })
          }
        })
  }
}

export default ReceptionMainReducer;