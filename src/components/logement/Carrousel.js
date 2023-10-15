import React, { useState } from "react";
import arrowLeft from "../../assets/img/arrow_back_ios-24px 1.png";
import arrowRight from "../../assets/img/arrow_forward_ios-24px 1.png";
import "./_carrousel.scss";

const Carrousel = ({ images }) => {
  const [index, setIndex] = useState(0);

  const [loaded, setLoaded] = useState(true);

  function imageSuivante() {
    // enleve la classe "loaded" pour faire disparaitre le carrousel.
    setLoaded(false);
    // 0.3s apres, changement d'image et ajout de .loaded pour apparition transition opacity
    setTimeout(() => {
      if (index < images.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
      setLoaded(true);
    }, 300);
  }
  function imagePrecedente() {
    setLoaded(false);
    setTimeout(() => {
      if (index <= 0) {
        setIndex(images.length - 1);
      } else {
        setIndex(index - 1);
      }
      setLoaded(true);
    }, 300);
  }
  return (
    <div className={`carrousel ${loaded ? "loaded" : ""}`}>
      <img src={images[index]} alt="aperçu logement" />
      <img
        className="arrow arrowLeft"
        style={{ visibility: images.length === 1 ? "hidden" : "visible" }}
        src={arrowLeft}
        alt=""
        onClick={imagePrecedente}
      />
      <img
        className="arrow arrowRight"
        style={{ visibility: images.length === 1 ? "hidden" : "visible" }}
        src={arrowRight}
        alt=""
        onClick={imageSuivante}
      />
      <div
        className="numerotation"
        style={{ visibility: images.length === 1 ? "hidden" : "visible" }}
      >
        {index + 1}/{images.length}
      </div>
    </div>
  );
};

export default Carrousel;
