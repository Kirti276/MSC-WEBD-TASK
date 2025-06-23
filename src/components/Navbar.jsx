import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import DarkModeToggle from "./DarkModeToggle";
import { FaSignOutAlt } from 'react-icons/fa';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    // App will auto-redirect to login
  };

  const activeLink = "text-blue-500 dark:text-blue-400";
  const inactiveLink = "hover:text-blue-500 dark:hover:text-blue-400 transition-colors";

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-md">
      <nav className="container mx-auto flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-2">
          <span className="font-bold text-xl text-blue-600 dark:text-blue-400">Student Portal</span>
        </div>
        <div className="hidden md:flex items-center gap-6 font-medium text-gray-700 dark:text-gray-300">
          <NavLink to="/" className={({isActive}) => isActive ? activeLink : inactiveLink}>Home</NavLink>
          <NavLink to="/users" className={({isActive}) => isActive ? activeLink : inactiveLink}>Users</NavLink>
          <NavLink to="/dashboard" className={({isActive}) => isActive ? activeLink : inactiveLink}>Dashboard</NavLink>
        </div>
        <div className="flex items-center gap-4">
          <DarkModeToggle />
          <div className="flex items-center gap-3">
             <span className="font-semibold">{user.name}</span>
             <button onClick={handleLogout} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition" title="Logout">
               <FaSignOutAlt />
             </button>
          </div>
        </div>
      </nav>
    </header>
  );
}