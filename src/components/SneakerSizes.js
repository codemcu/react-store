import React from 'react';
import PropTypes from 'prop-types';

const SneakerSizes = ({ size }) => {
  return <option>{size}</option>;
};

SneakerSizes.propTypes = {
  size: PropTypes.string,
};

export default SneakerSizes;
