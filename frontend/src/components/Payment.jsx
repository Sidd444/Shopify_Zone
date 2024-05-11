import React, { useState } from 'react';
import PaymentCart from './PaymentCart';
import Navbar from './Navbar';
import useClothes from '../contexts/CartContext';
import { useEffect } from 'react';

export default function Payment() {
  const { setArr, setTotal } = useClothes();
  const [display, setDisplay] = useState("none");
  const [display2, setDisplay2] = useState("none");

  const handleConfirmPayment = () => {
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;

    // Validation checks
    if (cardNumber.length !== 16 || isNaN(cardNumber)) {
      alert("card number must be 16 digits without space")
      setDisplay("block");
      return;
    }
    if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
      alert("date must be in the format month/year")
      setDisplay("block");
      return;
    }
    if (!/^\d{3}$/.test(cvv)) {
      alert("cvv must be of 3 digits")
      setDisplay("block");
      return;
    }

    setDisplay("none");
    setDisplay2("block");
    setArr([]);
    setTotal(0);
  };

  return (
    <div>
      <Navbar />
      <div className="flex-center">
        <div className="main-content">
          <div id="payment-form">
            <form>
              <h3>Enter Your Card Number:</h3>
              <input type="text" placeholder='Card Number' id="cardNumber" />
              <h3>Enter Your Card's expiry date:</h3>
              <input type="text" placeholder='Expiry date (MM/YY)' id="expiryDate" />
              <h3>Enter Your Card's CVV Number</h3>
              <input type="text" placeholder='CVV Number' id="cvv" />
            </form>
            <div className="flex-center">
              <button onClick={handleConfirmPayment}>Confirm Payment</button>
            </div>
            <div className="flex-center" style={{ display: display, color: "red" }}>
              <h3>Please Enter All The Details Correctly</h3>
            </div>
            <div className="flex-center" style={{ display: display2, color: "green" }}>
              <h3>Your Order has been placed successfully</h3>
            </div>
          </div>
          <PaymentCart />
        </div>
      </div>
    </div>
  );
}
