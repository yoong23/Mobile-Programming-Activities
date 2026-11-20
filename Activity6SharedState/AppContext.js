
import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [loadingProductId, setLoadingProductId] = useState(null);

  const addToCart = (product) => {
    setLoadingProductId(product.id);

    setTimeout(() => {
      setCartItems((currentItems) => {
        const existingItem = currentItems.find(
          (item) => item.id === product.id
        );

        if (existingItem) {
          return currentItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }

        return [...currentItems, { ...product, quantity: 1 }];
      });

      setLoadingProductId(null);
    }, 1000);
  };

  const updateQuantity = (id, amount) => {
    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  };

  return (
    <AppContext.Provider
      value={{
        cartItems,
        loadingProductId,
        addToCart,
        updateQuantity,
        removeFromCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
