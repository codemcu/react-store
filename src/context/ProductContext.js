import React, { useReducer, createContext, useEffect } from 'react';
import axios from 'axios';

export const ProductContext = createContext();

const initialState = {
  products: [],
  cart: [],
  total: 0,
};

const reducer = (state = initialState, action) => {
  const updateCart = (newProducts) => {
    return newProducts.reduce(
      (accumulator, current) =>
        accumulator + parseFloat(replaceComa(current.price)),
      0
    );
  };

  const replaceComa = (string) => {
    return string.replace(',', '.');
  };

  const isCheched = (newProduct) => {
    const founded = state.cart.filter(
      (product) => product.ref === newProduct.ref
    );
    if (founded.length) {
      const filtered = state.cart.filter(
        (product) => product.ref !== newProduct.ref
      );
      const sum = updateCart(filtered);
      return {
        ...state,
        cart: filtered,
        total: sum.toFixed(2),
      };
    } else {
      const newProducts = [...state.cart, newProduct];
      const sum = updateCart(newProducts);
      return {
        ...state,
        cart: [...state.cart, newProduct],
        total: sum.toFixed(2),
      };
    }
  };

  switch (action.type) {
    case 'GET_PRODUCTS':
      return {
        ...state,
        products: [...action.products],
      };
    case 'SUM_PRODUCTS':
      return isCheched(action.add);
    default:
      return state;
  }
};

const ProductContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get('/data/products.json');
      dispatch({
        type: 'GET_PRODUCTS',
        products: data,
      });
    };

    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
