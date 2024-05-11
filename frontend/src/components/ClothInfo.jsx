import React from "react";
import { useRef } from "react";

export default function ClothInfo(props) {
  function addToCart(clothImgSrc, clothName, clothPrice) {
    let clothObj = {
      imgSrc: clothImgSrc,
      name: clothName,
      price: Number.parseInt(clothPrice.substring(1)),
      q: 1,
    };

    props.addNewCloth(clothObj);
    props.setTotal(props.total + clothObj.price);
  }
  return (
    <div className="clothInfo bg-white">
      <div className="flex justify-center">
        <img className="clothOrigin" src={props.imgSrc} />
      </div>
      <div className="mt-5">
        <h3>{props.name}</h3>
        <h3>{props.price}</h3>
        <button
          className="add-cloth-to-cart"
          onClick={() => {
            addToCart(props.imgSrc, props.name, props.price);
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}
