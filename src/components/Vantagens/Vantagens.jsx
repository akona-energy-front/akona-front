import "./Vantagens.css"
import icon from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";
import icon3 from "../../assets/icon3.svg";
import icon4 from "../../assets/icon4.svg";
import icon5 from "../../assets/icon5.svg";
import icon6 from "../../assets/icon6.svg";

export default function Vantagens () {
    return(
        <section className="third-section">
        <div className="text-center">
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
            <div className="small-square">
              <img src={icon3} alt="" />
              <h5>Redução de Custo</h5>
            </div>
          </div>

          <div className="big-square">
            <div className="small-square">
            <img src={icon4} alt="" />
              <h5>Confiabilidade</h5>
            </div>
          </div>

          <div className="big-square">
            <div className="small-square">
            <img src={icon5} alt="" />
              <h5>Descentralização</h5>
            </div>
          </div>

          <div className="big-square">
            <div className="small-square">
            <img src={icon6} alt="" />
              <h5>Segurança</h5>
            </div>
          </div>
        </div>
      </section>
    )
}