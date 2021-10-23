import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../redux/actions/driver'
import './Navbar.css'
const Navbar = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector((state) => state.driverReducer.isAuth)
  return (
    <div>
      <ul className="ok">
        <li className="ok1">
          <Link to="/">Bienvenue</Link>
        </li>
        <li className="ok1"><Link to="/alldrivers">conducteurs</Link></li>
        <li className="ok1"><Link to="/allcars">vehicules</Link></li>
        {isAuth ? (
          <li className="ok1" onClick={() => dispatch(logout())}>
            <Link to="/" >QUITTER</Link>
          </li>
        ) : (
          <li className="ok1">
            <Link to="/login">s'identifier</Link>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Navbar
