import api from "../api/api";

const SETDATA = 'SETDATA';
const SETUSERID = 'SETUSERID';

const initialState = {
  data: [],
  userId: ''
}

const ReceptionMainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SETDATA: {
      return {
        ...state,
        data: action.data,
      }
    }
    case SETUSERID: {
      return {
        ...state,
        userId: action.userId,
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

export const actionSetIdUser = (userId) => {
  return {
    type: SETUSERID,
    userId
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

export const thunkChangeInfoRecord = (record) => {
  return dispatch => {
    return api.changeInfoRecord(record)
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

export const thunkDeleteRecord = (id) => {
  return dispatch => {
    return api.deleteRecord(id)
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

export const thunkLogin = (data) => {
  return dispatch => {
    return api.login(data)
        .then(res => {
          if (res) {
            dispatch(actionSetIdUser(res.data.user.id));
            return res;
          }
        })
  }
}

export const thunkRegister = (data) => {
  return dispatch => {
    return api.register(data)
        .then(res => {
          if (res) {
            dispatch(actionSetIdUser(res.data.user.id));
            return res;
          }
        })
  }
}

export default ReceptionMainReducer;