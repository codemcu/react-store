import React from 'react';
import SneakerSizes from './SneakerSizes';
import PropTypes from 'prop-types';

const Sneaker = ({ sneaker }) => {
  return (
    <div className="sneakers-list-td">
      <div>
        <input type="checkbox" />
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
