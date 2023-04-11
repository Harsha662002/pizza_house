import React from "react";
import Styles from "./filtermodal.module.css";
import Pizzasize from "../helpers/pizzasize";
import Pizzatoppings from "../helpers/pizzatoppings";
import { useState } from "react";

export default function Addonsmodal(props) {
  let [selectedToppings, setSelectedToppings] = useState([]);
  const [selectedSize, setSelectedSize] = useState([]);
  // let inputTopping;
  //TOPPINGS

  // function removeDuplicates(arr) {
  //   const counts = {};

  //   for (const item of arr) {
  //     counts[item] = (counts[item] || 0) + 1;
  //   }

  //   const result = [];
  //   for (const item of arr) {
  //     if (counts[item] % 2 === 0) {
  //       continue;
  //     }
  //     if (!result.includes(item)) {
  //       result.push(item);
  //     }
  //   }

  //   return result;
  // }

  const handleToppingSelect = (input, topping) => {
    if (input === true) {
      setSelectedToppings(topping);
      // inputTopping = true;
      // console.log("selected toppings", inputTopping);
    } else {
      setSelectedToppings((prevToppings) => [...prevToppings, topping]);
      // console.log(selectedToppings);
    }
  };

  //SIZES
  const handleSizeSelect = (input, size) => {
    if (input === true) {
      setSelectedSize(size);
    } else {
      setSelectedSize((prevsize) => [...prevsize, size]);
    }
  };

  const selectedsize = new Set(selectedSize);

  //ADDING TOPPINGS AND SIZES TO CART
  const handleAddToCart = () => {
    // if (inputTopping === false) {
    //   selectedToppings = selectedToppings.flat();
    //   console.log("selected toppings1", selectedToppings);
    //   selectedToppings = removeDuplicates(selectedToppings);
    //   console.log("selected toppings2", selectedToppings);
    // }
    props.handleAddToCart({
      ...props.pizza,
      toppings: selectedToppings,
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
