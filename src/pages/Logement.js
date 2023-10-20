import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./_logement.scss";
import Stars from "../components/logement/stars";
import Carrousel from "../components/logement/carrousel";
import Collapse from "../components/collapse";

export default function Logement() {
  // fetch logement
  const { id } = useParams();
  const [ceLogement, setceLogement] = useState({});
  const [loading, setLoading] = useState(true);

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
        const thisone = data.find((logement) => logement.id === id);
        setceLogement(thisone || {}); // Utilisation d'un objet vide comme valeur par défaut
        setLoading(false);
      } catch (error) {
        console.error("Erreur : ", error);
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) {
    return <p>Chargement en cours...</p>;
  }

  if (Object.keys(ceLogement).length === 0) {
    return (
      <main className="logement">
        <h1 style={{ textAlign: "center" }}>
          Ce logement n'est plus disponible
        </h1>
      </main>
    );
  }

  return (
    <main className="logement">
      {ceLogement.cover && <Carrousel images={ceLogement.pictures} />}

      <div className="infoContainer">
        <div className="titre-location-tags-container">
          <h1>{ceLogement.title}</h1>
          <h2>{ceLogement.location}</h2>
          <div className="buttons">
            {ceLogement.tags &&
              ceLogement.tags.map((tag) => <button key={tag}>{tag}</button>)}
          </div>
        </div>
        <div className="host-rating">
          <div className="host">
            <h3>{ceLogement.host && ceLogement.host.name}</h3>
            {ceLogement.host && (
              <img src={ceLogement.host.picture} alt={ceLogement.host.name} />
            )}
          </div>

          {ceLogement.host && <Stars numberOfImages={ceLogement.rating} />}
        </div>
      </div>

      <div className="description-equipement-container">
        <Collapse
          title="Description"
          content={ceLogement.description || "Description non disponible"}
        />
        <Collapse
          title="Équipements"
          content={
            ceLogement.equipments && ceLogement.equipments.length > 0
              ? ceLogement.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))
              : <li>Aucun équipement disponible</li> ||
                "Équipements non disponible"
          }
        />
      </div>
    </main>
  );
}
