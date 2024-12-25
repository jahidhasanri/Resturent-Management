import React, { useContext, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import './header.css';

const Navbar = () => {
  // State to toggle the menu visibility on small devices
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const { user, handleSingOut, setUser } = useContext(AuthContext);
  const navigate= useNavigate();

  // Logout function
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

  // Function to toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.className = newTheme; // Update the root element's class
    localStorage.setItem("theme", newTheme); // Save the theme to localStorage
  };

  return (
    <div className="bg-base-300 px-10 w-full fixed top-0 z-50  transition-colors duration-300">
      <ToastContainer></ToastContainer>
      <div className="md:flex justify-between items-center">
        {/* Navbar Title */}
        <div className="flex md:gap-7 items-center">
          <img className="w-28 h-28" src="/logo1.png" alt="Logo" />
          <button
            onClick={toggleTheme}
            className="btn btn-sm btn-primary"
          >
            Switch to {theme === "light" ? "Dark" : "Light"} Mode
          </button>
        </div>

        {/* Navbar Links (Desktop and Tablet View) */}
        <div className="hidden lg:flex">
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
        <div className="mt-2 text-center lg:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            <IoMenu />
          </button>
        </div>

        {/* Theme Toggle and Profile Section */}
        <div className="flex justify-around gap-28  items-center md:gap-4">
          {/* Theme Toggle Button */}
          

          {/* Logout or Login Button */}
          <div>
            {user ? (
              <NavLink onClick={handleLogout} to="/login" className="btn">
                Logout
              </NavLink>
            ) : (
              <NavLink to="/login" className="btn">
                Login
              </NavLink>
            )}
          </div>

          {/* Profile Dropdown */}
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-14 rounded-full">
                  <img alt="Profile Avatar" src={user?.photoURL} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/myfood" className="justify-between">
                    My Foods
                  </Link>
                </li>
                <li>
                  <Link to="/addfood">Add Food</Link>
                </li>
                <li>
                  <Link to="/myorders">My Orders</Link>
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      {/* Mobile Menu (Visible when isMenuOpen is true) */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4">
          <NavLink className="text-xl font-semibold block mb-4" to="/">
            Home
          </NavLink>
          <NavLink className="text-xl font-semibold block mb-4" to="/allfoods">
            All Foods
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
