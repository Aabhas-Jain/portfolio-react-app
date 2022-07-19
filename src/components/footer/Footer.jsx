import React from "react";
import "./footer.css";
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiDevdotto} from 'react-icons/si'
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className="footer__logo">
        AabhasJain
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        {/* <li>
          <a href="#services">Services</a>
        </li> */}
        <li>
          <a href="#portfolio">Projects</a>
        </li>
        {/* <li>
          <a href="#testimonials">Testimonials</a>
        </li> */}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/aabhasjain96/" target="_blank">
          <BsLinkedin />
        </a>
        <a href="https://github.com/Aabhas-Jain" target="_blank">
          <FaGithub />
        </a>
        <a href="https://dev.to/aabhasjain" target="_blank">
          <SiDevdotto />
        </a>
        <a href="https://www.facebook.com/aabhasjain1996/" target="_blank">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/aabhas_jain_96/" target="_blank">
          <FiInstagram />
        </a>
        <a href="https://twitter.com/Aabhas1996" target="_blank">
          <IoLogoTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Aabhas Jain. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
