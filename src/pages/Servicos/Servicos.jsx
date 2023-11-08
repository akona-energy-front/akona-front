import React from "react";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import Consultoria from "../../assets/Consultoria.svg";
import Instalação from "../../assets/Instalação.svg";
import Pesquisa from "../../assets/Pesquisa.svg";
import Manutenção from "../../assets/Manutenção.svg";
import Treinamento from "../../assets/Treinamento.svg";
import Fabricação from "../../assets/Fabricação.svg";
import "./Servicos.scss";

export default function Servicos() {
  return (
    <>
      <Menu />
      <div className="card-container">
        <div className="card">
          <img src={Consultoria} alt="" />
          <div className="card-content">
            <h3>Serviços de consultoria e assessoria</h3>
            <p>
              Fornecemos serviços de consultoria para ajudar os clientes a
              determinar o melhor sistema de painéis solares para suas
              necessidades, bem como informações sobre incentivos governamentais
              e opções de financiamento.
            </p>
            <a href="#" className="btn">Explore Mais</a>
          </div>
        </div>

        <div className="card">
          <img src={Fabricação} alt="" />
          <div className="card-content">
            <h3>Fabricação</h3>
            <p>
              Este é o principal serviço prestado pelas empresas de painéis
              solares, utilizando uma gama de materiais e processos. Isso
              envolve o fornecimento de matérias-primas, a montagem e teste dos
              componentes e a embalagem dos produtos acabados.
            </p>
            <a href="#" className="btn">Explore Mais</a>
          </div>
        </div>

        <div className="card">
          <img src={Pesquisa} alt="" />
          <div className="card-content">
            <h3>Pesquisa e desenvolvimento</h3>
            <p>
              As empresas de painéis solares podem investir pesadamente em
              pesquisa e desenvolvimento para melhorar a eficiência, a
              durabilidade e a relação custo-benefício dos painéis solares.
            </p>
            <a href="#" className="btn">Explore Mais</a>
          </div>
        </div>

        <div className="card">
          <img src={Instalação} alt="" />
          <div className="card-content">
            <h3>Instalação</h3>
            <p>
            Envolve projetar e instalar o sistema de painéis solares e garantir que ele esteja conectado à rede elétrica e funcionando corretamente.
            </p>
            <a href="#" className="btn">Explore Mais</a>
          </div>
        </div>

        <div className="card">
          <img src={Manutenção} alt="" />
          <div className="card-content">
            <h3>Manutenção e reparo</h3>
            <p>
            As empresas de painéis solares podem fornecer serviços de consultoria para ajudar os clientes a determinar o melhor sistema de painéis solares para suas necessidades, bem como fornecer informações sobre incentivos governamentais e opções de financiamento.
            </p>
            <a href="#" className="btn">Explore Mais</a>
          </div>
        </div>

        <div className="card">
          <img src={Treinamento} alt="" />
          <div className="card-content">
            <h3>Treinamento e Educação</h3>
            <p>
            Nossa empresa oferece serviços de treinamento e educação para instaladores, técnicos e engenheiros para garantir que eles tenham as habilidades e conhecimentos necessários para trabalhar com painéis solares e equipamentos relacionados.
            </p>
            <a href="#" className="btn">Explore Mais</a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
