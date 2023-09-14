import React from "react";
import "./Menu.css";
import Logo from "../../assets/Logo.svg";
import Image from "../../assets/main.svg";

export default function Menu() {
  return (
    <>
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
      <section className="main">
        <div className="main-text">
          <div className="svg-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="58"
              height="2"
              viewBox="0 0 58 2"
              fill="none"
            >
              <path d="M0 1H58" stroke="#54B43C" />
            </svg>
          </div>
          <h4>EFICIÊNCIA ENERGÉTICA</h4>
          <h1>Potencializando sua Energia, Minimizando seu Impacto</h1>
          <p>
            Descubra como pequenas mudanças podem fazer uma grande diferença no
            planeta, Junte-se a nós nessa jornada rumo a um mundo mais
            sustentável e energicamente consciente.
          </p>
          <a href="#" className="btn1">
            Saiba Mais
          </a>
          <a href="#" className="btn2">
            Nossos Serviços
          </a>
        </div>
        <div>
          <img src={Image} alt="" />
        </div>
      </section>
    </>
  );
}
