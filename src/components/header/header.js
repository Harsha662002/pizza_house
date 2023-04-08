import React from "react";
import Styles from "./header.module.css";

export default function Header() {
  return (
    <div className={Styles.header}>
      <div className={Styles.mainHeading}>
        <img src="/assests/images/pizza.png" alt="Pizza House" />
        <h1>Pizza House</h1>
      </div>
      <div>
        <h2>Menu Card</h2>
      </div>
    </div>
  );
}
