import React from "react";
import { FaBars, FaBell } from "react-icons/fa";
import { MdOutlineArrowForwardIos, MdPassword } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { BsListCheck } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import Avatar from "./../assets/avatar.jpg";

const Navbar = ({ sidebar, setSidebar }) => {
  return (
    <nav className="shadow-sm flex justify-between items-center fixed top-0 w-full bg-white z-10">
      <div
        onClick={setSidebar}
        className="text-blue-900 w-fit p-2 cursor-pointer"
      >
        <FaBars size={24} />
      </div>
      <div className="flex items-center p-2 gap-3">
        <div className="text-blue-900 w-fit relative cursor-pointer">
          <FaBell />
          <div className="w-2 h-2 absolute top-[-1px] left-0 rounded-full bg-red-700" />
        </div>

        <div className="dropdown dropdown-end">
          <label tabIndex={0}>
            <div className="flex items-center gap-3 cursor-pointer sm:border-l pl-3">
              <p className="hidden sm:block text-xs font-medium leading-tight">
                Ryhman
              </p>
              <div className="w-10 h-10 rounded-full">
                <img
                  src={Avatar}
                  alt="avatar"
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>
            </div>
          </label>
          <div
            tabIndex={0}
            className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-80 mt-4"
          >
            <div className="flex items-center gap-3 border-b py-2">
              <img
                src={Avatar}
                alt="avatar"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h1 className="text-sm font-medium leading-tight">Juliane Swift</h1>
                <p className="text-xs font-light leading-tight">admin</p>
                <Link to={'/profile'} className="text-xs font-medium mt-1 cursor-pointer border-b border-white hover:border-gray-400 transition duration-300 flex items-center gap-5">See Profile <MdOutlineArrowForwardIos /></Link>
                
              </div>
            </div>
            <ul className="py-2">
              <NavLink to={'/project'} className={`p-2 rounded-lg text-base my-2 flex items-center gap-3 hover:bg-blue-900 hover:text-white`}>
                <MdPassword size={20} />
                Forgot Password
              </NavLink>
              <NavLink className={`p-2 rounded-lg text-base my-2 flex items-center gap-3 hover:bg-blue-900 hover:text-white`}>
                <BsListCheck size={20} />
                Activity Log
              </NavLink>
              <NavLink to={'/'} className={`p-2 rounded-lg text-base my-2 flex items-center gap-3 hover:bg-blue-900 hover:text-white`}>
                <BiLogOut size={20} />
                Logout
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
