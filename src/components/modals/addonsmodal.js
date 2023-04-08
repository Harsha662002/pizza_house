import React from "react";
import Styles from "./filtermodal.module.css";
import Pizzasize from "../helpers/pizzasize";
import Pizzatoppings from "../helpers/pizzatoppings";
import { useState } from "react";

export default function Addonsmodal(props) {
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [selectedSize, setSelectedSize] = useState([]);

  //TOPPINGS
  const handleToppingSelect = (topping) => {
    setSelectedToppings((prevToppings) => [...prevToppings, topping]);
  };

  const selectedTopping = new Set(selectedToppings);

  //SIZES
  const handleSizeSelect = (size) => {
    setSelectedSize((prevsize) => [...prevsize, size]);
  };

  const selectedsize = new Set(selectedSize);

  //ADDING TOPPINGS AND SIZES TO CART
  const handleAddToCart = () => {
    props.handleAddToCart({
      ...props.pizza,
      toppings: selectedTopping,
      size: selectedsize,
    });
    props.onClose();
  };

  return (
    <div className={Styles.popup_container}>
      <div className={Styles.popup_content}>
        {props.size.map((s) => {
          return (
            <Pizzasize
              selection={s}
              key={s.id}
              onSizeSelect={handleSizeSelect}
            />
          );
        })}
        {props.toppings.map((s) => {
          return (
            <Pizzatoppings
              selection={s}
              key={s.id}
              onToppingSelect={handleToppingSelect}
            />
          );
        })}

        <div className={Styles.addOnsModalButtons}>
          <button onClick={handleAddToCart}>Add to Cart</button>
          <button onClick={props.onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
