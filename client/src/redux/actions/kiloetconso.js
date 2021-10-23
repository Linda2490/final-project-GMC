import axios from 'axios'
import {
  GET_ALL_VALUES_LOAD,
  GET_ALL_VALUES_SUCCESS,
  
  ADD_KILOETCONSO,
  GET_KILOETCONSO,
  DELETE_KILOETCONSO,
  EDIT_KILOETCONSO,
  CURRENT_KILOETCONSO
} from '../constants/kiloetconso'

export const getkiloetconsos = () => async (dispatch) => {
  dispatch({ type: GET_ALL_VALUES_LOAD })
  try {
    const res = await axios.get('/api/kiloetconso/getkiloetconso')
    dispatch({ type: GET_ALL_VALUES_SUCCESS, payload: res.data.kiloetconsos })
  } catch (error) {
    console.log(error)
    
  }
}



export const currentt = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem('token'),
      },
    }
    let result = await axios.get('/api/kiloetconso/currentt', config)
    dispatch({ type: CURRENT_KILOETCONSO, payload: result.data })
  } catch (error) {
    console.log(error);
  }
}



export const addkiloetconso = (kiloetconsoss) => async (dispatch) => {
   const config = {
    headers: {
      authorization: localStorage.getItem('token'),
    },
  }
  try {
    const res = await axios.post('/api/kiloetconso/addkiloetconso', kiloetconsoss, config)
    dispatch({ type: ADD_KILOETCONSO, payload: res.data })
    dispatch(getkiloetconsos())
  } catch (error) {
    console.log(error);
  }
}


export const getonekiloetconso = (id) => async (dispatch) => {
  
  try {
    const res = await axios.get(`/api/kiloetconso/${id}`)
    dispatch({ type: GET_KILOETCONSO, payload: res.data.response })
    
  } catch (error) {
    console.log(error)
   
  }
}



export const deletekiloetconso= (id) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem('token'),
    },
  }
  try {
    const res = await axios.delete(`/api/kiloetconso/deletekiloetconso/${id}`, config)
    dispatch({ type: DELETE_KILOETCONSO, payload: res.data })
    dispatch(getkiloetconsos())
  } catch (error) {
    console.log(error)
    
  }
}



export const editkiloetconso = (id, kiloetconso) => async (dispatch) => {
   const config = {
    headers: {
      authorization: localStorage.getItem('token'),
    },
  }
  try {
   
    const res =  await axios.put(`/api/kiloetconso/editkiloetconso/${id}`, kiloetconso, config)
     
     dispatch({ type: EDIT_KILOETCONSO, payload: res.data })
   dispatch(getkiloetconsos())
  }
    
    
   catch (error) {
     console.log(error)
    
  }
};
       