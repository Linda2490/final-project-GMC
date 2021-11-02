import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getdrivers } from '../../redux/actions/driver'
import OneDriverr from './OneDriverr'
const Alldrivers = () => {
  const dispatch = useDispatch()
  const drivers = useSelector((state) => state.driverReducer.drivers)
  const load = useSelector((state) => state.driverReducer.load)
  
  useEffect(() => {

      dispatch(getdrivers())
    
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
        ) :drivers && drivers.length===0? <h2>nothing to show </h2>: 
      (Array.isArray(drivers) && drivers.filter((el) => el.role==="driver").map((el) =>  
        <OneDriverr key={el._id} rr={el} /> ))}
     </div>
    </div>
  
  )}

export default Alldrivers
