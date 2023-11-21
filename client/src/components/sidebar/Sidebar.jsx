import React from "react";
import { TfiSearch } from "react-icons/tfi";

import "./Sidebar.scss";

function Sidebar() {
  return (
    <aside className='sidebar'>
      <div className='search-bar'>
        <h2>Search</h2>
        <div>
          <input type='text' className='search' />
        </div>
        <button className=''>
          Search <TfiSearch />
        </button>
      </div>
      <div className='filter-bar'>
        <h2>Filter</h2>
        <div>
          <input type='range' className='search' />
        </div>
        <button className=''>filter</button>
      </div>
      <div className='category'>
        <h2>category</h2>
        <div>
          <div className='d-flex justify-content-between'>
            <div className=''>
              <input type='checkbox' className='checkbox me-4' />
              <label htmlFor=''>Organic</label>
            </div>
            <span>3</span>
          </div>
          <div className='d-flex justify-content-between'>
            <div className=''>
              <input type='checkbox' className='checkbox me-4' />
              <label htmlFor=''>Organic</label>
            </div>
            <span>3</span>
          </div>
          <div className='d-flex justify-content-between'>
            <div className=''>
              <input type='checkbox' className='checkbox me-4' />
              <label htmlFor=''>Organic</label>
            </div>
            <span>3</span>
          </div>
          <div className='d-flex justify-content-between'>
            <div className=''>
              <input type='checkbox' className='checkbox me-4' />
              <label htmlFor=''>Organic</label>
            </div>
            <span>3</span>
          </div>
          <div className='d-flex justify-content-between'>
            <div className=''>
              <input type='checkbox' className='checkbox me-4' />
              <label htmlFor=''>Organic</label>
            </div>
            <span>3</span>
          </div>
          <div className='d-flex justify-content-between'>
            <div className=''>
              <input type='checkbox' className='checkbox me-4' />
              <label htmlFor=''>Organic</label>
            </div>
            <span>3</span>
          </div>
          <div className='d-flex justify-content-between'>
            <div className=''>
              <input type='checkbox' className='checkbox me-4' />
              <label htmlFor=''>Organic</label>
            </div>
            <span>3</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
