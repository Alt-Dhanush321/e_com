import React from "react";

import "./footer.scss";
import IconBox from "../icon/IconBox";

function Footer() {
  return (
    <footer className=' container-fluid'>
      <div className='hi-lit container'></div>
      <div className='foot-main container'>
        <div className='row'>
          <div className='col-6'>
            <h1>
              <img width={100} src='./imgs/logo.png' alt='' />
              logo
            </h1>
            <p>
              wonderful serenity has taken possession of entire soul, like these
              sweet mornings of spring which I enjoy with my whole heart.
              wonderful serenity has takenwonderful serenity has taken
              possession of entire soul.
            </p>
            <IconBox className='justify-content-start' />
          </div>
          <div className='col-3'>
            <h2>Quick Link</h2>
            <ul>
              <li>home</li>
              <li>home</li>
              <li>home</li>
              <li>home</li>
              <li>home</li>
              <li>home</li>
            </ul>
          </div>
          <div className='col-3'>
            <h2>Contact Us</h2>
            <ul>
              <li>home</li>
              <li>home</li>
              <li>home</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
