import api from "../api/api";

const SETDATA = 'SETDATA';

const initialState = {
  data: []
}

const ReceptionMain = (state = initialState, action) => {
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
        console.log(res);
      })
  }
}

export default ReceptionMain;