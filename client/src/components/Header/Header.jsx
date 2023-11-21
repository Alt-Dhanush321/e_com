import React from "react";
import { TfiSearch } from "react-icons/tfi";
import { PiShoppingCart } from "react-icons/pi";
import { PiUser } from "react-icons/pi";
import { NavLink } from "react-router-dom";

import "./header.scss";
import IconBox from "../icon/IconBox";

function Header() {
  return (
    <>
      <header className='container-fluid header' id='header'>
        <nav className='container'>
          <div class=''>
            <div class='row align-items-center'>
              <div class='brand col d-flex '>
                <img width={70} src='./imgs/logo.png' alt='logo' />
                <h1>Groce</h1>
              </div>
              <div class='col search'>
                <input type='text' className='' placeholder='search' />
                <TfiSearch className='icon' />
              </div>
              <div class='nav-right col d-flex gap-3 '>
                <div className='login d-flex '>
                  <PiUser className='icon' />
                  <p>Login</p>
                </div>
                <div className='cart d-flex '>
                  <PiShoppingCart className='icon' />
                  <p>cart</p>
                </div>
              </div>
            </div>
          </div>
          <div className='menu'>
            <div className='row'>
              <div className='col-6'>
                <ul className=' d-flex gap-5  mb-0'>
                  <li>
                    <NavLink className={"link"} to={"/"}>
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={"link"} to={"/shop"}>
                      Shop
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={"link"} to={"/about"}>
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={"link"} to={"/contact"}>
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className='col-6'>
                <IconBox className='justify-content-end' />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
