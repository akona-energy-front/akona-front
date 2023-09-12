import React from "react";
import "./Menu.css";
import Logo from "../../assets/Logo.svg";

export default function Menu () {
  return (
    <nav className="menu">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <ul className="menu-list">
        <li>
          <a href="#" className="menu-item">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="menu-item">
            Contato
          </a>
        </li>
        <li>
          <a href="#" className="menu-item">
            Serviços
          </a>
        </li>
        <li>
          <a href="#" className="menu-item">
            Sobre Nós
          </a>
        </li>
      </ul>
      <button className="fale-conosco-button">Fale Conosco</button>
    </nav>
  );
}
