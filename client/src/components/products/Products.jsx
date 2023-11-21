import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import "./products.scss";
import ProductCard from "./ProductCard";

function Products() {
  return (
    <>
      <div className='container pro'>
        <div>Recently added in Our Store</div>
        <div className='head d-flex justify-content-between  '>
          <h1>New products</h1>
          <div className='arrs'>
            <IoIosArrowBack className='icon' />
            <IoIosArrowForward className='icon' />
          </div>
        </div>
        <div className='card-container my-4'>
          <div className='card-holder d-flex overflow-x-scroll '>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
        {/* discount section */}
        <div className='discount my-5 '>
          <div class='container overflow-hidden'>
            <div class='row'>
              <div class='col-lg-8'>
                <div class='card-img img-container'>
                  <img className='bg-img' src='./imgs/off-bg-1.png' alt='' />
                  <div className='content'>
                    <h1>fresh vegies</h1>
                  </div>
                </div>
              </div>
              <div class='col-lg-4'>
                <div class='card-img img-container'>
                  <img className='bg-img' src='./imgs/off-bg-2.png' alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* best deal section */}
        <div className='deal my-5'>
          <div className='head'>
            <div className='d-flex flex-column justify-content-center align-items-center '>
              <span>100% Natural</span>
              <h2>Today's Best Deal</h2>
            </div>
            <div class='container overflow-hidden'>
              <div class='row justify-content-around'>
                <div class='col-lg-6'>
                  <div class='card-img img-container'>
                    <img className='bg-img' src='./imgs/off-bg-1.png' alt='' />
                    <div className='content'>
                      <h1>fresh vegies</h1>
                    </div>
                  </div>
                </div>
                <div class='col-lg-3'>
                  <ProductCard />
                </div>
                <div class='col-lg-3'>
                  <ProductCard />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* featureed products */}
        <div className='ftr'>
          <div>Recently added in Our Store</div>
          <div className='head d-flex justify-content-between  '>
            <h1>New products</h1>
            <div className='arrs'>
              <IoIosArrowBack className='icon' />
              <IoIosArrowForward className='icon' />
            </div>
          </div>
          <div className='card-container my-4'>
            <div className='card-holder d-flex overflow-x-scroll '>
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
        {/* second descount baner */}
        <div className='discount my-5 '>
          <div class='container overflow-hidden'>
            <div class='row'>
              <div class='col-lg-6'>
                <div class='card-img img-container'>
                  <img className='bg-img' src='./imgs/off-bg-1.png' alt='' />
                  <div className='content'>
                    <h1>fresh vegies</h1>
                  </div>
                </div>
              </div>
              <div class='col-lg-6'>
                <div class='card-img img-container'>
                  <img className='bg-img' src='./imgs/off-bg-2.png' alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* client review  */}
      </div>
    </>
  );
}

export default Products;
