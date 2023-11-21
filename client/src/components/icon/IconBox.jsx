import React from "react";
import { ImWhatsapp } from "react-icons/im";
import { SiInstagram } from "react-icons/si";
import { SlSocialFacebook } from "react-icons/sl";
import { BsTwitterX } from "react-icons/bs";

import "./icon.scss";

function IconBox() {
  return (
    <>
      <ul className=' d-flex gap-5  me-5 mb-0'>
        <li>
          <ImWhatsapp className='icon' />
        </li>
        <li>
          <SiInstagram className='icon' />
        </li>
        <li>
          <SlSocialFacebook className='icon' />
        </li>
        <li>
          <BsTwitterX className='icon' />
        </li>
      </ul>
    </>
  );
}

export default IconBox;
