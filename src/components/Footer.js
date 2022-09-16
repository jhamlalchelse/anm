import React from "react";
import "./Footer.css";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
  AiOutlineGoogle,
} from "react-icons/ai";
import {
    RiFacebookFill, RiLinkedinFill
  } from "react-icons/ri";
import {FaArrowCircleUp} from 'react-icons/fa'
import { Button } from "react-bootstrap";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer mt-3">
          <div className="pt-2 fs-4 d-flex justify-content-center">
            <div className="social-icon-border">
              <RiFacebookFill />
            </div>
            <div className="social-icon-border">
            <AiOutlineTwitter />
            </div>
            <div className="social-icon-border">
            <AiOutlineGoogle />
            </div><div className="social-icon-border">
            <AiOutlineInstagram />
            </div>
            <div className="social-icon-border">
            <RiLinkedinFill />
            </div>
          </div>
          <p className="text-center my-3">
            Cropway empowers farmers by making technology accesiball to all
          </p>
          <div className="d-flex justify-content-evenly footer-service">
            <div>
              <h5>SUPPORT</h5>
              <p>Returns and Exchange</p>
            </div>
            <div>
              <h5>COMPANY</h5>
              <p>About Us</p>
              <p>Contact Us</p>
            </div>
            <div>
              <h5>LEGAL</h5>
              <p>Privacy Policy</p>
              <p>Terms and Conditions</p>
            </div>
            <div>
              <h5>SAlE WITH US</h5>
              <p>sell On Cropway</p>
              <p>Avail Services</p>
            </div>
            <div className="bottomToTopArrow-relative">
             <Button onClick={()=>window.scrollTo(0, 0)} className="bottomToTopArrow bg-transparent" style={{border:"none", outline:"none"}}> <FaArrowCircleUp className="arrow-up-top fs-1"/></Button>
            </div>
          </div>
          <p className="text-center pb-3">&#169; 2021, Cropway.com </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
