import React from "react";
import { FiCalendar } from "react-icons/fi";
import moment from "moment-jalaali";
import Link from 'next/link';
import { Col } from "react-bootstrap";
moment.loadPersian({ usePersianDigits: true });
function NewsItem(props) {
  moment.locale("fa", { useGregorianParser: false });
  return (
    
      <Link
        className="link"
        href={`news/${props.id}`}
        key={props.keyy}
      >
        <div className="blog-item">
          <div className="_cover">
            <img
              src={props.imgCover}
              alt={props.title}
            />
          </div>
          <div className="p-2">
            <div className="blog-item-title">
              <div className="blog-item-status">
                <p style={{ display: "none" }}>
                  {/* {moment(props.date, "YYYY/MM/DD")
                .locale("fa")
              .format("YYYY/MM/DD")} */}
                </p>

                <div style={{ fontSize: "1rem" }}>
                  <FiCalendar />
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
          {/* <div className="newsStatus">
            <FiShare />
          </div> */}
        </div>
      </Link>
  );
}

export default NewsItem;
