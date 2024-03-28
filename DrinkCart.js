// DrinkCart.js
import React, { useState } from 'react';

const DrinkCart = () => {
  const [cart, setCart] = useState([]);

  // Function to add a drink to the cart
  const addToCart = (drink) => {
    setCart([...cart, drink]);
  };

  // Function to remove a drink from the cart
  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <div>
      <h2>Drink Cart</h2>
      <ul>
        {cart.map((drink, index) => (
          <li key={index}>
            {drink.name} - ${drink.price}
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addToCart({ name: "Coffee", price: 2.5 })}>Add Coffee</button>
      <button onClick={() => addToCart({ name: "Tea", price: 2 })}>Add Tea</button>
    </div>
  );
};

export default DrinkCart;
