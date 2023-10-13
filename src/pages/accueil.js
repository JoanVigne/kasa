import Banniere from "../components/Banniere";
import "./_accueil.scss";
import Gallerie from "../components/accueil/Gallerie";

export default function Accueil() {
  return (
    <main className="accueil">
      <Banniere />
      <Gallerie />
    </main>
  );
}
