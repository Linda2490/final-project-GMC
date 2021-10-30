import React, { useEffect, useState } from 'react'
import './Kiloetconso.css'
import { useDispatch, useSelector } from 'react-redux'
import {
  addkiloetconso,
  deletekiloetconso,
  getkiloetconsos,
  
} from '../../redux/actions/kiloetconso'
import Onekiloetconso from './Onekiloetconso'
import { Link } from 'react-router-dom'


const Kiloetconso = () => {
  const dispatch = useDispatch()
  const kiloetconsos = useSelector(
    (state) => state.kiloetconsoReducer.kiloetconsos
  )
  const load = useSelector((state) => state.kiloetconsoReducer.load)
  useEffect(() => {
    dispatch(getkiloetconsos())
  }, [dispatch])
  console.log(kiloetconsos)

  const kiloetconsoss = useSelector(
    (state) => state.kiloetconsoReducer.kiloetconsoss,
  )
  const [kiloetconso, setKiloetconso] = useState({
    mission: '',
    kilometrage: '',
    consommation: '',
    vehicule: '',
    date: '',
  })
  
  useEffect(() => {
    setKiloetconso(kiloetconsoss)
  }, [kiloetconsoss])

  const handlevalue = () => {
    dispatch(addkiloetconso(kiloetconso))
    setKiloetconso('')
  }

  const handleChange = (e) => {
    e.preventDefault()
    setKiloetconso({ ...kiloetconso, [e.target.name]: e.target.value })
  }
  return (
    <div id='kiloetconso'>
      <section class="containerr">
        <h1 align="center">Kilometrage & Consommation</h1>

        <form>
          <table class="table">
            <thead>
              <tr class="table-active">
                <th style={{ color: ' grey' }}>mission</th>
                <th style={{ color: ' grey' }}>kilometrage(km)</th>
                <th style={{ color: ' grey' }}>consommation(litres)</th>
                <th style={{ color: ' grey' }}>vehicule (ref)</th>
                <th style={{ color: ' grey' }}>date</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  {' '}
                  <input
                    type="text"
                    name="mission"
                    placeholder="mission"
                    onChange={handleChange}
                    style={{ color: 'beige' }}
                    required
                  ></input>
                </td>
                <td>
                  {' '}
                  <input
                    type="Number"
                    name="kilometrage"
                    placeholder="kilometrage"
                    onChange={handleChange}
                    style={{ color: 'beige' }}
                    required
                  ></input>
                </td>
                <td>
                  {' '}
                  <input
                    type="Number"
                    name="consommation"
                    placeholder="consommation"
                    onChange={handleChange}
                    style={{ color: 'beige' }}
                    required
                  ></input>
                </td>
                <td>
                  {' '}
                  <input
                    type="text"
                    name="vehicule"
                    placeholder="vehicule"
                    onChange={handleChange}
                    style={{ color: 'beige' }}
                    required
                  ></input>
                </td>

                <td>
                  {' '}
                  <input
                    type="date"
                    name="date"
                    // style={{ color: '#7b7a7a' }}
                    onChange={handleChange}
                    style={{ color: 'beige' }}
                    required
                  />
                </td>
                <td>
                  <Link to="/kiloetconso">
                    <input
                      type="submit"
                      class="btn btn-success"
                      id="add"
                      value="Ajouter "
                      onClick={handlevalue}
                    />
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </section>
      <div>
        <h1 align="center">Liste des valeurs</h1>

        {load ? (
          <h2>loading</h2>
        ) : kiloetconsos && kiloetconsos.length === 0 ? (
          <h2>nothing to show </h2>
        ) : (
          kiloetconsos.map((el) => <Onekiloetconso key={el._id} r={el} />)
        )}

        <div align="center">
          <Link to={`/editkiloetconso/${kiloetconso._id}`} >
          <input
            type="submit"
            class="btn btn-success"
            id="add"
            value="Modifier "
            
          />
          </Link>
          
          
          
          <input
            type="submit"
            class="btn btn-danger"
            value="Supprimer "
            onClick={() => dispatch(deletekiloetconso(kiloetconsoss._id))}
          />
          </div>
        </div>
      </div>
   
  )
  
}

export default Kiloetconso
