import React from "react";

function LogoRadar(props) {
  return (
    <section className={`stage ${props.Class}`}>
      {/* <div class="container--circles">
        <div class="circle1"></div>
        <div class="circle1"></div>
        <div class="circle1"></div>
        <div class="circle1"></div>
        <div class="circle1"></div>
        <div class="circle1"></div>
        <div class="circle1"></div>
        <div class="circle1"></div>
        <div class="circle1"></div>
        <div class="circle1"></div>
      </div> */}
      <div class="wave scale-50">
        <div class="wave__container">
          <div class="wave__circle"></div>
          <div class="wave__circle"></div>
          <div class="wave__circle"></div>
        </div>
      </div>
      <figure className="ball">
        <span className="shadow1"></span>
      </figure>
    </section>
  );
}

export default LogoRadar;
