import React from "react";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import Sobreimg from "../../assets/Sobreimg.svg";
import "./style.css";

export default function Sobre() {
  return (
    <>
      <Menu />
      <div className="container">
        <div className="infoCard">
          <h1>Sobre Nós</h1>
          <p>
            Somos líderes na transformação do cenário energético, focando em
            eficiência e sustentabilidade. Oferecemos soluções personalizadas
            para empresas e residências, reduzindo o uso de energia e impacto
            ambiental. Nosso compromisso é claro: liderar a transição
            sustentável, reduzindo emissões de carbono, promovendo eficiência e
            inovação tecnológica. Diferenciamos-nos pela customização, expertise
            técnica, resultados palpáveis e parcerias estratégicas. Junte-se a
            nós para um futuro energético responsável.
          </p>
          <button className="btn" aria-label="Fale Conosco">
            Fale Conosco <span className="arrow"></span>
          </button>
        </div>
        <img src={Sobreimg} alt="Imagem descritiva do negócio" className="image"></img>
      </div>
      <Footer />
    </>
  );
}
