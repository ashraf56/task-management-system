/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
const HOme = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content bg-slate-50">
          <div className='text-center'>
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Menu</label>
          </div>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu menu-vertical p-4  bg-[#000000]  text-white items-center  w-30 md:w-52 min-h-full  ">
            <h1 className='text-center font-bold text-xl py-10'>TaskMaster </h1>
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