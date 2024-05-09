import React from "react";

const Cloth = ({ imgLink, price, category, rating , name }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <svg
          key={i}
          className="w-6 h-6 fill-current text-yellow-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 0a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S0 15.523 0 10A10 10 0 0 1 10 0zm1.573 15.664c-.277.171-.606.266-.953.266-.332 0-.65-.101-.917-.293l-3.67-2.237a.75.75 0 0 1-.294-.976l1.23-3.891-3.266-2.587a.75.75 0 0 1-.002-1.195l3.793-2.838 1.202-3.818a.75.75 0 0 1 1.41 0l1.202 3.818 3.793 2.838a.75.75 0 0 1-.002 1.195l-3.266 2.587 1.23 3.891c.19.603-.147 1.242-.726 1.413z"
          />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <img className="w-full h-64 object-cover" src={imgLink} alt="Cloth" />
      <p className="font-bold text-2xl">{name}</p>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Price: ${price}</div>
        <div className="text-gray-700 text-base mb-2">Category: {category}</div>
        <div className="flex items-center mb-2">
          <div className="text-yellow-500 flex">
            {renderStars()}
          </div>
          <div className="ml-2 text-sm">{rating} stars</div>
        </div>
        <div className="flex justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add to Cart
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cloth;
