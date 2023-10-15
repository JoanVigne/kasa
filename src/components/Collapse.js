import React, { useState } from "react";
import "./_collapse.scss";
import arrow from "../assets/img/arrow.png";

const Collapse = ({ title, content }) => {
  const [openClose, setOpenClose] = useState(false);
  const toggleParagraph = () => {
    setOpenClose(!openClose);
  };

  return (
    <div className="collapse">
      <div className="title-arrow">
        <div className="title">{title}</div>
        <img
          className={openClose ? "rotate" : ""}
          src={arrow}
          alt="fleche clicable"
          tabIndex="0"
          onClick={toggleParagraph}
        ></img>
      </div>
      <div className={` containerP ${openClose ? "open" : ""}`}>
        <p className={openClose ? "para-coming" : ""}>{content}</p>
      </div>
    </div>
  );
};

export default Collapse;
