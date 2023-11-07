import "./Vantagens.css";
import safetyimg from "../../assets/safetyimg.svg";
import safetyicon from "../../assets/safetyicon.svg";
import reducaoicon from "../../assets/reducaoicon.svg";
import upgrade from "../../assets/upgradeicon.svg";
import sustainability from "../../assets/sustainabilityicon.svg";
import reducaoimg from "../../assets/reducaoimg.svg";
import upgradeimg from "../../assets/upgradeimg.svg";
import sustainabilityimg from "../../assets/sustainabilityimg.svg";

export default function Vantagens() {
  return (
    <section className="content">
      <h1>
        <span className="green">Nossas</span> <span>Vantagens</span>
      </h1>
      <div className="sub-text">
        <p>
          Variedade de produtos para atender às suas necessidades. Visite-nos <br /> para saber mais sobre nossas soluções de energia.
        </p>
      </div>

      <div className="conteiner-cartinha">
        <div className="cartinha">
          <div className="square">
            <img src={safetyicon} alt="icon segurança" className="icon" />
          </div>
          <img src={safetyimg} alt="imagem energia solar" className="img" />
          <div className="cartinha-text">
            <h2>Segurança</h2>
            <p>Nossa empresa prioriza a segurança em cada projeto de eficiência energética, protegendo tanto o ambiente quanto nossos clientes, estabelecendo um padrão exemplar de responsabilidade ambiental e segurança no setor.</p>
          </div>
          <div className="button-cartinha">
          <a class="button-inter item9"><span></span><span></span><span></span><span></span>Saiba Mais</a>
          </div>
        </div>

        <div className="cartinha">
          <div className="square">
            <img src={reducaoicon} alt="icon segurança" className="icon" />
          </div>
          <img src={reducaoimg} alt="imagem energia solar" className="img" />
          <div className="cartinha-text">
            <h2>Redução de Custos</h2>
            <p>Nossa empresa busca reduzir custos de energia em projetos de eficiência, economizando para empresas e o meio ambiente, promovendo responsabilidade financeira e sustentabilidade.</p>
          </div>
          <div className="button-cartinha">
          <a class="button-inter item9"><span></span><span></span><span></span><span></span>Saiba Mais</a>
          </div>
        </div>

        <div className="cartinha">
          <div className="square">
            <img src={upgrade} alt="icon segurança" className="icon" />
          </div>
          <img src={upgradeimg} alt="imagem energia solar" className="img" />
          <div className="cartinha-text">
            <h2>Valorização da Marca</h2>
            <p>Nossa empresa de eficiência energética valoriza sua marca com compromisso ambiental, segurança, inovação e eficácia, fortalecendo sua reputação e atraindo clientes conscientes</p>
          </div>
          <div className="button-cartinha">
          <a class="button-inter item9"><span></span><span></span><span></span><span></span>Saiba Mais</a>
          </div>
        </div>

        <div className="cartinha">
          <div className="square">
            <img src={sustainability} alt="icon segurança" className="icon" />
          </div>
          <img src={sustainabilityimg} alt="imagem energia solar" className="img" />
          <div className="cartinha-text">
            <h2>Segurança</h2>
            <p>Nossa empresa de eficiência energética reduz custos, promovendo a sustentabilidade e diminuindo a pegada de carbono de sua empresa de forma eficaz, duradoura e responsável, beneficiando a todos</p>
          </div>
          <div className="button-cartinha">
          <a class="button-inter item9"><span></span><span></span><span></span><span></span>Saiba Mais</a>
          </div>
        </div>
      </div>

      
    </section>
  );
}
