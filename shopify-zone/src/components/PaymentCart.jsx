import React from "react";
import { Link } from "react-router-dom";
import ClothInPaymentCart from "./ClothInPaymentCart";
import useClothes from "../contexts/CartContext";

export default function PaymentCart(props) {
  const { arr, total } = useClothes();

  return (
    <div id="cart">
      <h1>Cart</h1>
      <div>
        {arr.map((cloth) => (
          <ClothInPaymentCart
            cloth={cloth}
          />
        ))}
      </div>
      <h2>Total:{total}</h2>
      <Link to='/' className="flex-center">
        <button id="back-to-shopping">
          Go Back To Shopping
        </button>
      </Link>
    </div>
  );
}
