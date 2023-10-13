import React from "react";
import "./_card.scss";
const Card = (props) => {
  console.log(props.data);
  return (
    <div className="card">
      <img src={props.data.cover} alt={props.data.title} />
      <figcaption>{props.data.title}</figcaption>
    </div>
  );
};

export default Card;
