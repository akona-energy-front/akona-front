import React from "react";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import Consultoria from "../../assets/Consultoria.svg";
import Solar from "../../assets/Solar.svg";
import Agua from "../../assets/Agua.svg";
import Massa from "../../assets/Massa.svg";
import Bio from "../../assets/Bio.svg";
import Wire from "../../assets/Wire.svg";
import "./Servicos.css";

export default function Servicos() {
  return (
    <>
      <Menu />
      <div className="service">
        <div className="title">
          <h2>Nossos Serviços</h2>
        </div>

        <div className="box">
          <div className="card">
            <img src={Consultoria} alt="" />
            <h5>Gás Natural</h5>
            <div className="pra">
              <p>
              Fornecemos serviços de consultoria para ajudar os clientes a determinar o melhor sistema de painéis solares para suas necessidades, bem como informações sobre incentivos governamentais e opções de financiamento.
              </p>

              <p>
                <a className="botao" href="#">
                  Gás Natural
                </a>
              </p>
            </div>
          </div>

          <div className="box">
            <div className="card">
              <img src={Consultoria} alt="" />
              <h5>Gás Natural</h5>
              <div className="pra">
                <p>
                  Geração de energia elétrica através de gás natural
                  aproveitando a energia térmica dissipada nos gases de exaustão
                  e no bloco dos geradores para gerar também vapor, água gelada
                  e/ou água quente.
                </p>

                <p>
                  <a className="botao" href="#">
                    Gás Natural
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="card">
              <img src={Consultoria} alt="" />
              <h5>Gás Natural</h5>
              <div className="pra">
                <p>
                  Geração de energia elétrica através de gás natural
                  aproveitando a energia térmica dissipada nos gases de exaustão
                  e no bloco dos geradores para gerar também vapor, água gelada
                  e/ou água quente.
                </p>

                <p>
                  <a className="botao" href="#">
                    Gás Natural
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
