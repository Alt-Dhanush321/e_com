import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { TbDiscount2 } from "react-icons/tb";
import { GoVerified } from "react-icons/go";

import "./service.scss";

function Service() {
  return (
    <>
      <div className='service-box container'>
        <div className='row text-center '>
          <div className=' col-lg-3 col-md-6 col-sm-12 '>
            <div className='items'>
              <LiaShippingFastSolid className='icon' />
              <h2>Fast and Free Delivery </h2>
              <p>Free delivery for all orders over 1000</p>
            </div>
          </div>
          <div className=' col-lg-3 col-md-6 col-sm-12 '>
            <div className='items'>
              <TfiHeadphoneAlt className='icon' />
              <h2>24/7 Customer Support</h2>
              <p>Friendly 24/7 customer support</p>
            </div>
          </div>
          <div className=' col-lg-3 col-md-6 col-sm-12 '>
            <div className='items'>
              <TbDiscount2 className='icon' />
              <h2>Best Deal Online</h2>
              <p>Discount coupons weekends.</p>
            </div>
          </div>
          <div className=' col-lg-3 col-md-6 col-sm-12 '>
            <div className='items'>
              <GoVerified className='icon' />
              <h2>Guaranteed Quality</h2>
              <p>Featuring the Best Global Brands</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
