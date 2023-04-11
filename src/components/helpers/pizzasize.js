import React from "react";
import Styles from "./helper.module.css";
import { useState } from "react";

export default function Pizzasize({ selection, onSizeSelect }) {
  const [checkboxValues, setCheckboxValues] = useState([]);

  const handleSizeSelect = (event) => {
    const value = event.target.value;
    console.log(value);
    if (selection.isRadio) {
      onSizeSelect(selection.isRadio, value);
    } else {
      const isChecked = event.target.checked;
      if (isChecked) {
        setCheckboxValues([...checkboxValues, value]);
      } else {
        setCheckboxValues(checkboxValues.filter((val) => val !== value));
      }
      onSizeSelect(selection.isRadio, checkboxValues);
    }
  };

  const isCheckboxChecked = (value) => {
    return checkboxValues.includes(value);
  };

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
                    // checked={clickCount % 2 !== 0}
                    checked={isCheckboxChecked(item.size)}
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
