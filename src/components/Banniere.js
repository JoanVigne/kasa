import React from "react";
import "./_banniere.scss";

const banniere = ({ img, text }) => {
  return (
    <section className="banniere">
      <img src={img} alt={text} />
      <span className="assombrissement"></span>
      {text && <h1>Chez vous, partout et ailleurs</h1>}
    </section>
  );
};

export default banniere;
