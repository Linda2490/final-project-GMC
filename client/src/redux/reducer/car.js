import { EDIT_DRIVER } from '../constants/driver'

const {
  GET_ALL_CARS_FAIL,
  GET_ALL_CARS_LOAD,
  GET_ALL_CARS_SUCCESS,
  GET_CAR,
} = require('../constants/cars')

// initialstate

const initialState = {
  cars: [],
  errors: {},
  isAuth: false,
  load: false,
  isAdmin: false,
  
  carr: {},
}
// pure function=> (state, {type,payload})=>
const carReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_CARS_LOAD:
      return { ...state, load: true }

    case GET_ALL_CARS_SUCCESS:
      return { ...state, cars: payload, load: false }
    case GET_ALL_CARS_FAIL:
      return { ...state, errors: payload, load: false, isAuth: false }
    case GET_CAR : 
    return { ...state, carr:payload}
    case EDIT_DRIVER:
    
    return { ...state, carr:payload,  load: false, isAuth: true, isAdmin :true}
    
    
    default:
      return state
  }
}

export default carReducer
