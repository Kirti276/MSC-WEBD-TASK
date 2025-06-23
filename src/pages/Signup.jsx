import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    // No backend, just redirect to login
    if (!form.name || !form.email || !form.password) {
      setError("All fields are required.");
      return;
    }
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row w-full max-w-4xl bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Left Side - Brand/Info */}
        <div className="w-full md:w-1/2 p-8 md:p-12 text-white bg-gradient-to-br from-purple-600 to-blue-600 flex flex-col justify-center items-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-4">Student Portal</h1>
            <p className="text-lg">Create your account to get started!</p>
          </motion.div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Sign Up</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Create your free account</p>

          <form onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative mb-4" role="alert">
                {error}
              </div>
            )}
            <div className="relative mb-6">
              <FaUser className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="w-full pl-10 pr-4 py-3 bg-gray-100 dark:bg-gray-700 border-2 border-transparent focus:border-purple-500 focus:bg-white dark:focus:bg-gray-600 rounded-lg outline-none transition"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="relative mb-6">
              <FaEnvelope className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full pl-10 pr-4 py-3 bg-gray-100 dark:bg-gray-700 border-2 border-transparent focus:border-purple-500 focus:bg-white dark:focus:bg-gray-600 rounded-lg outline-none transition"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="relative mb-6">
              <FaLock className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full pl-10 pr-4 py-3 bg-gray-100 dark:bg-gray-700 border-2 border-transparent focus:border-purple-500 focus:bg-white dark:focus:bg-gray-600 rounded-lg outline-none transition"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-3 rounded-lg hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:focus:ring-blue-800 transform hover:scale-105 transition-transform duration-300"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-6 text-center">
            <span className="text-gray-600 dark:text-gray-400">Already have an account?</span>{" "}
            <Link to="/login" className="text-purple-500 hover:underline font-semibold">
              Login
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}