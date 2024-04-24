import React from "react";

const SectionTitle = (props) => {
  return (
    <div>
      <h4
        className={`section-title has-dots font-light text-slate-800 ${
          props.classes
        } ${props.small ? "text-xl smallSize" : "text-5xl"}`}
      >
        {props.title}
      </h4>
      <p
        className={`mt-[-0.5rem] font-light text-slate-400  ${
          props.small
            ? "pl-0 text-base tracking-[0px]"
            : "pl-[0.2rem] text-xl tracking-[3px]"
        }`}
      >
        {props.subTitle}
      </p>
    </div>
  );
};

export default SectionTitle;
