import React, { useEffect, useState } from 'react'
import { Button, Form } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import { addDriver, editDriver } from '../../redux/actions/driver'
import { Link } from 'react-router-dom'

const Add = () => {
  const [driver, setDriver] = useState({ name: '', email: '', password: '' })
  const driverr = useSelector((state) => state.driverReducer.driverr)
  const edit = useSelector((state) => state.editReducer.edit)
  const dispatch = useDispatch()
  useEffect(() => {
    edit ? setDriver(driverr) : setDriver({ name: '', email: '', password: '' })
  }, [driverr, edit])

  const handledrive = () => {
    if (edit) {
       dispatch(editDriver(driverr._id, driver))
      
    } else {
     dispatch(addDriver(driver))
    }
  }

  const handleChange = (e) => {
    e.preventDefault()
    setDriver({ ...driver, [e.target.name]: e.target.value })
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Form>
        <Form.Field>
          <label>Nom</label>
          <input
            value={driver.name}
            placeholder="inserer conducteur"
            style = {{color:'beige'}}
            name="name"
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input
            value={driver.email}
            placeholder="insrer email"
            style = {{color:'beige'}}
            name="email"
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>mot de passe </label>
          <input
            value={driver.password}
            placeholder="inserer mot de passe"
            style = {{color:'beige'}}
            name="password"
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>vehicule </label>
          <input
            value={driver.vehicule}
            placeholder="inserer vehicule"
            style = {{color:'beige'}}
            name="vehicule"
            onChange={handleChange}
          />
        </Form.Field>
        <Link to="/adddriver">
          <Button type="submit" onClick={handledrive}>
            {edit ? 'modifier' : 'Ajouter'}
          </Button>
        </Link>
      </Form>
    </div>
  )
}

export default Add
