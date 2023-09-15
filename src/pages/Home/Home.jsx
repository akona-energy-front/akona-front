import React from "react";
import Menu from "../../components/Menu/Menu";
import "./Home.css";
import Image from "../../assets/main.svg";
import Footer from "../../components/Footer/Footer";
import Secimg from "../../assets/Secimg.svg";
import Thirdimg from "../../assets/Thirdimg.svg";
import vant from "../../assets/vant.svg";
import icon from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";

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

      <section className="sec-section">
        <div className="sec-image">
          <img src={Secimg} alt="" />
        </div>
        <div className="sec-text">
          <h1>Porque a Akona?</h1>
          <p>
            somos especialistas no assunto, contando com uma equipe altamente
            qualificada e experiente, pronta para personalizar soluções que
            atendam às suas necessidades específicas. priorizando a
            sustentabilidade, ajudando a reduzir seus custos energéticos e sua
            pegada de carbono. garantindo resultados comprovados e mensuráveis.
          </p>
        </div>
      </section>

      <section className="sec-section">
        <div className="sec-text">
          <h1>Eficiência Energética</h1>
          <p>
            Eficiência energética refere-se à otimização do uso de energia para
            realizar uma determinada tarefa ou atividade, minimizando o
            desperdício. Sendo crucial para empresas pois reduz os custos
            operacionais, melhora a competitividade, diminui a pegada de
            carbono, atende a regulamentações ambientais e fortalece a imagem
            corporativa, demonstrando responsabilidade social e ambiental. A
            eficiência energética é um investimento inteligente que gera
            benefícios financeiros e sustentáveis a longo prazo.
          </p>
        </div>
        <div className="sec-image">
          <img src={Thirdimg} alt="" />
        </div>
      </section>

      <section className="third-section">
        <div className="third-text">
          <h1>Vantagens</h1>
          <p>
            Variedade de produtos para atender às suas necessidades. Visite-nos
            para saber mais sobre nossas soluções de energia.
          </p>
        </div>

        <div className="third-content">
          <div className="big-square">
            <div className="small-square">
              <img src={icon} alt="" />
              <h5>Descarbonização</h5>
            </div>
          </div>

          <div className="big-square">
            <div className="small-square">
              <img src={icon2} alt="" />
              <h5>Digitalização</h5>
            </div>
          </div>

          <div className="big-square">
            <div className="small-square"></div>
          </div>

          <div className="big-square">
            <div className="small-square"></div>
          </div>

          <div className="big-square">
            <div className="small-square"></div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
