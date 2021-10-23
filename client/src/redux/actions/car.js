import axios from 'axios'
import { DELETE_CAR, EDIT_CAR, FAIL_CAR, GET_ALL_CARS_LOAD, GET_ALL_CARS_SUCCESS, GET_CAR } from '../constants/cars'



export const getcars = () => async (dispatch) => {
  dispatch({ type: GET_ALL_CARS_LOAD })
  try {
    const res = await axios.get('/api/car/getcars')
    dispatch({ type: GET_ALL_CARS_SUCCESS, payload: res.data.cars })
  } catch (error) {
    console.log(error)
    
  }
}


export const addCar = (carr) => async (dispatch) => {
   const config = {
    headers: {
      authorization: localStorage.getItem('token'),
    },
  }
  try {
    await axios.post('/api/car/addcar', carr, config)
    dispatch(getcars())
  } catch (error) {
    dispatch({ type: FAIL_CAR, payload: error.response.data.errors })
  }
}

export const getCar = (id) => async (dispatch) => {
  
  try {
    const res = await axios.get(`/api/car/${id}`)
    dispatch({ type: GET_CAR, payload: res.data.response })
    
  } catch (error) {
    console.log(error)
    dispatch({ type: FAIL_CAR, payload: error.response.data.errors })
  }
}


export const editCar = (id, car) => async (dispatch) => {
   const config = {
    headers: {
      authorization: localStorage.getItem('token'),
    },
  }
  try {
   
    const res =  await axios.put(`/api/car/editcar/${id}`, car, config)
     
     dispatch({ type: EDIT_CAR, payload: res.data })
   dispatch(getcars())
  }
  
    // .then((res) => {
    //   dispatch({ type: EDIT_CONTACT, payload: res.data.message });
    
    
   catch (error) {
     console.log(error)
    dispatch({ type: FAIL_CAR, payload: error.response.data.errors })
  }
};
             

export const deleteCar= (id) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem('token'),
    },
  }
  try {
    const res = await axios.delete(`/api/car/deletecar/${id}`, config)
    dispatch({ type: DELETE_CAR, payload: res.data })
    dispatch(getcars())
  } catch (error) {
    console.log(error)
    dispatch({ type: FAIL_CAR, payload: error.response.data.errors })
  }
}


