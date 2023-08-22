import { React, useState, useEffect } from "react";
import "./style.css";
import API from "../../utils/API";
import CartWatch from "../../components/CartWatch/CartWatch";
import { UilShoppingCart  } from "@iconscout/react-unicons";

function Cart() {
  const [cartWatches, setCartWatches] = useState([]);
  const [cartPrice, setCartPrice] = useState(0);
  const [cartTax, setCartTax] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);


  function handleCheckout() {
    alert("This is a demo ecommerce site. No purchases can be made.")

  }

  async function processLocalStorageData() {
    var priceArray = [];
    var cartArray = [];
    var cartData = localStorage.getItem("cart");
    if (cartData) {
      var watchArray = JSON.parse(cartData);

      for (const item of watchArray) {
        try {
          const itemData = await API.getWatchById(item);
          cartArray.push(itemData);
          //getting price for each item in cart
          priceArray.push(itemData.price);

        } catch (error) {
          console.error(`Error fetching watch with ID ${item}: ${error}`);
        }
      }
      //function to add commas to numbers
      function addCommasToNumber(number) {
        return number.toLocaleString();
      }
      //adding all prices together
      var addingPrice = priceArray.reduce((a, b) => a + b, 0);
      setCartPrice(addCommasToNumber(addingPrice));
      console.log(cartPrice)
      //calculating tax
      var taxMath = addingPrice * 0.065;
      setCartTax(addCommasToNumber(taxMath));
      console.log(cartTax)
      //calculating total price
      setCartTotal(addCommasToNumber(addingPrice + taxMath));
      console.log(cartTotal)


      
      setCartWatches(cartArray);
    } else {
      console.log("No data found in Local Storage.");
    }
  }

  useEffect(() => {
    processLocalStorageData();
  },);

  return (
    <div id="cartPage">
      <div id="cartBox">
        <div id="cartWatches">
          {cartWatches.map((cartArray, index) => (
            <CartWatch
              id={cartArray._id}
              key={index}
              mainImage={cartArray.mainImage}
              name={cartArray.name}
              price={cartArray.price}
              brand={cartArray.brand}
            />
          ))}
        </div>
        <div id="breakLine"></div>
        <div id="cartSummary">
          <div id="cartSummaryBox">
            <div id="cartSummaryTitle">Cart Summary</div>
            <div id="breakLine"></div>
            <div id="cartInfoBox">
              <div className="infoStyling" id="cartInfoPrice">Subtotal:<span className="infoSpan">${cartPrice}</span></div>
              <div id="breakLine"></div>
              <div className="infoStyling" id="cartInfoTax ">Estimated Tax:<span className="infoSpan">${cartTax}</span></div>
              <div id="breakLine"></div>
              <div className="infoStyling" id="cartInfoTotal">Total:<span className="infoSpan">${cartTotal}</span></div>
              <div id="breakLine"></div>
            </div>
              <button id="cartInfoCheckoutButton" onClick={handleCheckout}><UilShoppingCart></UilShoppingCart> Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
