import React, { useState, useEffect} from "react"
import { Button, Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import {useDispatch,useSelector} from "react-redux"
import { editkiloetconso } from "../../redux/actions/kiloetconso";
import { toggleTrue } from "../../redux/actions/driver";

function Editkiloetconso() {
    
    const [kiloetconso, setKiloetconso] = useState({
    mission: '',
    kilometrage: '',
    consommation: '',
    vehicule: '',
    date: '',
  })
    const kiloetconsoss = useSelector(
    (state) => state.kiloetconsoReducer.kiloetconsoss,
  )
    const edit = useSelector((state) => state.editReducer.edit)
    const dispatch = useDispatch();
    useEffect(() => {
     if (edit) { setKiloetconso (kiloetconsoss) }
  }, [kiloetconsoss, edit])
    
     const handlekiloetconso = () => {
    if (edit) {
        dispatch(toggleTrue())
       dispatch(editkiloetconso(kiloetconsoss._id, kiloetconso))
       
    } 
  }
     const handleChange = (e) => {
    e.preventDefault()
    setKiloetconso({ ...kiloetconso, [e.target.name]: e.target.value })
  }

    return (
         <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Form>
        <Form.Field>
          <label>mission</label>
          <input
            value={kiloetconso.mission}
            placeholder="inserer mission"
            style = {{color:'beige'}}
            name="mission"
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>kilometrage</label>
          <input
            value={kiloetconso.kilometrage}
            placeholder="insrer kilometrage"
            name="kilometrage"
            style = {{color:'beige'}}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>consommation</label>
          <input
            value={kiloetconso.consommation}
            placeholder="insrer consommation"
            name="consommation"
            style = {{color:'beige'}}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>vehicule</label>
          <input
            value={kiloetconso.vehicule}
            placeholder="insrer vehicule"
            name="vehicule"
            style = {{color:'beige'}}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>date</label>
          <input
            value={kiloetconso.date}
            placeholder="insrer date"
            name="date"
            style = {{color:'beige'}}
            onChange={handleChange}
          />
        </Form.Field>
    
        
        <Link to="/kiloetconso">
          <Button type="submit" onClick={handlekiloetconso}>
            modifier
          </Button>
        </Link>
      </Form>
    </div>
  )

}
       

export default Editkiloetconso