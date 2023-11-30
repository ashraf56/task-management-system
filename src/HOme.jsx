/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const HOme = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content bg-slate-50">
   <Outlet/>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side bg-[#000000] text-white">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <h1 className='text-center font-bold text-xl pt-10'>Task managment </h1>
    <ul className="menu menu-vertical p-4 items-center text-lg w-30 md:w-60 min-h-full  ">
      
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