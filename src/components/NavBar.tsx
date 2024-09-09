import React from 'react'
import ListTools from './ListTools'

const NavBar = () => {
  return (
    <div className="navbar">
        <div className="logo">
             VEEDO
        </div>
        <div className="space">
        <a href="">Resources</a>
        <ListTools />
        </div>

    </div>
  )
}

export default NavBar