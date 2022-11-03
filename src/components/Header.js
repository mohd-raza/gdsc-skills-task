import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { IoCall } from "react-icons/io5";
const Header = () => {
  return (
    <div className="bg-[#0984E3] h-[60px] text-white">
      <div className="flex flex-row justify-around pt-4">
        <div className="flex flex-row justify-center">
          <div className="flex flex-row justify-center">
            <FaTelegramPlane className="text-[23px]" />
            <h1>mail.uremail.com</h1>
          </div>
          <div className="flex flex-row justify-center">
            <IoCall className="text-[23px]" />
            <h1>mail.uremail.com</h1>
          </div>
        </div>
        <div className="flex flex-row justify-around ">
          <BsFillPersonFill className="text-[23px]" />
          <h1 className="text-[18px]">Login/Signup</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
