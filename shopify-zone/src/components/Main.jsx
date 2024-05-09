import React from "react";
import Cloth from "./Cloth";

const Main = () => {
  const clothesData = [
    { imgLink: "https://images.squarespace-cdn.com/content/v1/59251f1cf5e2312a3e6144a5/1693062131249-HOMSH0M424LYHTDVNWBA/tshirt+website+back+72.png", price: "100", category: "t-shirt", rating: "3", name: "Black T-shirt" },
    { imgLink: "https://images.squarespace-cdn.com/content/v1/59251f1cf5e2312a3e6144a5/1693062131249-HOMSH0M424LYHTDVNWBA/tshirt+website+back+72.png", price: "100", category: "t-shirt", rating: "3", name: "Black T-shirt" },
    { imgLink: "https://images.squarespace-cdn.com/content/v1/59251f1cf5e2312a3e6144a5/1693062131249-HOMSH0M424LYHTDVNWBA/tshirt+website+back+72.png", price: "100", category: "t-shirt", rating: "3", name: "Black T-shirt" },
    { imgLink: "https://images.squarespace-cdn.com/content/v1/59251f1cf5e2312a3e6144a5/1693062131249-HOMSH0M424LYHTDVNWBA/tshirt+website+back+72.png", price: "100", category: "t-shirt", rating: "3", name: "Black T-shirt" },
    { imgLink: "https://images.squarespace-cdn.com/content/v1/59251f1cf5e2312a3e6144a5/1693062131249-HOMSH0M424LYHTDVNWBA/tshirt+website+back+72.png", price: "100", category: "t-shirt", rating: "3", name: "Black T-shirt" },
    { imgLink: "https://images.squarespace-cdn.com/content/v1/59251f1cf5e2312a3e6144a5/1693062131249-HOMSH0M424LYHTDVNWBA/tshirt+website+back+72.png", price: "100", category: "t-shirt", rating: "3", name: "Black T-shirt" },
    { imgLink: "https://images.squarespace-cdn.com/content/v1/59251f1cf5e2312a3e6144a5/1693062131249-HOMSH0M424LYHTDVNWBA/tshirt+website+back+72.png", price: "100", category: "t-shirt", rating: "3", name: "Black T-shirt" },
    { imgLink: "https://images.squarespace-cdn.com/content/v1/59251f1cf5e2312a3e6144a5/1693062131249-HOMSH0M424LYHTDVNWBA/tshirt+website+back+72.png", price: "100", category: "t-shirt", rating: "3", name: "Black T-shirt" },
    { imgLink: "https://images.squarespace-cdn.com/content/v1/59251f1cf5e2312a3e6144a5/1693062131249-HOMSH0M424LYHTDVNWBA/tshirt+website+back+72.png", price: "100", category: "t-shirt", rating: "3", name: "Black T-shirt" },
    { imgLink: "https://images.squarespace-cdn.com/content/v1/59251f1cf5e2312a3e6144a5/1693062131249-HOMSH0M424LYHTDVNWBA/tshirt+website+back+72.png", price: "100", category: "t-shirt", rating: "3", name: "Black T-shirt" },
    { imgLink: "https://images.squarespace-cdn.com/content/v1/59251f1cf5e2312a3e6144a5/1693062131249-HOMSH0M424LYHTDVNWBA/tshirt+website+back+72.png", price: "100", category: "t-shirt", rating: "3", name: "Black T-shirt" },
    { imgLink: "https://images.squarespace-cdn.com/content/v1/59251f1cf5e2312a3e6144a5/1693062131249-HOMSH0M424LYHTDVNWBA/tshirt+website+back+72.png", price: "100", category: "t-shirt", rating: "3", name: "Black T-shirt" },
    
  ];

  return (
    <div className="p-4">
      <div className="flex items-center mb-4">
        <input type="text" placeholder="Search" className="mr-4 p-2 border border-gray-300 rounded-lg" />
        <div className="flex space-x-4">
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">T-Shirt</button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">Trousers</button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">Skirt</button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">Dress</button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">Suit</button>
        </div>
      </div>
      
      <marquee behavior="scroll" direction="left" className="text-red-500" scrollamount="10">
        Check out our amazing deals on T-shirts!
      </marquee>

      
      
      
      <div className="py-2 bg-gray-100 mb-4">
        <p className="text-lg font-semibold text-center">Featured Items</p>
        <p className="text-sm text-center">Explore our best-selling products</p>
      </div>
      
      <marquee behavior="scroll" direction="right" className="text-green-500" scrollamount="8">
        Limited time offer: Buy one, get one free on all trousers!
      </marquee>

      <div className="grid grid-cols-4 gap-4 mb-4">
        {clothesData.map((cloth, index) => (
          <Cloth key={index} {...cloth} />
        ))}
      </div>
      
      <div className="py-2 bg-gray-100 mb-4">
        <p className="text-lg font-semibold text-center">New Arrivals</p>
        <p className="text-sm text-center">Discover the latest trends</p>
      </div>
      
      <marquee behavior="scroll" direction="left" className="text-blue-500" scrollamount="12">
        Discover our new collection of skirts - perfect for summer!
      </marquee>

      
      
    </div>
  );
};

export default Main;
