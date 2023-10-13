import Banniere from "../components/accueil/Banniere";
import "./_accueil.scss";
import Gallerie from "../components/accueil/Gallerie";

export default function Accueil() {
  return (
    <main>
      <Banniere />
      <Gallerie />
    </main>
  );
}
