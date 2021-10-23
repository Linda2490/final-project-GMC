import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleTrue } from '../../redux/actions/driver'
import { getonekiloetconso } from '../../redux/actions/kiloetconso'

const Onekiloetconso = ({r}) => {
 const dispatch = useDispatch()
    return (
         
        
        <form>
          <table class="table">
            <thead>
              <tr>
                <th scope="col" style={{ color: ' grey' }}>Select</th>
                <th scope="col" style={{ color: ' grey' }}>mission</th>
                <th scope="col" style={{ color: ' grey' }}>kilometrage(km)</th>
                <th scope="col" style={{ color: ' grey' }}>consommation(litres)</th>
                <th scope="col" style={{ color: ' grey' }}>vehicule (ref)</th>
                <th scope="col" style={{ color: ' grey' }}>date</th>
              </tr>
            </thead>

            <tr>
        
        
        
             <td>
                {' '}
                <input type="checkbox" name=""  onClick={() => {dispatch( getonekiloetconso(r._id));dispatch(toggleTrue())}}/>
              </td>
              <td>
                {' '}
                <p style = {{color:'beige'}}>{r.mission}</p>
              </td>
              <td>
                <p style = {{color:'beige'}}>{r.kilometrage}</p>
              </td>
              <td>
                {' '}
                <p style = {{color:'beige'}} >{r.consommation}</p>
              </td>
              <td>
                <p style = {{color:'beige'}}>{r.vehicule}</p>
              </td>
              <td>
                <p style = {{color:'beige'}}>{r.date}</p>
              </td>
        </tr>
          </table>
         </form>
    )
}

export default Onekiloetconso
