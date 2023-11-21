import React from "react";
import { TfiSearch } from "react-icons/tfi";
import { PiShoppingCart } from "react-icons/pi";
import { PiUser } from "react-icons/pi";

function Header() {
  return (
    <>
      <header className='header p-8'>
        <nav className='header bg-red-300 container' id='header'>
          <div className='nav-top lg:grid grid-cols-3 items-center'>
            <div className='brand  flex items-center'>
              <img width={70} src='../imgs/logo.png' alt='logo' />
              <h1 className=' font-bold text-5xl text-secondary'>Logo</h1>
            </div>

            <div className='search w-full'>
              <div className='relative'>
                <input
                  type='text'
                  placeholder='Search'
                  className='px-5 py-2 lg:w-full mx-auto'
                />
                <TfiSearch className='text-3xl absolute bottom-1 right-4' />
              </div>
            </div>
            <div className='flex gap-4 ml-auto'>
              <div className='login flex items-center'>
                <PiUser />
                <p className=''>Login</p>
              </div>
              <div className='cart flex items-center'>
                <PiShoppingCart />
                <p className=''>cart</p>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
