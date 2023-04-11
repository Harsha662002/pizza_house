import React from "react";
import { IoMdCloseCircle } from "react-icons/io";
import Styles from "./cartscreen.module.css";

export default function Cartscreen(props) {
  // console.log("Cartitems toppings", props.cartItems.toppings);

  return (
    <aside className={Styles.addToCartScreen}>
      <div onClick={() => props.close()} className={Styles.crossButton}>
        <IoMdCloseCircle size={50} />
      </div>
      <h2>Cart</h2>
      {props.cartItems.length === 0 && <h2>Cart is empty</h2>}
      <ul>
        {props.cartItems.length !== 0 && (
          <li className={Styles.addToCartScreenTableHeading}>
            <div>Name</div>
            <div>Size</div>
            <div>Toppings</div>
            <div>Quantity</div>
            <div>Total</div>
            <div>Delete</div>
          </li>
        )}
        {props.cartItems.map((item, index) => (
          <li key={index}>
            <div>{item.name}</div>
            <div>{item.size}</div>
            <div>{item.toppings}</div>
            <div className={Styles.itemQuantity}>
              <button onClick={() => props.handlePizzaIncrementCount(item)}>
                +
              </button>
              <div>{item.count}</div>
              <button onClick={() => props.handlePizzaDecrementCount(item)}>
                -
              </button>
            </div>
            <div className={Styles.total}>
              {Number(item.price) * Number(item.count)}
            </div>
            <div className={Styles.deleteItemButton}>
              <button onClick={() => props.handlePizzaDeleteItem(item)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
