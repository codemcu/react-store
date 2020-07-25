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
    </div>
  );
};

export default SneakersList;
