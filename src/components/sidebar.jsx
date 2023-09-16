import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const sidebar = () => {
  return (
    <div>sidebar
        <SidebarLinks />
    </div>
  )
}

const SidebarRoute = ({ to, title, icon }) => {
    return (
      <li>
        <NavLink
          to={to}
          className={({ isActive }) =>
            isActive
              ? 'sidebar-route border-t-2 border-b-2 font-extrabold border-white text-white'
              : 'sidebar-route font-bold text-gray-900 hover:text-black hover:bg-green-700'
          }
        >
          <div className='flex items-center'>
            <i className={icon} />
            <span className='text-sm  ml-2'>{title}</span>
          </div>
        </NavLink>
      </li>
    );
  };

  const SidebarLinks = () => {
    return (
      <ul className='mt-12'>
        <SidebarRoute to='' title='Inicio' icon='fas fa-home' />
        
        <SidebarRoute to='/usuarios' title='Perritos' icon='fas fa-user-friends' />
        
        <SidebarRoute to='/proyectos' title='Vacunas' icon='fas fa-tasks' />
        
        {/* <Logout /> */}
      </ul>
    );
  };

export default sidebar