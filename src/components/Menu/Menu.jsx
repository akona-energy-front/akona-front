import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import "./Menu.scss";

export default function Menu() {

  return (
    <div className="menu">
  <div className="logo">
    <img src={Logo} alt="Logo" />
  </div>
  <ul className= "menu-list" >
    <li>
      <Link to="/" className="menu-item">
        Home
      </Link>
    </li>
    <li>
      <Link to="/vantagens" className="menu-item">
        Vantagens
      </Link>
    </li>
    <li>
      <Link to="/servicos" className="menu-item">
        Serviços
      </Link>
    </li>
    <li>
      <Link to="/sobre" className="menu-item">
        Sobre Nós
      </Link>
    </li>
    <li>
      <Link to="/login" className="menu-item">
        Login
      </Link>
    </li>
  </ul>
  <Link to="/fale" className="fale-conosco-button">
    Fale Conosco
  </Link>
</div>
  );
}
