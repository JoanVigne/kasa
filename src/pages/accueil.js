import { useEffect } from "react";
import Banniere from "../components/accueil/Banniere";
import "./_accueil.scss";
import Gallerie from "../components/accueil/Gallerie";

export default function Accueil() {
  useEffect(() => {
    const getLogements = async () => {
      const response = await fetch("http://localhost:3000/kasa-produits.json");
      const data = await response.json();
      console.log(data);
    };
    getLogements();
  }, []);

  return (
    <main>
      <Banniere />
      <Gallerie />
      <h2>Accueil</h2>
    </main>
  );
}
