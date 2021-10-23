import React, { useEffect, useState } from 'react'
import { Button, Form } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import { addCar, editCar} from '../../redux/actions/car'
import { Link } from 'react-router-dom'

const Addc = () => {
  const [car, setCar] = useState({ Brand: '', reference: '', drived_by: [] })
  const carr = useSelector((state) => state.carReducer.carr)
  const edit = useSelector((state) => state.editReducer.edit)
  const dispatch = useDispatch()
  useEffect(() => {
    edit ? setCar(carr) : setCar({ Brand: '', reference: '', drived_by: [] })
  }, [carr, edit])

  const handlecar = () => {
    if (edit) {
       dispatch(editCar(carr._id, car))
      
    } else {
     dispatch(addCar(car))
    }
  }

  const handleChange = (e) => {
    e.preventDefault()
    setCar({ ...car, [e.target.name]: e.target.value })
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Form>
        <Form.Field>
          <label>vehicule</label>
          <input
            value={car.Brand}
            placeholder="inserer type de vehicule"
            style = {{color:'beige'}}
            name="Brand"
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>reference</label>
          <input
            value={car.reference}
            placeholder="insrer reference"
            style = {{color:'beige'}}
            name="reference"
            onChange={handleChange}
          />
        </Form.Field>
        
        <Form.Field>
          <label>conduit par </label>
          <input
            value={car.drived_by}
            placeholder="conduit par"
            style = {{color:'beige'}}
            name="drived_by"
            onChange={handleChange}
          />
        </Form.Field>
        <Link to="/addcars">
          <Button type="submit" onClick={handlecar}>
            {edit ? 'modifier' : 'Ajouter'}
          </Button>
        </Link>
      </Form>
    </div>
  )
}

export default Addc
