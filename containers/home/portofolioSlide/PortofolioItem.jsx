import React from "react";
import Link from "next/link";
import { FiLink } from "react-icons/fi";
const PortofolioItem = (props) => {
  return (
    <div className="portfolioCard">
      <div
        className="card thumbnail-card relative"
        style={{ direction: "rtl" }}
      >
        <div className="link">
          <div className="card-icon">
            <div className="highlight flex-col">
              {/* <FiLink /> */}
              <div
                className="card-title text-left p-3 font-medium !text-sm z-50 !text-slate-800"
                title={props.title}
              >
                {props.title}
                <div className="flex flex-wrap">
                  {props.icons?.map((icon, index) => (
                    <div
                      key={index}
                      className="mr-1 mt-2 whitespace-nowrap text-xs bg-slate-500 text-white px-2 py-1 rounded-full"
                    >
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <img src={props.cover} alt=""></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortofolioItem;
