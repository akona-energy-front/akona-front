import "./Vantagens.css";
import safetyimg from "../../assets/safetyimg.svg";
import safetyicon from "../../assets/safetyicon.svg";

export default function Vantagens() {
  return (
    <section className="content">
      <h1>
        <span className="green">Nossos</span> <span>Serviços</span>
      </h1>
      <div className="sub-text">
        <p>
          Variedade de produtos para atender às suas necessidades. Visite-nos <br /> para saber mais sobre nossas soluções de energia.
        </p>
      </div>

      <div className="cartinha">
        <div className="square">
          <img src={safetyicon} alt="icon segurança" className="icon" />
        </div>
        <img src={safetyimg} alt="imagem energia solar" className="img" />
        <div className="cartinha-text">
          <h2>Segurança</h2>
          <p>Nossa empresa prioriza a segurança em cada projeto de eficiência energética, protegendo tanto o ambiente quanto nossos clientes</p>
        </div>
        <div className="button-cartinha">
        <a class="button-inter item9"><span></span><span></span><span></span><span></span>Saiba Mais</a>
        </div>
      </div>
    </section>
  );
}
