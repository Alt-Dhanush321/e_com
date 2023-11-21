import React from "react";
import Header from "../components/Header/Header";
import HomeSlider from "../components/Sliders/HomeSlider";
import Service from "../components/service/Service";
import Products from "../components/products/Products";
import ClientSlider from "../components/Sliders/ClientSlider";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <div className='home' id='home'>
        <Header />
        <section className='hero z-0 ' id='hero'>
          <HomeSlider />
        </section>
        <section className='service' id='service'>
          <Service />
        </section>
        <section className='products' id='products'>
          <Products />
        </section>
        <section className='client container my-5 '>
          <div className='d-flex flex-column justify-content-center align-items-center my-5'>
            <span>Testiimonial</span>
            <h2>Our Client Says</h2>
          </div>
          <ClientSlider />
        </section>
        <section className='footer' id='footer'>
          <Footer />
        </section>
      </div>
    </>
  );
}

export default Home;
