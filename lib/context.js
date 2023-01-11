import React, { createContext, useContext, useState } from "react";
const ShopContext = createContext();


export const StateContext = ({children}) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [qty,setQty] = useState(1);

    //! Functions To Increase Quantity

    const increaseQty = () => {
        setQty((prevQty) => prevQty + 1);
      };

      //! Decrease product quantity
      const decreaseQty = () => {
        setQty((prevQty) => {
          if (prevQty - 1 < 1) return 1;
          return prevQty - 1;
        });
      };
    return(
        <ShopContext.Provider value={{showCart,setShowCart, qty, increaseQty, decreaseQty, cartItems,setQty}} >
         {children}
        </ShopContext.Provider>
    );
};

export default ShopContext;

export const useStateContext = () => useContext(ShopContext);