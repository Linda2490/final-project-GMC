import axios from 'axios'
import Cookies from 'js-cookie'

import {
  DELETE_DRIVER,
  GET_ALL_DRIVERS_LOAD,
  GET_ALL_DRIVERS_SUCCESS,
  CURRENT_DRIVER,
  LOGOUT_DRIVER,
  LOAD_DRIVER,
  LOGIN_DRIVER,
  FAIL_DRIVER,
  GET_ALL_DRIVERS_FAIL,
  TOGGLE_FALSE,
  TOGGLE_TRUE,
  GET_DRIVER,
  EDIT_DRIVER,
  EDIT_DRIVERRR
} from '../constants/driver'

export const login = (driver, history) => async (dispatch) => {
  dispatch({ type: LOAD_DRIVER })
  Cookies.set('driver', 'Loggedin')

  try {
    let result = await axios.post('/api/driver/Login', driver)
    dispatch({ type: LOGIN_DRIVER, payload: result.data })
    if (result.data.driver.role === 'admin') {
      history.push('./admindash')
    } else {
      history.push('./profile')
    }
  } catch (error) {
    dispatch({ type: FAIL_DRIVER, payload: error.response.data.errors })
  }
}

export const current = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem('token'),
      },
    }
    let result = await axios.get('/api/driver/current', config)
    dispatch({ type: CURRENT_DRIVER, payload: result.data })
  } catch (error) {
    dispatch({ type: FAIL_DRIVER, payload: error.response.data.errors })
  }
}

export const logout = () => {
  return {
    type: LOGOUT_DRIVER,
  }
}

export const videErrors = () => {
  return {
    type: 'VIDE_ERRORS',
  }
}

export const getdrivers = () => async (dispatch) => {
  dispatch({ type: GET_ALL_DRIVERS_LOAD })
  try {
    const res = await axios.get('/api/driver/getdrivers')
    dispatch({ type: GET_ALL_DRIVERS_SUCCESS, payload: res.data.drivers })
  } catch (error) {
    console.log(error)
    
  }
}
export const addDriver = (driverr) => async (dispatch) => {
   const config = {
    headers: {
      authorization: localStorage.getItem('token'),
    },
  }
  try {
    await axios.post('/api/driver/addDriver', driverr, config)
    dispatch(getdrivers())
  } catch (error) {
    dispatch({ type: FAIL_DRIVER, payload: error.response.data.errors })
  }
}

export const deleteDriver= (id) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem('token'),
    },
  }
  try {
    const res = await axios.delete(`/api/driver/deletedriver/${id}`, config)
    dispatch({ type: DELETE_DRIVER, payload: res.data })
    dispatch(getdrivers())
  } catch (error) {
    console.log(error)
    dispatch({ type: FAIL_DRIVER, payload: error.response.data.errors })
  }
}

export const toggleTrue= () => {
  return {
    type: TOGGLE_TRUE,
  };
};
export const toggleFalse = () => {
  return {
    type: TOGGLE_FALSE,
  };
};


export const getDriver = (id) => async (dispatch) => {
  
  try {
    const res = await axios.get(`/api/driver/${id}`)
    dispatch({ type: GET_DRIVER, payload: res.data.response })
    
  } catch (error) {
    console.log(error)
    dispatch({ type: FAIL_DRIVER, payload: error.response.data.errors })
  }
}

export const editDriver = (id, driver) => async (dispatch) => {
   const config = {
    headers: {
      authorization: localStorage.getItem('token'),
    },
  }
  try {
   
    const res =  await axios.put(`/api/driver/editdriver/${id}`, driver, config)
     
     dispatch({ type: EDIT_DRIVER, payload: res.data })
   dispatch( getDriver())
  }
  
    
    
    
   catch (error) {
     console.log(error)
    dispatch({ type: FAIL_DRIVER, payload: error.response.data.errors })
  }
};
export const editProfile = (id, driver) => async (dispatch) => {
   const config = {
    headers: {
      authorization: localStorage.getItem('token'),
    },
  }
  try {
   
    const res =  await axios.put(`/api/driver/editdriverrr/${id}`, driver, config)
     
     dispatch({ type: EDIT_DRIVERRR, payload: res.data.driver })
   dispatch(getdrivers())
  }
  
   
    
    
   catch (error) {
     console.log(error)
    dispatch({ type: FAIL_DRIVER, payload: error.response.data.errors })
  }
};

