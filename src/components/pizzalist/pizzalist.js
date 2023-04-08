import React from "react";
import Pizzasingle from "../pizzasingle/pizzasingle";
import { useState, useEffect } from "react";
import Styles from "./pizzalist.module.css";
import Cartscreen from "../cart/cartscreen";
import Filtermodal from "../modals/filtermodal";

export default function Pizzalist() {
  const [data, setData] = useState([]);
  const [searchPizza, setSearchPizza] = useState("");

  const [selectedPrice, setSelectedPrice] = useState("");
  const [isPricePopupOpen, setisPricePopupOpen] = useState(false);

  const [selectedRating, setSelectedRating] = useState("");
  const [isRatingPopupOpen, setisRatingPopupOpen] = useState(false);

  const [selectedType, setSelectedType] = useState("");
  const [isTypePopupOpen, setisTypePopupOpen] = useState(false);

  const [toggleCart, setToggleCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  //ADD TO CART
  const handleToggleCart = () => {
    setToggleCart((prevState) => !prevState);
  };

  const handleAddToCart = (pizza) => {
    const existingPizzaIndex = cartItems.findIndex(
      (p) => p.name === pizza.name
    );
    if (existingPizzaIndex !== -1) {
      const updatedPizzas = [...cartItems];
      updatedPizzas[existingPizzaIndex].count++;
      setCartItems(updatedPizzas);
    } else {
      setCartItems([...cartItems, { ...pizza, count: 1 }]);
    }
  };

  const handlePizzaIncrementCount = (pizza) => {
    const updatedPizzas = [...cartItems];

    const existingPizzaIndex = updatedPizzas.findIndex(
      (p) => p.name === pizza.name
    );

    updatedPizzas[existingPizzaIndex].count++;
    setCartItems(updatedPizzas);
  };

  const handlePizzaDecrementCount = (pizza) => {
    const updatedPizzas = [...cartItems];

    const existingPizzaIndex = updatedPizzas.findIndex(
      (p) => p.name === pizza.name
    );

    if (updatedPizzas[existingPizzaIndex].count > 1) {
      updatedPizzas[existingPizzaIndex].count--;
      setCartItems(updatedPizzas);
    } else {
      updatedPizzas.splice(existingPizzaIndex, 1);
      setCartItems(updatedPizzas);
    }
  };

  const handlePizzaDeleteItem = (clickedPizza) => {
    const existingPizzaIndex = cartItems.findIndex(
      (pizza) => pizza.name === clickedPizza.name
    );

    const updatedPizzas = [...cartItems];
    updatedPizzas.splice(existingPizzaIndex, 1);
    setCartItems(updatedPizzas);
  };

  // PRICE FILTER BUTTON
  const priceOptions = [
    { value: "", label: "No filter" },
    { value: "200", label: "less than 200" },
    { value: "300", label: "200-300" },
    { value: "400", label: "300-400" },
    { value: "500", label: "Above 400" },
  ];

  const handlePriceRangeSelect = (event) => {
    setSelectedPrice(event.target.value);
  };

  const handlePriceButtonClick = () => {
    setisPricePopupOpen(true);
  };

  // RATING FILTER BUTTON

  const ratingOptions = [
    { value: "", label: "No filter" },
    { value: "1", label: "less than 1" },
    { value: "2", label: "1-2" },
    { value: "3", label: "2-3" },
    { value: "4", label: "3-4" },
    { value: "5", label: "4-5" },
  ];
  const handleRatingRangeSelect = (event) => {
    setSelectedRating(event.target.value);
  };

  const handleRatingButtonClick = () => {
    setisRatingPopupOpen(true);
  };

  // TYPE FILTER BUTTON
  const typeOptions = [
    { value: "", label: "No filter" },
    { value: "veg", label: "Veg" },
    { value: "non_veg", label: "Non-Veg" },
  ];
  const handleTypeRangeSelect = (event) => {
    setSelectedType(event.target.value);
  };

  const handleTypeButtonClick = () => {
    setisTypePopupOpen(true);
  };

  //FETCHING DATA
  useEffect(() => {
    fetch("https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  //FILTERING DATA BASED ON VARIOUS FILTERS
  const filteredPizzaData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchPizza.toLowerCase()) &&
      (!selectedPrice ||
        selectedPrice === "" ||
        (selectedPrice === "200" && item.price < 200) ||
        (selectedPrice === "300" && item.price >= 200 && item.price < 300) ||
        (selectedPrice === "400" && item.price >= 300 && item.price < 400) ||
        (selectedPrice === "500" && item.price >= 400)) &&
      (!selectedRating ||
        selectedRating === "" ||
        (selectedRating === "1" && item.rating <= 1) ||
        (selectedRating === "2" && item.rating > 1 && item.rating <= 2) ||
        (selectedRating === "3" && item.rating > 2 && item.rating <= 3) ||
        (selectedRating === "4" && item.rating > 3 && item.rating <= 4) ||
        (selectedRating === "5" && item.rating >= 5)) &&
      (!selectedType ||
        selectedType === "" ||
        (selectedType === "veg" && item.isVeg === true) ||
        (selectedType === "non_veg" && item.isVeg === false))
  );

  return (
    <div>
      <div className={Styles.headerBar}>
        <div width="100%" className={`${Styles.headerSearchBar}`}>
          <div
            name="search"
            color="grey-5"
            className={`${Styles.headerSvgSize} ${Styles.headerSvgPosition}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="prefix__feather prefix__feather-search"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="M21 21l-4.35-4.35"></path>
            </svg>
          </div>
          <div direction="row" className={`${Styles.searchInput}`}>
            <input
              placeholder="Search for Pizza by Name"
              type="text"
              className={`${Styles.searchInputStyles}`}
              value={searchPizza}
              onChange={(event) => setSearchPizza(event.target.value)}
            />
          </div>
        </div>
        <div>
          <button
            className={Styles.headerButtons}
            onClick={handlePriceButtonClick}
          >
            Price
          </button>
          {isPricePopupOpen && (
            <Filtermodal
              title="Price Filter"
              options={priceOptions}
              onClose={() => setisPricePopupOpen(false)}
              onSelect={handlePriceRangeSelect}
            />
          )}
        </div>
        <div>
          <button
            className={Styles.headerButtons}
            onClick={handleRatingButtonClick}
          >
            Rating
          </button>
          {isRatingPopupOpen && (
            <Filtermodal
              title="Rating Filter"
              options={ratingOptions}
              onClose={() => setisRatingPopupOpen(false)}
              onSelect={handleRatingRangeSelect}
            />
          )}
        </div>
        <div>
          <button
            className={Styles.headerButtons}
            onClick={handleTypeButtonClick}
          >
            Type
          </button>
          {isTypePopupOpen && (
            <Filtermodal
              title="Type Filter"
              options={typeOptions}
              onClose={() => setisTypePopupOpen(false)}
              onSelect={handleTypeRangeSelect}
            />
          )}
        </div>
        <div>
          <button onClick={handleToggleCart} className={Styles.headerButtons}>
            <i class="fas fa-cart-plus"></i> Cart
          </button>
          {toggleCart && (
            <Cartscreen
              close={() => setToggleCart(false)}
              cartItems={cartItems}
              handlePizzaIncrementCount={handlePizzaIncrementCount}
              handlePizzaDecrementCount={handlePizzaDecrementCount}
              handlePizzaDeleteItem={handlePizzaDeleteItem}
            />
          )}
        </div>
      </div>
      <div className={Styles.Pizzalist}>
        {filteredPizzaData.map((item) => {
          return (
            <Pizzasingle
              key={item.id}
              item={item}
              handleAddToCart={handleAddToCart}
            />
          );
        })}
      </div>
    </div>
  );
}
