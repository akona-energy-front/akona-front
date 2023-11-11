import { useNavigate } from "react-router-dom";
import Consultoria from "../assets/Consultoria.svg";
import Akona from "../assets/Akona.mp4";
import "../scss/Sobre.scss";

export default function Sobre() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/fale");
    console.log("Botão Fale Conosco clicado.");
  };

  return (
    <>
      <section className="about-section">
        <div className="about-container">
          <div className="about-text">
            <div className="about-svg">
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
            <h4>Akona Energy</h4>
            <h1>Sobre Nós</h1>
            <div className="about-info">
              <p>
                Somos líderes na transformação do cenário energético, focando em
                eficiência e sustentabilidade. Oferecemos soluções
                personalizadas para empresas e residências, reduzindo o uso de
                energia e impacto ambiental. Nosso compromisso é claro: liderar
                a transição sustentável, reduzindo emissões de carbono,
                promovendo eficiência e inovação tecnológica. Diferenciamos-nos
                pela customização, expertise técnica, resultados palpáveis e
                parcerias estratégicas. Junte-se a nós para um futuro energético
                responsável.
              </p>
            </div>
          </div>
          <div className="about-video">
            <iframe
              src={Akona}
              className="video-frame"
              width="800"
              height="450"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
