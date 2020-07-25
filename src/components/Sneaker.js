import React, { useContext } from 'react';
import SneakerSizes from './SneakerSizes';
import PropTypes from 'prop-types';

import { ProductContext } from './../context/ProductContext';

const Sneaker = ({ sneaker }) => {
  const { state, dispatch } = useContext(ProductContext);

  const handleChange = (sneaker) => {
    dispatch({
      type: 'SUM_PRODUCTS',
      add: { ref: sneaker.ref, price: sneaker.price },
    });
  };

  return (
    <div className="sneakers-list-td">
      <div>
        <input type="checkbox" onChange={() => handleChange(sneaker)} />
      </div>
      <div className="sneakers-list-name">{sneaker.name}</div>
      <div>
        <select name="" id="">
          {sneaker.sizes.map((size, index) => (
            <SneakerSizes size={size} key={index} />
          ))}
        </select>
      </div>
      <div>{sneaker.price}€</div>
    </div>
  );
};

Sneaker.propTypes = {
  sneaker: PropTypes.object,
};

export default Sneaker;
