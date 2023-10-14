import React, { useState } from "react";
import arrowLeft from "../../assets/img/arrow_back_ios-24px 1.png";
import arrowRight from "../../assets/img/arrow_forward_ios-24px 1.png";
import "./_carrousel.scss";

const Carrousel = ({ images }) => {
  const [index, setIndex] = useState(0);

  function imageSuivante() {
    if (index < images.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function imagePrecedente() {
    if (index <= 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(index - 1);
    }
  }
  return (
    <div className="carrousel">
      <img src={images[index]} alt="aperçu logement" />
      <img
        className="arrowLeft"
        src={arrowLeft}
        alt=""
        onClick={imagePrecedente}
      />
      <img
        className="arrowRight"
        src={arrowRight}
        alt=""
        onClick={imageSuivante}
      />
    </div>
  );
};

export default Carrousel;
