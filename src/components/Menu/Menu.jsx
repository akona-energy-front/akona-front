import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";

export default function Menu() {
  return (
    <nav className="menu">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <ul className="menu-list">
        <li>
          <Link to="/home" className="menu-item">
            Home
          </Link>
        </li>
        <li>
          <Link to="/contato" className="menu-item">
            Contato
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
      </ul>
      <button className="fale-conosco-button">Fale Conosco</button>
    </nav>
  );
}
