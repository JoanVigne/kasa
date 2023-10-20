import React from "react";
import "./_banniere.scss";

const Banniere = ({ img, text }) => {
  return (
    <section className="banniere">
      <img src={img} alt={text} />
      <span className="assombrissement"></span>
      {text && <h1>{text}</h1>}
    </section>
  );
};

export default Banniere;
