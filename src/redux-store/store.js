import {applyMiddleware, combineReducers, createStore} from "redux";

import ReceptionMainReducer from "../Reducers/ReceptionMainReducer";
import thunk from "redux-thunk";



const reducers = combineReducers({
  receptionPage: ReceptionMainReducer
})

const store = createStore(reducers, applyMiddleware(thunk));

export default store