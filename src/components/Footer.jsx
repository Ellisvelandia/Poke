import React from "react";
import { Link } from "react-router-dom";
import squirtle from "../assets/squirtle.json";
import Lottie from "lottie-react";

const Footer = () => {
  return (
    <footer className="bg-[#b6e1fd] flex sticky bottom-0 z-10">
      <div className="flex w-full justify-center h-28">
        <Link to="/">
          <Lottie animationData={squirtle} className="w-20 h-20" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
