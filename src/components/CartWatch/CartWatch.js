import React from "react";
import "./style.css"

const CartWatch = (props) => {

  function handleVisit() {
    window.location.href=`/watch/${props.id}`
  }

    function handleRemove() {
        const cartData = localStorage.getItem("cart");
        let watchArray = [];
      
        if (cartData) {
          try {
            watchArray = JSON.parse(cartData);
          } catch (error) {
            console.error("Error parsing cart data:", error);
            alert("Error deleting item from cart")
            return;
          }
        }
      
        const idToRemove = props.id;
      
        // Find the index of the inner array containing the _id to remove
        const indexToRemove = watchArray.findIndex((innerArr) => innerArr[0] === idToRemove);
      
        if (indexToRemove !== -1) {
          // Remove the inner array from the watchArray
          watchArray.splice(indexToRemove, 1);
      
          localStorage.setItem('cart', JSON.stringify(watchArray));
          window.location.reload();
        } else {
          localStorage.removeItem("cart")
          window.location.reload();
        }
      }
      
    return(
        <div className="cartWatchContainer">
            <div className="cartWatchImgContainer">
                <img className="cartWatchImg" src={props.mainImage} onClick={handleVisit} alt="cartWatchImg"></img>
            
            </div>
            <div className="cartWatchInfoContainer">
                <div className="infoBox">
                <div className="cartWatchName">{props.name}</div>
                <div className="cartWatchBrand">{props.brand}</div>
                <div className="cartWatchPrice">${props.price}</div>
                </div>
            <div className="deleteContainer">
            <button className="deleteButton" onClick={handleRemove}>Remove</button>
            <button className="deleteButton" onClick={handleVisit}> View Item</button>
            </div>
            </div>
        </div>
    )
}

export default CartWatch;