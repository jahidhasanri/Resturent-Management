import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  // State to toggle the menu visibility on small devices
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-base-300 px-10 w-full">
      <div className="flex justify-between items-center">
        {/* Navbar Title */}
        <div>
          {/* <h1 className="text-2xl font-bold">Restaurant Management Website</h1> */}
          <img className="w-28 h-28" src="/public/logo1.png" alt="" />
        </div>

        {/* Navbar Links (Desktop and Tablet View) */}
        <div className="hidden  lg:flex">
          <NavLink className="text-xl font-semibold mr-6" to="/">
            Home
          </NavLink>
          <NavLink className="text-xl font-semibold mr-6" to="/allfoods">
          All Foods
          </NavLink>
          <NavLink className="text-xl font-semibold mr-6" to="/gallery">
            Gallery
          </NavLink>
        </div>

        {/* Hamburger Menu Icon for Small Devices */}
        <div className="mt-2 lg:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            <IoMenu />
          </button>
        </div>

        {/* Search & Profile (Visible in all devices) */}
        <div className="text-right flex-none gap-2">
          {/* Profile Dropdown */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Profile Avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm  dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                 
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Visible when isMenuOpen is true) */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4">
          <NavLink className="text-xl font-semibold block mb-4" to="/">
            Home
          </NavLink>
          <NavLink className="text-xl font-semibold block mb-4" to="/allequipment">
            All Sports Equipment
          </NavLink>
          <NavLink className="text-xl font-semibold block mb-4" to="/addequipment">
            Add Equipment
          </NavLink>
          <NavLink className="text-xl font-semibold block" to="/myequipment">
            My Equipment List
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
