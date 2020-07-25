import React, { useReducer, createContext, useEffect } from 'react';
import axios from 'axios';

export const ProductContext = createContext();

const initialState = {
  products: [],
  cart: [],
};

const reducer = (state = initialState, action) => {
  const isCheched = (newProduct) => {
    const founded = state.cart.filter(
      (product) => product.ref === newProduct.ref
    );
    if (founded.length) {
      const filtered = state.cart.filter(
        (product) => product.ref !== newProduct.ref
      );
      return {
        ...state,
        cart: filtered,
      };
    } else {
      return {
        ...state,
        cart: [...state.cart, newProduct],
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
