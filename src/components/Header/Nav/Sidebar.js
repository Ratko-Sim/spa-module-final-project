import React from 'react'
import "./Sidebar.scss"
import { NavLink } from 'react-router-dom';
import { ImCancelCircle } from "react-icons/im";
import { useSelector, useDispatch } from "react-redux";
import { HideSidebar } from "../../../Redux/actions/SidebarAction";

function Sidebar() {
  const sidebar = useSelector((state) => state.sidebar)
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(HideSidebar())
  }
  return (
    <div className="Sidebar" id={sidebar ? "show-sidebar" : "hide-sidebar"}>
      <ul className="Sidebar-parent">
        <li className="Sidebar-item">
          <NavLink activeClassName='Active-page' to='/home'>
            home
          </NavLink>
        </li>
        <li className="Sidebar-item">
          <NavLink activeClassName='Active-page' to='/productlisting'>
            shop
          </NavLink>
        </li>

        <div className="Sidebar-X">
          <ImCancelCircle onClick={() => handleClick()} />
        </div>
      </ul>
    </div>
  )
}

export default Sidebar