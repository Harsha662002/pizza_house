import React from "react";
import Styles from "./helper.module.css";
import { useState } from "react";

export default function Pizzasize({ selection, onSizeSelect }) {
  const [clickCount, setClickCount] = useState(0);

  const handleSizeSelect = (event) => {
    const isChecked = event.target.checked;
    const value = event.target.value;
    setClickCount(clickCount + (isChecked ? 1 : -1));
    if (isChecked && clickCount % 2 === 0) {
      onSizeSelect(value);
    } else if (!isChecked && clickCount % 2 !== 0) {
      onSizeSelect(value);
    }
  };
  // const handleSizeSelect = (event) => {
  //   onSizeSelect(event.target.value);
  // };

  return (
    <div className={Styles.PizzaSize}>
      <h3>{selection.title}</h3>
      <div className={Styles.PizzaSizeLabels}>
        {selection.items.map((item, index) => {
          return (
            <div key={index}>
              <label>
                {selection.isRadio ? (
                  <input
                    type="radio"
                    name="size"
                    value={item.size}
                    onChange={handleSizeSelect}
                  />
                ) : (
                  <input
                    type="checkbox"
                    name="size"
                    value={item.size}
                    onChange={handleSizeSelect}
                    checked={clickCount % 2 !== 0}
                  />
                )}
                {item.size}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
