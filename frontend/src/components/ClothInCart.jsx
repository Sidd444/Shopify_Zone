import React from "react";
import { useEffect } from "react";
import useClothes from "../contexts/CartContext";

export default function ClothInCart(props) {

  const {total,setTotal}=useClothes();
  useEffect(()=>{
    if(props.cloth.q<=0) props.remove(props.cloth);
  },[props.cloth.q]);

  function increaseQuantity(){
    props.cloth.q+=1;
    setTotal(total+props.cloth.price);
  }
  function decreaseQuantity(){
    props.cloth.q-=1;
    const newTotal=total-props.cloth.price;
    setTotal(newTotal); 
  }
  return (
    <div
      id="cartCloth"
      style={{ display: "flex", justifyContent: "space-evenly", marginLeft:"50px" }}
    >
      <img src={props.cloth.imgSrc} />
      <div
       style={{marginLeft:"20px",width:"200px"}}
      >
        <h4 style={{ marginTop: "-8px" }}>{props.cloth.name}</h4>
        <h4 style={{ marginTop: "-2px" }}>${props.cloth.price}</h4>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <button 
           className="quantity-changer-button"
           onClick={()=>{
            decreaseQuantity();
           }}
          style={{backgroundColor:"red"}}>-</button>
        </div>
        <div style={{ marginLeft:"22px" }}>
          <h4> {props.cloth.q} </h4>
        </div>
        <div>
          <button 
          className="quantity-changer-button"
          onClick={()=>{
            increaseQuantity();
          }}
          style={{backgroundColor:"green"}}>+</button>
        </div>
      </div>
    </div>
  );
}
