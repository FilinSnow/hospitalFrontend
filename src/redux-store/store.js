import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import ReceptionMain from "../Reducers/ReceptionMain";


const reducers = combineReducers({
  receptionPage: ReceptionMain
})

const store = createStore(reducers, applyMiddleware(thunk));

export default store