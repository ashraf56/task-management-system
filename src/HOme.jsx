/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const HOme = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
   <Outlet/>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu menu-vertical p-4  w-30 md:w-60 min-h-full bg-base-200 text-base-content">
  <li>
    <Link to={'/'}>Home</Link>
  </li>
  <li>
    <Link to={'/add'}>Add task</Link>
  </li>
  
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default HOme;