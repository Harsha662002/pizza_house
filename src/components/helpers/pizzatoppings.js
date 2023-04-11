import React from "react";
import Styles from "./helper.module.css";
import { useState } from "react";

export default function Pizzatoppings({ selection, onToppingSelect }) {
  const [checkboxValues, setCheckboxValues] = useState([]);

  const handleToppingSelect = (event) => {
    if (selection.isRadio) {
      onToppingSelect(selection.isRadio, event.target.value);
    } else {
      const isChecked = event.target.checked;
      if (isChecked) {
        setCheckboxValues((prevState) => [...prevState, event.target.value]);
      } else {
        setCheckboxValues((prevState) =>
          prevState.filter((val) => val !== event.target.value)
        );
      }
      onToppingSelect(selection.isRadio, checkboxValues);
    }
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
                    // checked={isCheckboxChecked(item.name)}
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
