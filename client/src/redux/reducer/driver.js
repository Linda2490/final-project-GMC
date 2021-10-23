const {
  ADD_DRIVER,
  LOGIN_DRIVER,
  FAIL_DRIVER,
  LOAD_DRIVER,
  LOGOUT_DRIVER,
  CURRENT_DRIVER,
  DELETE_DRIVER,
  GET_ALL_DRIVERS_FAIL,
  GET_ALL_DRIVERS_SUCCESS,
  GET_ALL_DRIVERS_LOAD,
  
  GET_DRIVER,
  EDIT_DRIVER,
  EDIT_DRIVERRR
  
} = require('../constants/driver')

// initialstate


const initialState = {
   drivers : [],
  errors: {},
  isAuth: false,
  load: false,
  isAdmin : false,
  
  driverr : {}
}
// pure function=> (state, {type,payload})=>
const driverReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_DRIVER:
      return { ...state, load: true }

    //  payload: {token , msg , driver}
    case LOGIN_DRIVER:
      localStorage.setItem('token', payload.token)
      return { ...state, driver: payload.driver, load: false, isAuth: true }
    case FAIL_DRIVER:
      return { ...state, errors: payload, load: false }

    case 'VIDE_ERRORS':
      return { ...state, errors: [] }
    case CURRENT_DRIVER:
      return { ...state, driver: payload.driver, isAuth: true }
    case LOGOUT_DRIVER:
      localStorage.removeItem('token')
      return { ...state, driver: {}, isAuth: false }

    case ADD_DRIVER:
      localStorage.setItem('token', payload.token)
      return { ...state, driver: payload.driver, isAuth: true }
    case GET_ALL_DRIVERS_LOAD:
      return { ...state, load: true }
    
    case GET_ALL_DRIVERS_SUCCESS:
      return { ...state, drivers: payload, load: false }
    case GET_ALL_DRIVERS_FAIL:
    return { ...state, errors:payload,  load: false, isAuth: false}
    case GET_DRIVER : 
    return { ...state, driverr:payload}
    case DELETE_DRIVER:
    
    return { ...state, driver:payload.driver,  load: false, isAuth: true, isAdmin :true}
    case EDIT_DRIVER:
    
    return { ...state, driverr:payload,  load: false, isAuth: true, isAdmin :true}
    case EDIT_DRIVERRR:
    
    return { ...state, driverr:payload,  load: false, isAuth: true, isAdmin :false}
    default:
      return state
  }
}

export default driverReducer
