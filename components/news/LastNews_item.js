import React from "react";
import { FiCalendar, FiLink } from "react-icons/fi";
import Link from 'next/link';
import BaseURL from '@/config/index';
import moment from 'moment-jalaali';
moment.loadPersian({ usePersianDigits: true });
function LAstNewsItem(props) {
  return (
    <div className="card thumbnail-card" key={props.id}>
      <Link className="link" href={`news/${props.id}`} passHref>
        <div className="card-icon">
          <div className="highlight">
            <FiLink />
          </div>
          <img src={BaseURL + props.cover} alt=""></img>
        </div>
        <div className="card-title" title={props.title}>{props.title.slice(0, 70) + "..."} </div>
        <div className="date">
          <FiCalendar />
          {/* {moment(props.date, "YYYY/MM/DD").format("YYYY/MM/DD")} */}
          {moment(props.date).format(
            "jD jMMMM jYYYY"
          )}
        </div>
      </Link>
    </div>
  );
}

export default LAstNewsItem;
