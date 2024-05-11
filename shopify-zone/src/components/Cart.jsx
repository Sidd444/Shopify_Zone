import React, { useState } from "react";
import { Link } from "react-router-dom";
import ClothInCart from "./ClothInCart";
import useClothes from "../contexts/CartContext";

export default function Cart(props) {
  const {arr,total}=useClothes();
  return (
    <div>
    <div id="cart">
      <h1>Cart</h1>
      <div>
        {arr.map((cloth) => (
          <ClothInCart          
            cloth={cloth}
            remove={props.remove}
          />
        ))}
      </div>
    </div>
    <div>
    <h2 style={{marginLeft:"210px",fontSize:"40px",fontWeight:"bold"}}>Total:{total}</h2>
      <Link  to='/payment'><button id="proceed-to-payment-button">Proceed To Payment</button></Link>
    </div>
    </div>
  );
}
