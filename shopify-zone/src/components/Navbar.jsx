import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="bg-blue-900 p-4" style={{width:"98vw"}}>
        <div className="container flex justify-between items-center gap-96 ">
          <div className="text-white text-2xl font-bold">Shopify Zone</div>
          <div className="flex space-x-4">
            <a href="/" className="text-white hover:text-gray-400">
              Home
            </a>
            <a href="/cart" className="text-white hover:text-gray-400" style={{marginLeft:"50px"}}>
              My Cart
            </a>
            <a href="/products" className="text-white hover:text-gray-400" style={{marginLeft:"50px"}}>
              Products
            </a>
            <a href="/history" className="text-white hover:text-gray-400" style={{marginRight:"200px",marginLeft:"50px"}}>
              History
            </a>
            <div className="text-white text-xl font-bold">Username</div>
          </div>
        </div>
      </nav>
    </div>
  );
}
