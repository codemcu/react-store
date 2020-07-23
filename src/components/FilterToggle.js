import React from 'react';
import PropTypes from 'prop-types';

const FilterToggle = ({ img, text }) => {
  const handleClick = (event) => {
    console.log(event.target);
  };

  return (
    <li onClick={handleClick}>
      <img src={img} alt="" />
      <div className="filter-span">{text}</div>
    </li>
  );
};

FilterToggle.propTypes = {
  img: PropTypes.string,
  text: PropTypes.string,
};

export default FilterToggle;
