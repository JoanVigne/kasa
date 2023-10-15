import React, { useState } from "react";
import "./_box.scss";
import arrow from "../../assets/img/arrow.png";

const Box = (props) => {
  const [openClose, setOpenClose] = useState(false);
  const toggleParagraph = () => {
    setOpenClose(!openClose);
  };

  return (
    <div className="boxApropos">
      <div className="title-arrow">
        <div className="title">{props.data.title}</div>
        <img
          className={openClose ? "rotate" : ""}
          src={arrow}
          alt="fleche clicable"
          tabIndex="0"
          onClick={toggleParagraph}
        ></img>
      </div>
      <div className={` containerP ${openClose ? "open" : ""}`}>
        <p className={openClose ? "para-coming" : ""}>{props.data.content}</p>
      </div>
    </div>
  );
};

export default Box;
