import React, { useEffect, useState } from 'react'
import { Button, Form } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'
import { editProfile } from '../redux/actions/driver'

const Editprofile = () => {
  const [driver, setDriver] = useState({ name: '', email: '' })
  const driverr = useSelector((state) => state.driverReducer.driverr)
  const edit = useSelector((state) => state.editReducer.edit)
  const dispatch = useDispatch()
  useEffect(() => {
     if (edit) { setDriver (driverr) }
  }, [driverr, edit])
  
  
  
  
  const handleprofile = () => {
    if (edit) {
       dispatch(editProfile(driverr._id, driver))
      
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
            name="email"
            style = {{color:'beige'}}
            onChange={handleChange}
          />
        </Form.Field>
        
        <Link to="/profile">
          <Button type="submit" onClick={handleprofile}>
            modifier
          </Button>
        </Link>
      </Form>
    </div>
  )
}

export default Editprofile
