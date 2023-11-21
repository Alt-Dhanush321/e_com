import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/sidebar/Sidebar";
import ProductCard from "../components/products/ProductCard";

import "./shop.scss";

function Shop() {
  return (
    <div className='shop'>
      <section>
        <Header />
      </section>
      <main className='container my-5'>
        <div className='row'>
          <div className='col-4'>
            <Sidebar />
          </div>
          <div className='col-8'>
            <div className='head'>
              <h2 className=''>home \ Products</h2>
            </div>
            <div className='row justify-content-around'>
              <ProductCard />
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
      </main>
      <section className='footer' id='footer'>
        <Footer />
      </section>
    </div>
  );
}

export default Shop;
