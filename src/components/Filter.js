import React from 'react';

const Filter = () => {
  const handleMouseOver = () => {};

  return (
    <div className="filters">
      <ul>
        <li onMouseOver={handleMouseOver}>
          <img src="/img/casual-removebg-preview.png" />
        </li>
        <li onMouseOver={handleMouseOver}>
          <img src="/img/football-removebg-preview.png" />
        </li>
        <li onMouseOver={handleMouseOver}>
          <img src="/img/running-removebg-preview.png" />
        </li>
      </ul>
    </div>
  );
};

export default Filter;
