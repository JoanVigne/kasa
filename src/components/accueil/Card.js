import React from "react";
import "./_card.scss";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <Link to={`/logement/${data.id}`} className="card">
      <img src={data.cover} alt={data.title} />
      <span></span>
      <figcaption>{data.title}</figcaption>
    </Link>
  );
};

export default Card;
