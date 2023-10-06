import logokasa from "../../assets/img/LOGO-KASA.png";
import "./_header.scss";

export default function Header() {
  return (
    <header>
      <img src={logokasa} alt="" />
      <nav>
        <ul>
          <li>
            <a href="/">Accueil</a>
          </li>

          <li>
            <a href="/aPropos">A Propos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
