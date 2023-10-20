import Banniere from "../components/banniere";
import Gallerie from "../components/accueil/gallerie";
import imgGallerie from "../assets/img/mer.png";

export default function Accueil() {
  return (
    <main className="accueil">
      <Banniere img={imgGallerie} text={"Chez vous, partout et ailleurs"} />
      <Gallerie />
    </main>
  );
}
