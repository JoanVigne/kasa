import Banniere from "../components/Banniere";
import "./_accueil.scss";
import Gallerie from "../components/accueil/Gallerie";
import imgGallerie from "../assets/img/mer.png";

export default function Accueil() {
  return (
    <main className="accueil">
      <Banniere img={imgGallerie} text={"Chez vous, partout et ailleurs"} />
      <Gallerie />
    </main>
  );
}
