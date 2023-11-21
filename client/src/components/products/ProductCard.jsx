import React from "react";
import { TiShoppingCart } from "react-icons/ti";

import "./products.scss";

function ProductCard() {
  return (
    <>
      <div
        className='card col-lg-3 col-md-4 col-sm-6 m-lg-2'
        style={{ width: "15rem" }}
      >
        <img src='./imgs/veg.avif' className='card-img-top' alt='sample veg' />
        <div className='card-body'>
          <p>vegetable</p>
          <h5 className='card-title'>Organic vegies</h5>
          <div className='card-btm d-flex justify-content-between '>
            <p>
              100 <span>200</span>
            </p>
            <TiShoppingCart className='icon' />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
