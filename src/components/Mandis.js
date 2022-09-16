import { Breadcrumbs, Link, Stack, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import "./Mandis.css";
import { TbEdit } from "react-icons/tb";
import { BsTextLeft, BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";
import { IoChevronForwardSharp, IoLocationSharp } from "react-icons/io5";
import { AiOutlineStock } from "react-icons/ai";
import { HiChevronUp } from "react-icons/hi";
import cropImage from "../images/Sugarcane 1.png";
import BarChart from "./Barchart";
import india from "../images/india.png";
import map from "../images/map.png";
import market from "../images/market.png";
import vegetables from "../images/vegetables.png";
import vector from "../images/Vector.png";
import { Accordion, Card } from "react-bootstrap";
import CustomToggle from "./CustomToggle";
import { mandiCropData } from "./MandiCropData";

const Mandis = () => {
  const [display, setDisplay] = useState(false);
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      <img src={india} alt="india" className="bread-height-img" />
    </Link>,
    <Link underline="hover" key="2" color="inherit" href="/core">
      <img src={map} alt="map" className="bread-height-img" />
    </Link>,
    <Link underline="hover" key="1" color="inherit" href="/">
      <img src={market} alt="market" className="bread-height-img" />
    </Link>,
    <Link underline="hover" key="2" color="inherit" href="/core">
      <img src={vegetables} alt="vegetables" className="bread-height-img" />
      <span className="breadcrumber-nav-url-start ms-2">Sugarcane</span>
    </Link>,
  ];
  const showDataBar = useRef(null);
  const showDataBarDisplay = (ind) => {
    if (display) {
      showDataBar.current.classList.add(`data-bar-display-is-none`);
      setDisplay(false);
    } else {
      showDataBar.current.classList.remove(`data-bar-display-is-none`);
      setDisplay(true);
    }
  };
  return (
    <>
      <div className="container mt-5">
        <div className="container mt-5 breadcrumb-bgcolor d-flex justify-content-between align-items-center">
          <div className="d-flex pt-2 ps-2">
            <p className="breadcrumber-nav-url-start">Shopping Result For:</p>
            <Breadcrumbs
              separator={<IoChevronForwardSharp fontSize="larg" />}
              aria-label="breadcrumb"
              className="ms-2 mt-1"
              style={{ marginTop: "2px" }}
            >
              {breadcrumbs}
            </Breadcrumbs>
          </div>
          <div className="searchEdit">
            Modify Search <TbEdit />
          </div>
        </div>

        <div className="search-filter-div">
          <div className="fs-5">
            <span className="" style={{ fontWeight: "600" }}>
              Available Mandis:{" "}
            </span>{" "}
            05
          </div>
          <div className="search-filter-sort mt-2">
            <input
              type="text"
              placeholder="Sort By"
              className="search-filter-input ps-2"
            />
            <BsTextLeft
              className="mb-1 me-2 text-primary"
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
        
        {/* Start Accordian */}
        {
          mandiCropData.map((item,index)=>{
            return(
              <Accordion defaultActiveKey={0} className="mt-3">
                <Card style={{border:"none"}}>
                  <Card.Header style={{backgroundColor:"transparent", border:"0", padding:"0"}}>
                    <CustomToggle eventKey={index}>
                    <div
                          className="d-flex py-1 ps-2 pe-4"
                          style={{ }}
                        >
                          <div className="d-flex col-8">
                            <img
                              src={cropImage}
                              alt=""
                              className=" bg-white p-2 mt-2 crop-image-dim"
                            />
                            <div className="pt-2 ms-4">
                              <h4 className="heading-of-crop mt-2">{item.crop_name}</h4>
                              <div className="d-flex">
                                <IoLocationSharp className="mt-2 fs-5 location-icon-border" />
                                <h5 style={{ marginTop: "5px" }}>
                                {item.address}
                                </h5>
                              </div>
                            </div>
                          </div>
                          <div className="col-4 text-start">
                            <p style={{ color: "gray", fontWeight: "470" }}>
                              Rate/Quintal
                            </p>
                            <div className="d-flex justify-content-between margin-top-neg">
                              <p>
                                {" "}
                                <BsArrowDownCircle className="text-danger" />{" "}
                                <span style={{ color: "gray", fontWeight: "bold" }}>
                                  Min:
                                </span>{" "}
                                <b>INR {item.min_price}</b>
                              </p>
                              <p>
                                <BsArrowUpCircle className="text-success" />{" "}
                                <span style={{ color: "gray", fontWeight: "bold" }}>
                                  Max:
                                </span>{" "}
                                <b>INR {item.max_price}</b>
                              </p>
                            </div>
                            <div className="d-flex justify-content-between margin-top">
                              <p>
                                {" "}
                                <BsArrowDownCircle className="text-danger" />{" "}
                                <span style={{ color: "gray", fontWeight: "bold" }}>
                                  Today:
                                </span>{" "}
                                <b>INR {item.today_price}</b>
                              </p>
                              <button className="price-trends">
                                {" "}
                                <img src={vector} alt="vector" className=" bg-success" style={{color:"black"}}/>{" "}
                                <span className="mx-1" style={{ marginBottom: "3px" }}>
                                  Price Trends
                                </span>{" "}
                                <HiChevronUp className="fs-5" />
                              </button>
                            </div>
                          </div>
                    </div>
                    </CustomToggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey={index}>
                    <Card.Body>
                    <div>
                          <div className="d-flex justify-content-between mt-3 week-maxmin-data-div">
                            <div className="week-wise-peice-border-div">
                              <div className="week-wise-peice-border">
                                <h6>MON 23 JAN</h6>
                                <p className="text-danger margin-top-neg-price">
                                  {" "}
                                  INR 1800
                                </p>
                              </div>
                              <div className="visibility-week-data">
                                <p className="margin-top-neg-price">
                                  {" "}
                                  <BsArrowDownCircle className="text-danger" />{" "}
                                  <span className="ms-1">Min:</span> <b>INR 1800</b>{" "}
                                </p>
                                <p className="margin-top-neg">
                                  {" "}
                                  <BsArrowUpCircle className="text-success" />{" "}
                                  <span className="ms-1">Max:</span> <b>INR 1950</b>{" "}
                                </p>
                              </div>
                            </div>
                            <div className="week-wise-peice-border-div">
                              <div className="week-wise-peice-border">
                                <h6>MON 23 JAN</h6>
                                <p className="text-danger margin-top-neg-price">
                                  {" "}
                                  INR 1900
                                </p>
                              </div>
                              <div className="visibility-week-data">
                                <p className="margin-top-neg-price">
                                  {" "}
                                  <BsArrowDownCircle className="text-danger" />{" "}
                                  <span className="ms-1">Min:</span> <b>INR 1800</b>{" "}
                                </p>
                                <p className="margin-top-neg">
                                  {" "}
                                  <BsArrowUpCircle className="text-success" />{" "}
                                  <span className="ms-1">Max:</span> <b>INR 1950</b>{" "}
                                </p>
                              </div>
                            </div>
                            <div className="week-wise-peice-border-div">
                              <div className="week-wise-peice-border">
                                <h6>MON 23 JAN</h6>
                                <p className="text-danger margin-top-neg-price">
                                  {" "}
                                  INR 2000
                                </p>
                              </div>
                              <div className="visibility-week-data">
                                <p className="margin-top-neg-price">
                                  {" "}
                                  <BsArrowDownCircle className="text-danger" />{" "}
                                  <span className="ms-1">Min:</span> <b>INR 1800</b>{" "}
                                </p>
                                <p className="margin-top-neg">
                                  {" "}
                                  <BsArrowUpCircle className="text-success" />{" "}
                                  <span className="ms-1">Max:</span> <b>INR 1950</b>{" "}
                                </p>
                              </div>
                            </div>
                            <div className="week-wise-peice-border-div">
                              <div className="week-wise-peice-border">
                                <h6>MON 23 JAN</h6>
                                <p className="text-danger margin-top-neg-price">
                                  {" "}
                                  INR 2100
                                </p>
                              </div>
                              <div className="visibility-week-data">
                                <p className="margin-top-neg-price">
                                  {" "}
                                  <BsArrowDownCircle className="text-danger" />{" "}
                                  <span className="ms-1">Min:</span> <b>INR 1800</b>{" "}
                                </p>
                                <p className="margin-top-neg">
                                  {" "}
                                  <BsArrowUpCircle className="text-success" />{" "}
                                  <span className="ms-1">Max:</span> <b>INR 1950</b>{" "}
                                </p>
                              </div>
                            </div>
                            <div className="week-wise-peice-border-div">
                              <div className="week-wise-peice-border">
                                <h6>MON 23 JAN</h6>
                                <p className="text-danger margin-top-neg-price">
                                  {" "}
                                  INR 2200
                                </p>
                              </div>
                              <div className="visibility-week-data">
                                <p className="margin-top-neg-price">
                                  {" "}
                                  <BsArrowDownCircle className="text-danger" />{" "}
                                  <span className="ms-1">Min:</span> <b>INR 1800</b>{" "}
                                </p>
                                <p className="margin-top-neg">
                                  {" "}
                                  <BsArrowUpCircle className="text-success" />{" "}
                                  <span className="ms-1">Max:</span> <b>INR 1950</b>{" "}
                                </p>
                              </div>
                            </div>
                            <div className="week-wise-peice-border-div">
                              <div className="week-wise-peice-border">
                                <h6>MON 23 JAN</h6>
                                <p className="text-danger margin-top-neg-price">
                                  {" "}
                                  INR 2300
                                </p>
                              </div>
                              <div className="visibility-week-data">
                                <p className="margin-top-neg-price">
                                  {" "}
                                  <BsArrowDownCircle className="text-danger" />{" "}
                                  <span className="ms-1">Min:</span> <b>INR 2300</b>{" "}
                                </p>
                                <p className="margin-top-neg">
                                  {" "}
                                  <BsArrowUpCircle className="text-success" />{" "}
                                  <span className="ms-1">Max:</span> <b>INR 2550</b>{" "}
                                </p>
                              </div>
                            </div>
                            <div className="week-wise-peice-border-div">
                              <div className="week-wise-peice-border">
                                <h6>MON 23 JAN</h6>
                                <p className="text-danger margin-top-neg-price">
                                  {" "}
                                  INR 1800
                                </p>
                              </div>
                              <div className="visibility-week-data">
                                <p className="margin-top-neg-price">
                                  {" "}
                                  <BsArrowDownCircle className="text-danger" />{" "}
                                  <span className="ms-1">Min:</span> <b>INR 1800</b>{" "}
                                </p>
                                <p className="margin-top-neg">
                                  {" "}
                                  <BsArrowUpCircle className="text-success" />{" "}
                                  <span className="ms-1">Max:</span> <b>INR 1950</b>{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                          <BarChart />
                        </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
    </Accordion>
            )
          })
        }
        {/* End Accordian */}
      </div>
    </>
  );
};

export default Mandis;
