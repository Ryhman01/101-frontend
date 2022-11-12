import React, { useState } from "react";
import { FaReact, FaTimes } from "react-icons/fa";
import { MdDashboard, MdGroup, MdPaid } from "react-icons/md";
import { AiFillProject } from "react-icons/ai";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <Navbar sidebar={sidebar} setSidebar={() => setSidebar(!sidebar)} />
      <div
        className={`w-screen h-screen backdrop-blur-sm fixed z-50 top-0 ease-in-out duration-500 ${
          !sidebar ? "-translate-x-full" : "translate-x-0"
        }`}
      >
        <aside className="w-72 h-full bg-blue-900 top-0 ">
          <div className="relative w-full flex justify-end py-3 px-5">
            <div
              onClick={() => setSidebar(!sidebar)}
              className="w-fit cursor-pointer text-white absolute"
            >
              <FaTimes size={30} />
            </div>
          </div>
          <div className="h-40 flex justify-center items-center">
            <div className="w-fit text-white animate-spin cursor-pointer">
              <FaReact size={60} />
            </div>
          </div>
          <nav className="">
            <ul className="mx-5">
              <NavLink
                to={"/dashboard"}
                onClick={() => setSidebar(!sidebar)}
                className={({ isActive }) =>
                  isActive
                    ? "bg-white text-blue-900 flex items-center gap-3 p-2 rounded-lg transition-all duration-300"
                    : "text-white flex items-center gap-3 p-2 my-4 rounded-lg hover:bg-white hover:text-blue-900 focus:bg-white focus:text-blue-900 transition-all duration-300"
                }
              >
                <MdDashboard size={24} />
                <span className="text-lg">Dashboard</span>
              </NavLink>
              <NavLink
                to={"/users"}
                onClick={() => setSidebar(!sidebar)}
                className={({ isActive }) =>
                  isActive
                    ? "bg-white text-blue-900 flex items-center gap-3 p-2 rounded-lg transition-all duration-300"
                    : "text-white flex items-center gap-3 p-2 my-4 rounded-lg hover:bg-white hover:text-blue-900 focus:bg-white focus:text-blue-900 transition-all duration-300"
                }
              >
                <MdGroup size={24} />
                <span className="text-lg">Users</span>
              </NavLink>
              <NavLink
                to={"/projects"}
                onClick={() => setSidebar(!sidebar)}
                className={({ isActive }) =>
                  isActive
                    ? "bg-white text-blue-900 flex items-center gap-3 p-2 rounded-lg transition-all duration-300"
                    : "text-white flex items-center gap-3 p-2 my-4 rounded-lg hover:bg-white hover:text-blue-900 focus:bg-white focus:text-blue-900 transition-all duration-300"
                }
              >
                <AiFillProject size={24} />
                <span className="text-lg">Projects</span>
              </NavLink>
              <NavLink
                to={"/prices"}
                onClick={() => setSidebar(!sidebar)}
                className={({ isActive }) =>
                  isActive
                    ? "bg-white text-blue-900 flex items-center gap-3 p-2 rounded-lg transition-all duration-300"
                    : "text-white flex items-center gap-3 p-2 my-4 rounded-lg hover:bg-white hover:text-blue-900 focus:bg-white focus:text-blue-900 transition-all duration-300"
                }
              >
                <MdPaid size={24} />
                <span className="text-lg">Prices</span>
              </NavLink>
            </ul>
          </nav>
        </aside>
      </div>
    </>
  );
};

export default Sidebar;
