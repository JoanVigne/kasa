import React from "react";
import starActive from "../../assets/img/star-active 1.png";
import starInactive from "../../assets/img/star-inactive 1.png";
import "./_stars.scss";

const Stars = ({ numberOfImages }) => {
  const images = [];

  for (let i = 0; i < numberOfImages; i++) {
    images.push(<img key={i} src={starActive} alt="étoile orange" />);
  }
  if (images.length !== 5) {
    let numberOfEmptyStars = 5 - numberOfImages;
    for (let i = 0; i < numberOfEmptyStars; i++) {
      images.push(<img key={i + 5} src={starInactive} alt="étoile vide" />);
    }
  }

  return <div className="rating">{images}</div>;
};

export default Stars;
