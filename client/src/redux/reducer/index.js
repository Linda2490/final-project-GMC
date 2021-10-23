import { combineReducers } from "redux";
import driverReducer from "./driver";
import editReducer from "./editreducerdriver";
import carReducer from "./car";
import kiloetconsoReducer from "./kiloetconso";
const rootReducer = combineReducers({ driverReducer, editReducer, carReducer, kiloetconsoReducer });
export default rootReducer;