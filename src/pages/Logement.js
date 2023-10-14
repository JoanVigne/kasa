import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import arrow from "../assets/img/arrow.png";

import "./_logement.scss";
import Stars from "../components/logement/Stars";
import Carrousel from "../components/logement/Carrousel";

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

  // Ouvrir/Fermer les boîtes
  const [openCloseDescription, setopenCloseDescription] = useState(false);
  const toggleDescription = () => {
    setopenCloseDescription(!openCloseDescription);
  };
  const [openCloseEquipment, setopenCloseEquipment] = useState(false);
  const toggleEquipments = () => {
    setopenCloseEquipment(!openCloseEquipment);
  };

  if (loading) {
    return <p>Chargement en cours...</p>;
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
        <div className="box boxDescription">
          <div className="title-arrow">
            <div className="title">Description</div>
            <img
              className={openCloseDescription ? "rotate" : ""}
              src={arrow}
              alt="flèche cliquable"
              tabIndex="0"
              onClick={toggleDescription}
            />
          </div>
          <div className={`containerP ${openCloseDescription ? "open" : ""}`}>
            <p className={openCloseDescription ? "para-coming" : ""}>
              {ceLogement.description || "Description non disponible"}
            </p>
          </div>
        </div>
        <div className="box boxEquipement">
          <div className="title-arrow">
            <div className="title">Équipements</div>
            <img
              className={openCloseEquipment ? "rotate" : ""}
              src={arrow}
              alt="flèche cliquable"
              tabIndex="0"
              onClick={toggleEquipments}
            />
          </div>
          <div className={`containerP ${openCloseEquipment ? "open" : ""}`}>
            <ul className={openCloseEquipment ? "para-coming" : ""}>
              {ceLogement.equipments && ceLogement.equipments.length > 0 ? (
                ceLogement.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))
              ) : (
                <li>Aucun équipement disponible</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
