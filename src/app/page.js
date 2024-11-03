"use client"

import React, { useState } from 'react';
import ClientLandingPage from './components/ClientLandingPage';

export default function SignIn() {
  const [selectedUser, setSelectedUser] = useState(null); // to track which button was clicked

  if (selectedUser === 'client') {
    // Render ClientLandingPage if client button is clicked
    return <ClientLandingPage />;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md rounded-lg shadow-lg p-6 bg-gray-800 text-white mx-4 sm:mx-0">
        <h2 className="text-lg font-semibold text-center mb-6">Sign in to your account</h2>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Your email</label>
          <input 
            id="email" 
            type="email" 
            placeholder="name@company.com" 
            className="w-full p-3 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2">Password</label>
          <input 
            id="password" 
            type="password" 
            placeholder="••••••••••" 
            className="w-full p-3 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Options */}
        <div className="flex items-center justify-between mb-6">
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox bg-gray-700 border-0 focus:ring-0"/>
            <span className="ml-2">Remember me</span>
          </label>
          <a href="#" className="text-blue-500 hover:text-blue-400">Forgot password?</a>
        </div>

        {/* Sign in Buttons */}
        <div className="space-y-4">
          <button 
            onClick={() => setSelectedUser('client')} // Set selectedUser to 'client' when this button is clicked
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Client
          </button>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline">
            Technician
          </button>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline">
            Admin
          </button>
        </div>
      </div>
    </div>
  );
}
