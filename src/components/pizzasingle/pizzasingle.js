import React from "react";
import Styles from "./pizzasingle.module.css";
import { useState } from "react";
import Addonsmodal from "../modals/addonsmodal";

export default function Pizzasingle(props) {
  const [isAddonsPopupOpen, setisAddonsPopupOpen] = useState(false);

  const {
    id,
    name,
    description,
    isVeg,
    rating,
    price,
    img_url,
    size,
    toppings,
  } = props.item;

  console.log(id);

  const wholeRating = Math.floor(rating);
  const decimalRating = rating - wholeRating;
  const stars = [];

  for (let i = 0; i < wholeRating; i++) {
    stars.push(<i className="fa fa-star" key={i} style={{ color: "gold" }} />);
  }

  if (decimalRating === 0.5) {
    stars.push(
      <i
        className="fa fa-star-half"
        key={wholeRating}
        style={{ color: "gold" }}
      />
    );
  }

  //ADDONS MODAL POPUP
  const handleAddonsPopupOpen = () => {
    setisAddonsPopupOpen(true);
  };

  const handleAddonsPopupClose = () => {
    setisAddonsPopupOpen(false);
  };

  return (
    <div className={Styles.Pizzasingle}>
      <div className={Styles.PizzasingleImage}>
        <img src={img_url} alt={name} />
      </div>
      <div className={Styles.PizzasingleInfo}>
        <div className={Styles.PizzasingleInfoDesc}>
          <h3>{name} </h3>
          <h4>Price: Rs{price}</h4>
          <p>{description}</p>
          <p style={{ fontWeight: "600" }}>Rating:{stars}</p>
        </div>
        <div className={Styles.PizzasingleInfoIcons}>
          {!isVeg ? (
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Non_veg_symbol.svg/2048px-Non_veg_symbol.svg.png"
              alt=""
            ></img>
          ) : (
            <img
              src="https://icon2.cleanpng.com/20180601/ae/kisspng-vegetarian-cuisine-biryani-indian-cuisine-vegetabl-vegetarian-5b11c2357677b7.0724399215278904854853.jpg"
              alt=""
            />
          )}
          <button onClick={handleAddonsPopupOpen}>
            <i className={`fas fa-plus`}></i>
          </button>
          {isAddonsPopupOpen && (
            <Addonsmodal
              onClose={handleAddonsPopupClose}
              size={size}
              pizza={props.item}
              toppings={toppings}
              handleAddToCart={props.handleAddToCart}
            />
          )}
        </div>
      </div>
    </div>
  );
}
