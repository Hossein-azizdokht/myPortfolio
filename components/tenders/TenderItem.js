import React from "react";
import {FiCalendar } from "react-icons/fi";
import moment from "moment-jalaali";
import { Col } from "react-bootstrap";
import Link from "next/link";

moment.loadPersian({ usePersianDigits: true });

const TenderItem = (props) => {
    moment.locale("fa", { useGregorianParser: false });
  return (
    <Col lg={4} key={props.key} className="eachItem col-lg-4 col-md-6 col-sm-12 mb-5">
      {/* <div
        className="link"
        onClick={() => navigate(`/showTender?id=${props.id}`)}
        type={props.tag}
        key={props.keyy}
      > */}
        <Link href={`tenders/${props.id}`}>
        <div
          className={`blog-item ${
            moment() > moment(props.endDate) ? "expired" : ""
          }`}
        >
          <div className="_cover">
            {props.kind == "1" && (
              <img
              src='/images/tender/tender.jpg'
                alt={props.title}
                style={{ width: "100%" }}
             
              />
            )}
            {props.kind == "2" && (
              <img
              src='/images/tender/Auction.jpg'
                alt={props.title}
             
                style={{ width: "100%" }}
              />
            )}
            {/* {moment() > moment(props.endDate) && (<div className="cornerMark-red">منقضی شده است</div>)} */}
          </div>
          <div className="p-2">
            <div className="blog-item-title">
              <div className="blog-item-status">
                <div>
                  <FiCalendar
                    style={{ marginLeft: "unset", marginBottom: 3 }}
                  />
                </div>
                <div style={{ fontSize: "1rem", lineHeight: "1" }}>
                  {moment(props.date).format("jD")}
                </div>
                <div>{moment(props.date).format("jMMMM")}</div>
              </div>
              <div title={props.title}>
                {props.title.length > 100
                  ? props.title.slice(0, 100) + "..."
                  : props.title}
              </div>
            </div>

            <div className="blog-item-desc">{props.desc}</div>
          </div>
        </div>
        </Link>
      {/* </div> */}
    </Col>
  );
};

export default TenderItem;
