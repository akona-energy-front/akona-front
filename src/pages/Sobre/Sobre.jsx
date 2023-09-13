import React from "react";
import Menu from "../../components/Menu/Menu";
import Sobreimg from "../../assets/Sobreimg.svg";
import "./style.css";

export default function Sobre() {
  return (
    <>
      <Menu />
      <div className="container">
        <div className="card">
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
          <a href="#" class="button">
            Fale Conosco <span class="arrow"></span>
          </a>
        </div>
        <img src={Sobreimg} alt="Imagem" class="image"></img>
      </div>
    </>
  );
}
