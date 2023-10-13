import React, { useState } from "react";
import "./_box.scss";
import arrow from "../../assets/img/arrow.png";

const Box = () => {
  const [openClose, setOpenClose] = useState(false);
  const toggleParagraph = () => {
    setOpenClose(!openClose);
  };

  return (
    <div className="cardApropos">
      <div className="title-arrow">
        <div className="title">title</div>
        <img
          className={openClose ? "rotate" : ""}
          src={arrow}
          alt="fleche clicable"
          tabIndex="0"
          onClick={toggleParagraph}
        ></img>
      </div>
      <div className={` containerP ${openClose ? "open" : ""}`}>
        <p className={openClose ? "para-coming" : ""}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
          nam dolor repellendus ex at tenetur. Molestias alias facere odit, hic
          eos, reprehenderit nesciunt qui blanditiis quis, eius iste placeat
          nemo.
        </p>
      </div>
    </div>
  );
};

export default Box;
