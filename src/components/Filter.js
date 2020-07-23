import React from 'react';
import FilterToggle from './FilterToggle';

const Filter = () => {
  return (
    <div className="filters">
      <ul>
        <FilterToggle img="/img/casual-removebg-preview.png" text="Casual" />
        <FilterToggle img="/img/football-removebg-preview.png" text="Running" />
        <FilterToggle img="/img/running-removebg-preview.png" text="Football" />
      </ul>
    </div>
  );
};

export default Filter;
