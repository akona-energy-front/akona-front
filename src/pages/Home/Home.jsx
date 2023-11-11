import React from "react";
import Menu from "../../components/Menu/Menu";
import "./Home.scss";
import Image from "../../assets/main.svg";
import Footer from "../../components/Footer/Footer";
import Secimg from "../../assets/Secimg.svg";
import Thirdimg from "../../assets/Thirdimg.svg";
import { Link } from "react-router-dom";
import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";
import icon3 from "../../assets/icon3.svg";

export default function Home() {
  return (
    <>
      <Menu />
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
          <a href="/sobre" className="btn1">
            Saiba Mais
          </a>
          
          <a href="/servicos" className="btn2">
            Nossos Serviços
          </a>
        </div>
        <div>
          <img src={Image} alt="" />
        </div>
      </section>

      <section className="tips-section">
        <h1 className="tips-title"><span>Nossos</span> Beneficios</h1>
        <div className="tips-container">
          <div className="tips-cartinha">
            <img src={icon1} alt="icon 1" />
            <div className="tips-text">
              <h1>FÁCIL INSTALAÇÃO</h1>
              <p>Com a nossa solução de energia, a instalação é simples e eficiente.</p>
              <div className="tips-button">
                <button><a href="#">Saiba Mais</a></button>
              </div>
            </div>
          </div>

          <div className="tips-cartinha">
            <img src={icon2} alt="icon 1" />
            <div className="tips-text">
              <h1>ECOLÓGICO</h1>
              <p>A energia solar é amiga do ambiente, gerando eletricidade sem poluir.</p>
              <div className="tips-button">
                <button><a href="#">Saiba Mais</a></button>
              </div>
            </div>
          </div>

          <div className="tips-cartinha">
            <img src={icon3} alt="icon 1" />
            <div className="tips-text">
              <h1>BAIXA MANUTENÇÃO</h1>
              <p>A energia solar tem manutenção econômica, poupando recursos.</p>
              <div className="tips-button">
                <button><a href="#">Saiba Mais</a></button>
              </div>
            </div>
          </div>

          <div className="tips-cartinha">
            <img src={icon1} alt="icon 1" />
            <div className="tips-text">
              <h1>ECONÔMICO.</h1>
              <p>A energia solar é economicamente vantajosa, reduzindo custos.</p>
              <div className="tips-button">
                <button><a href="#">Saiba Mais</a></button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}







