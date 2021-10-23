import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getcars } from '../../redux/actions/car'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Onecar from './Onecar'

import {toggleFalse} from '../../redux/actions/driver';
const Addcars = () => {
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
       <Button inverted color="blue" onClick={() => dispatch(toggleFalse())}>
        <Link to="/addc"> Ajouter </Link>
      </Button>
     {load ? (
          <h2>loading</h2>
        ) :cars && cars.length===0? <h2>nothing to show </h2>: 
      (cars.map((el) =>  
        <Onecar key={el._id} r={el} /> ))}
     </div>
    </div>
  
  )}

export default Addcars
