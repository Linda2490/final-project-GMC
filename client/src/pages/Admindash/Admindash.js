import React from 'react'
import './Admindash.css'
import { Link } from 'react-router-dom'
const Admindash = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',
        height: '50 vh ',
      }}
    >
      <a
        className="btn"
        style={{
          fontSize: '1.5rem',
          padding: '1rem 3rem',
          color: ' #f4f4f4',
          textTransform: 'uppercase',
        }}
      >
        <Link to="adddriver">
          <h1 style={{ color: 'white' }}>gestion conducteurs</h1>
        </Link>
      </a>
      <a
        href="#"
        className="btn"
        style={{
          fontSize: '1.5rem',
          padding: '1rem 3rem',
          color: ' #f4f4f4',
          textTransform: 'uppercase',
        }}
      >
        <Link to="addcars">
          <h1 style={{ color: 'white' }}>gestion vehicules</h1>
        </Link>
      </a>
    </div>
  )
}

export default Admindash
