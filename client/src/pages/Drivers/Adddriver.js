import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getdrivers } from '../../redux/actions/driver'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Onedriver from './Onedriver'
import { toggleFalse } from '../../redux/actions/driver'
const Adddriver = () => {
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
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
        }}
      >
        <Button inverted color="blue" onClick={() => dispatch(toggleFalse())}>
          <Link to="/add"> Ajouter </Link>
        </Button>
        {load ? (
          <h2>loading</h2>
        ) : drivers && drivers.length === 0 ? (
          <h2>nothing to show </h2>
        ) : (
          drivers
            .filter((el) => el.role === 'driver')
            .map((el) => <Onedriver key={el._id} r={el} />)
        )}
      </div>
    </div>
  )
}

export default Adddriver
