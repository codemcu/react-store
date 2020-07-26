import React, { useContext } from 'react';
import { ProductContext } from './../context/ProductContext';
import Sneaker from './Sneaker';

const SneakersList = () => {
  const { state, dispatch } = useContext(ProductContext);

  return (
    <div className="sneakers-list">
      <div className="sneakers-list-th">
        <div></div>
        <div className="sneakers-list-name">Name</div>
        <div>Sizes</div>
        <div>Price</div>
      </div>
      {state.products &&
        state.products.map((sneaker, index) => (
          <Sneaker sneaker={sneaker} key={index} />
        ))}
      {state.cart && state.cart.length ? (
        <div className="sneakers-list-total">
          <div className="sneakers-list-total-text">Total Amount:</div>
          <div className="sneakers-list-total-number">{state.total}€</div>
        </div>
      ) : null}
    </div>
  );
};

export default SneakersList;
