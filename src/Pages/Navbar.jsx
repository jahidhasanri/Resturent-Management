import React, { useContext, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import './header.css'

const Navbar = () => {
  // State to toggle the menu visibility on small devices
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {user,handleSingOut, setUser}=useContext(AuthContext)
 
  const handleLogout = (e) => {
    e.preventDefault();
    handleSingOut()
      .then(() => {
        setUser(null);
        toast.success("Logout successful!");
        setTimeout(() => navigate("/login"), 2000);
      })
      .catch((error) => {
        console.error(error);
        toast.error(`Logout failed: ${error.message}`);
      });
  };


  // Function to toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-base-300 px-10 w-full">
        <ToastContainer></ToastContainer>
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
        <div className="text-right flex-none gap-2 flex">
            <div>
                {
                    user?
                    <NavLink onClick={handleLogout} to='/login' className='btn'>logout</NavLink>
                    :
                    <NavLink to='/login' className='btn'>login</NavLink>
                }
            </div>
          {/* Profile Dropdown */}
          {
            user? 
            <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-14  rounded-full">
                <img
                  alt="Profile Avatar"
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm  dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                My Foods
                 
                </a>
              </li>
              <li>
                <NavLink to='/addfood'>Add food</NavLink>
              </li>
              <li>
                <a>My Orders</a>
              </li>
            </ul>
          </div>
          :
          ''
          }
        </div>
      </div>

      {/* Mobile Menu (Visible when isMenuOpen is true) */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4">
          <NavLink className="text-xl font-semibold block mb-4" to="/">
            Home
          </NavLink>
          <NavLink className="text-xl font-semibold block mb-4" to="/allfoods">
           All Food
          </NavLink>
          <NavLink className="text-xl font-semibold block mb-4" to="/gallery">
          Gallery
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
