"use client"
import React from 'react';

export default function ClientLandingPage() {
  return (
    <div className="min-h-screen w-full bg-gray-100 p-4 2xl:p-2">
      {/* Header */}
      <header className="bg-gray-00 shadow-md p-4 flex justify-between items-center w-full">
        <div className="flex items-center">
          <img
            src="/profile-icon.png"
            alt="User Profile"
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <p className="text-sm">Welcome back,</p>
            <p className="text-md font-bold">SA-Martin Rono</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-700">
            <i className="fas fa-bell"></i>
          </button>
          <button className="text-gray-700">
            <i className="fas fa-ellipsis-v"></i>
          </button>
        </div>
      </header>

      {/* Main Grid Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 w-full">
        {/* Request */}
        <div className="bg-orange-500 text-white p-6 rounded-lg text-center w-1/3" style={{ flexBasis: '30%', width:'100%' }}>
          <i className="fas fa-plus text-2xl"></i>
          <p className="mt-2">Request</p>
        </div>
        
        {/* Work Order */}
        <div className="bg-gray-400 text-white p-6 rounded-lg text-center" style={{ flexBasis: '30%' }}>
          <i className="fas fa-check text-2xl"></i>
          <p className="mt-2">Work Order</p>
        </div>
        
        {/* Inspections */}
        <div className="bg-orange-500 text-white p-6 rounded-lg text-center" style={{ flexBasis: '30%' }}>
          <i className="fas fa-search text-2xl"></i>
          <p className="mt-2">Inspections</p>
        </div>
        
        {/* Assets */}
        <div className="bg-gray-400 text-white p-6 rounded-lg text-center" style={{ flexBasis: '30%' }}>
          <i className="fas fa-box text-2xl"></i>
          <p className="mt-2">Assets</p>
        </div>
        
        {/* Parts */}
        <div className="bg-orange-500 text-white p-6 rounded-lg text-center" style={{ flexBasis: '30%' }}>
          <i className="fas fa-tools text-2xl"></i>
          <p className="mt-2">Parts</p>
        </div>
        
        {/* Stakeholders */}
        <div className="bg-gray-400 text-white p-6 rounded-lg text-center" style={{ flexBasis: '30%' }}>
          <i className="fas fa-users text-2xl"></i>
          <p className="mt-2">Stakeholders</p>
        </div>
      </div>


      {/* My Tasks and Work */}
      <div className="mt-8 w-full">
        <h2 className="text-lg font-semibold mb-4">My tasks and work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {/* Approve Request */}
          <div className="bg-white shadow-md p-4 text-center rounded-lg">
            <p className="font-semibold">Approve</p>
            <p className="text-gray-500">Request</p>
            <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs mt-2 inline-block">
              2 New
            </span>
          </div>
          
          {/* Action Work Order */}
          <div className="bg-white shadow-md p-4 text-center rounded-lg">
            <p className="font-semibold">Action</p>
            <p className="text-gray-500">Work Order</p>
            <span className="bg-gray-300 text-black px-2 py-1 rounded-full text-xs mt-2 inline-block">
              0 New
            </span>
          </div>
          
          {/* Check Inspection */}
          <div className="bg-white shadow-md p-4 text-center rounded-lg">
            <p className="font-semibold">Check</p>
            <p className="text-gray-500">Inspection</p>
            <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs mt-2 inline-block">
              1 New
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
