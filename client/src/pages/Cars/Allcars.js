import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getcars } from '../../redux/actions/car'
import OneCarr from './OneCarr'
import carReducer from '../../redux/reducer/car'
const Allcars = () => {
  const dispatch = useDispatch()
  const cars = useSelector((state) => state.carReducer.cars)
  const load = useSelector((state) => state.carReducer.load)
  
  useEffect(() => {

      dispatch(getcars())
    
  }, [dispatch])
  
  return (
    <div>
    <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
     {load ? (
          <h2>loading</h2>
        ) :cars && cars.length===0? <h2>nothing to show </h2>: 
      (Array.isArray(cars) && cars.map((el) =>  
        <OneCarr key={el._id} n={el} /> ))}
     
     </div>
    </div>
  
  )}

export default Allcars
