import React, { useReducer, createContext, useEffect } from 'react';
import axios from 'axios';

export const ProductContext = createContext();

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return {
        ...state,
        products: [...action.products],
      };
    default:
      return state;
  }
};

const ProductContextProvider = (props) => {
  const [products, dispatch] = useReducer(reducer, initialState);

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
    <ProductContext.Provider value={{ products, dispatch }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
