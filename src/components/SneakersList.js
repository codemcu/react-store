import React, { useContext } from 'react';
import { ProductContext } from './../context/ProductContext';

const SneakersList = () => {
  const { products, dispatch } = useContext(ProductContext);

  console.log(products);
  return (
    <div className="sneakers-list">
      <div className="sneakers-list-th">
        <div></div>
        <div>Name</div>
        <div>Sizes</div>
        <div>Price</div>
      </div>
      <div className="sneakers-list-td">
        <div>
          <input type="checkbox" />
        </div>
        <div>VL COURT 2.0</div>
        <div>
          <select name="" id="">
            <option>42</option>
          </select>
        </div>
        <div>54.95€</div>
      </div>
    </div>
  );
};

export default SneakersList;
