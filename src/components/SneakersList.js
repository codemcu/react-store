import React, { useContext } from 'react';
import { ProductContext } from './../context/ProductContext';
import Sneaker from './Sneaker';

const SneakersList = () => {
  const { products, dispatch } = useContext(ProductContext);

  return (
    <div className="sneakers-list">
      <div className="sneakers-list-th">
        <div></div>
        <div className="sneakers-list-name">Name</div>
        <div>Sizes</div>
        <div>Price</div>
      </div>
      {products.products &&
        products.products.map((sneaker, index) => (
          <Sneaker sneaker={sneaker} key={index} />
        ))}
    </div>
  );
};

export default SneakersList;
