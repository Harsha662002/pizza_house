import React from "react";
import Styles from "./helper.module.css";

export default function Pizzatoppings({ selection, onToppingSelect }) {
  const handleToppingSelect = (event) => {
    onToppingSelect(event.target.value);
  };
  return (
    <div className={Styles.PizzaToppings}>
      <h3>{selection.title}</h3>
      <div className={Styles.PizzaToppingsLabels}>
        {selection.items.map((item, index) => {
          return (
            <div key={index}>
              <label>
                {selection.isRadio ? (
                  <input
                    type="radio"
                    name="topping"
                    value={item.name}
                    onChange={handleToppingSelect}
                  />
                ) : (
                  <input
                    type="checkbox"
                    name="topping"
                    value={item.name}
                    onChange={handleToppingSelect}
                  />
                )}
                {item.name}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
