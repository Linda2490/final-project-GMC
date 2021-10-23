const {
  GET_ALL_VALUES_LOAD,
  GET_ALL_VALUES_SUCCESS,
  GET_ALL_VALUES_FAIL,
  ADD_KILOETCONSO,
  GET_KILOETCONSO,
  EDIT_KILOETCONSO,
  CURRENT_KILOETCONSO,
} = require('../constants/kiloetconso')

// initialstate

const initialState = {
  kiloetconsos: [],
  errors: {},
  isAuth: false,
  load: false,
  isAdmin: false,

 kiloetconsoss: {},
}
// pure function=> (state, {type,payload})=>
const kiloetconsoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CURRENT_KILOETCONSO:
      return { ...state, kiloetconso: payload.kiloetconso, isAuth: true }
    case GET_ALL_VALUES_LOAD:
      return { ...state, load: true }
    
    case GET_ALL_VALUES_SUCCESS:
      return { ...state, kiloetconsos: payload, load: false }
    case GET_ALL_VALUES_FAIL:
      return { ...state, errors: payload, load: false, isAuth: false }
     case GET_KILOETCONSO: 
    return { ...state, kiloetconsoss:payload}  
    case ADD_KILOETCONSO:
      localStorage.setItem('token', payload.token)
      return { ...state, kiloetconso : payload.kiloetconso, isAuth: true }
      case EDIT_KILOETCONSO:
    
    return { ...state, kiloetconsoss:payload,  load: false, isAuth: true}
    default:
      return state
  }
}

export default kiloetconsoReducer
