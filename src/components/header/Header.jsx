import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="header__container-right">
          <h5>Hello I'm</h5>
          <h1>Aabhas Jain</h1>
          <h5 className="text-light">Front-end Web Developer</h5>
          <CTA />
        </div>

        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#footer" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
