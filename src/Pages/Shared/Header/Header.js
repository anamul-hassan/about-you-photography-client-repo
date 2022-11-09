import React from 'react';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../Assets/image/logo.png';
import { AuthContext } from '../../../Contexts/UserContext';

const Header = () => {
  const { user } = useContext(AuthContext);
  // console.log(user?.photoURL);
  return (
    <nav
      style={{
        background: 'linear-gradient(90deg, #295270 0%,  #524175 100%)',
      }}
      id="header"
      className="fixed w-full z-30 top-0 text-[#e8e7e2]"
    >
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
          <Link to="/home">
            <img className="w-24" src={logo} alt="" />
          </Link>
        </div>
        <div className="block lg:hidden pr-4">
          <button
            id="nav-toggle"
            className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            <svg
              className="fill-current h-6 w-6"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <NavLink className="inline-block py-2 px-4 text-[#e8e7e2] font-bold no-underline">
                {user?.displayName}
              </NavLink>
            </li>
            <li className="mr-3">
              <NavLink
                to="/my_review"
                className="inline-block   text-[#e8e7e2] hover:text-underline py-2 px-4"
              >
                My Review
              </NavLink>
            </li>
            <li className="mr-3">
              <NavLink
                to="add_service"
                className="inline-block text-[#e8e7e2] hover:text-underline py-2 px-4"
              >
                Add Service
              </NavLink>
            </li>
          </ul>
          <button
            id="navAction"
            className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            Action
          </button>
        </div>
      </div>
      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
  );
};

export default Header;
