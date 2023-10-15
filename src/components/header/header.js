import { NavLink } from "react-router-dom";
import logokasa from "../../assets/img/LOGO-KASA.png";
import "./_header.scss";

export default function Header() {
  /*  par default, une classe "active" est ajoutée sur le clic d'un navlink ! */

  return (
    <header>
      <img src={logokasa} alt="" />
      <nav>
        <ul>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>

          <li>
            <NavLink to="/aPropos">A Propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
