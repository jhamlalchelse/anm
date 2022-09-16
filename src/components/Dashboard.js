import React from "react";
import { Col, Row } from "react-bootstrap";
import { BsList, BsSearch, BsCart,BsHeart,BsPersonCircle } from "react-icons/bs";
import { BiCamera } from "react-icons/bi";
import { GrLanguage } from "react-icons/gr";
import { FaUserCircle } from "react-icons/fa";
import "./Dashboard.css";
import NavbarPage from "./Navbar";
import Mandis from "./Mandis";
import Footer from "./Footer";

const Dashboard = () => {
  return (
    <>
      <Row className=" d-flex align-items-center mx-5">
        <Col className="d-flex">
          <BsList className="header-hamburger fs-3 me-2" />
          <h3 className="" style={{fontWeight:"700", fontFamily:"Georgia"}}>CROPWAY</h3>
        </Col>
        <Col>
          <div className="header-search-bar">
            <BsSearch className="fs-5" />
            <input
              type="text"
              placeholder="Search for Product, brand & more"
              className="header-search-input"
            />
            <BiCamera className="fs-5" />
          </div>
        </Col>
        <Col>
        <div className="d-flex justify-content-between pt-3 ms-3 mb-2 header-cart-and-user w-75">
            <div className="text-center">
              <GrLanguage className="fs-5"/>
              <p>Language</p>
            </div>
            <div className="text-center">
              <BsCart className="fs-5" />
              <p>Cart</p>
            </div>
            <div className="text-center">
              <BsHeart className="fs-5"/>
              <p>Whishlist</p>
            </div>
            <div className="text-center">
              <FaUserCircle className="fs-5" />
              <p>Login</p>
            </div>
          </div>
        </Col>
      </Row>

      <NavbarPage />
      <Mandis />
      <Footer/>

    </>
  );
};

export default Dashboard;
