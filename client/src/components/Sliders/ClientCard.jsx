import React from "react";

import "./slider.scss";

function ClientCard() {
  return (
    <>
      <div className='card position-relative'>
        <div className='cards-img'>
          <img src='./imgs/clnt2.jpg' className='card-img-top' alt='client' />
        </div>

        <div className='card-body text-center'>
          <h2 className='card-title'>Naveen</h2>
          <span>designer</span>
          <p className='card-text'>
            A wonderful serenity has taken possession of entire soul, like these
            sweet mornings of spring which Ienjoy with my whole heart. wonderful
            serenity has taken
          </p>
        </div>
      </div>
    </>
  );
}

export default ClientCard;
