import React from "react";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import Gas from "../../assets/Gas.svg";
import Solar from "../../assets/Solar.svg";
import Agua from "../../assets/Agua.svg";
import Massa from "../../assets/Massa.svg";
import Bio from "../../assets/Bio.svg";
import Wire from "../../assets/Wire.svg";
import "./Servicos.css";

const services = [
  {
    name: "Gás Natural",
    imgSrc: Gas,
    description:
      "Geração de energia elétrica através de gás natural aproveitando a energia térmica dissipada nos gases de exaustão e no bloco dos geradores para gerar também vapor, água gelada e/ou água quente.",
  },
  {
    name: "Solar",
    imgSrc: Solar,
    description:
      "Energia gerada a partir de um fenômeno que ocorre com as partículas de luz solar, produzindo uma energia elétrica e limpa.",
  },
  {
    name: "Água de Reuso",
    imgSrc: Agua,
    description:
      "A solução consiste em uma Estação de Tratamento de Efluentes (ETE) para o tratamento de efluentes e a transformação em água de reuso.",
  },
  {
    name: "Biomassa",
    imgSrc: Massa,
    description:
      "Geração ou cogeração de energia utilizando biomassa como combustível. É uma fonte importante de energia renovável, por reaproveitar matérias de origem animal ou vegetal como fonte de produção de calor ou eletricidade.",
  },
  {
    name: "Biogás",
    imgSrc: Bio,
    description:
      "Energia gerada a partir de diversas fontes, como: resíduos industriais, resíduos agrícolas, resíduos sólidos urbanos, dejetos de animais, lodo de Estações de Tratamento de Efluentes (ETEs), entre outras.",
  },
  {
    name: "Gasto Wire",
    imgSrc: Wire,
    description:
      "Geração de energia elétrica através do gás natural associado em poços de exploração de petróleo on-shore.",
  },
];

export default function Servicos() {
  return (
    <>
      <Menu />
      <div className="services">
        <h2>Nossos Serviços</h2>
        <div className="grid">
          {services.map((service) => (
            <div className="card" key={service.name}>
              <div className="card-content">
                <img src={service.imgSrc} alt={service.name} />
                <div>
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
