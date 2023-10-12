import React from "react";
import "./_card.scss";
const Card = (props) => {
  console.log(props);
  return (
    <div className="card">
      {/*  props */}
      <img src="" alt="img location en props" />
      <figcaption>{/*  props */} titre de la location</figcaption>
    </div>
  );
};

export default Card;
