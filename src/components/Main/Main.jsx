import React from 'react'
import { Link } from 'react-router-dom'
import './Main.scss'

const Main = () => {
  return (
    <div className='nav'>
       <Link to="/" className='link'>Home</Link>
       <Link to="/favorite" className='link'>Favorite</Link>
    </div>
  )
}

export default Main