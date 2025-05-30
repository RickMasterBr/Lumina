import "./Projetos.css";
import projetosImg from "../../assets/projetos.jpg";

export default function Projetos() {
  return (
    <section id="projetos" className="projetos-section">
      <div className="projetos-wrapper">
        <div className="projetos-container">
          <h2 className="projetos-title">Projetos Personalizados</h2>
          <p className="projetos-tagline">
            Desenvolvemos projetos personalizados para suas demandas
            <br />
            <strong>Conheça nossas soluções digitais</strong>
          </p>
          <p className="projetos-text">
            Conectamos talentos e ideias para criar soluções personalizadas e
            inovadoras.
          </p>
          <p className="projetos-text">
            Unimos planejamento estratégico, colaboração e ação prática para
            gerar impacto real.
          </p>
          <p className="projetos-text">
            Cada projeto é uma oportunidade de crescimento, transformação e
            aprendizado coletivo.
          </p>
          <div className="projetos-buttons">
            <button className="projetos-button">Fale com nossa equipe!</button>
          </div>
        </div>
        <div className="projetos-image-wrapper">
          <img
            src={projetosImg} // Coloque essa imagem na pasta /public
            alt="Ilustração projetos personalizados"
            className="projetos-image"
          />
        </div>
      </div>
    </section>
  );
}
