import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div id="navbar" className="bg-blue-800 text-white py-4 px-8 flex justify-between items-center" style={{width:"98vw"}}>
      <div className="font-bold text-xl">
        Shopify Zone
      </div>
      <div className="flex space-x-4">
        <Link to='/' className="hover:text-gray-300">
          <button className="hover:bg-gray-700 px-4 py-2 rounded-md">Home</button>
        </Link>
        <Link to='/categories' className="hover:text-gray-300">
          <button className="hover:bg-gray-700 px-4 py-2 rounded-md">Categories</button>
        </Link>
        <Link to='/about' className="hover:text-gray-300">
          <button className="hover:bg-gray-700 px-4 py-2 rounded-md">About Us</button>
        </Link>
        <Link to='/payment' className="hover:text-gray-300">
          <button className="hover:bg-gray-700 px-4 py-2 rounded-md">Cart</button>
        </Link>
      </div>
    </div>
  );
}
