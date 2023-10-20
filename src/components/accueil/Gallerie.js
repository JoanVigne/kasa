import React, { useState } from "react";
import { useEffect } from "react";
import "./_gallerie.scss";
import Card from "./card";

const Gallerie = () => {
  const [logements, setDataLogements] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/kasa-produits.json"
        );
        if (!response.ok) {
          throw new Error("La requête a échoué.");
        }
        const data = await response.json();
        setDataLogements(data);
      } catch (error) {
        console.error("Erreur : ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="gallerie">
      {logements != null &&
        logements.map((logement) => <Card key={logement.id} data={logement} />)}
    </section>
  );
};

export default Gallerie;
