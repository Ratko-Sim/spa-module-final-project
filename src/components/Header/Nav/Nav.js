import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Nav.scss"

function Nav() {
  return (
    <div className="Nav-wrapper">
      <ul className="Nav-parent">
        <li className="Nav-item">
          <NavLink activeClassName='Active-page' to='/home'>
            home
          </NavLink>
        </li>
        <li className="Nav-item">
          <NavLink activeClassName='Active-page' to='/productlisting'>
            shop
          </NavLink>
        </li>
        <li className="Nav-item">
          LINK
        </li>
        <li className="Nav-item">
          LINK
        </li>
        <li className="Nav-item">
          LINK
        </li>
        <li className="Nav-item">
          LINK
        </li>
      </ul>
    </div>
  )
}

export default Nav
