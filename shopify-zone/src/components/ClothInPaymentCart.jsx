import React from "react";

export default function ClothInPaymentCart(props) {

  return (
    <div
      id="cartCloth"
      style={{ display: "flex", justifyContent: "space-evenly", marginLeft:"50px" }}
    >
      <img src={props.cloth.imgSrc} />
      <div
       style={{ display: "flex", justifyContent: "space-evenly" }}
      >
      <div
       style={{marginLeft:"20px",width:"250px"}}
      >
        <h3 style={{ marginTop: "-8px" }}>{props.cloth.name}</h3>
        <h4 style={{ marginTop: "-10px" }}>${props.cloth.price}</h4>
      </div>
      <h4 style={{ marginTop: "-8px",marginLeft:"15px" }}>quantity: {props.cloth.q}</h4></div>
    </div>
  );
}
