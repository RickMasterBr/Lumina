import "./Depoimentos.css";

export default function Depoimentos() {
  return (
    <section id="feedback" className="depoimentos-section">
      <div className="depoimentos-container">
        <h2 className="depoimentos-title">Depoimentos de Clientes</h2>
        <div className="depoimentos-grid">
          <div className="depoimento">
            <p className="depoimento-text">
              "A Lúmina transformou nossa presença digital!"
            </p>
            <span className="depoimento-autor">- Cliente A</span>
          </div>
          <div className="depoimento">
            <p className="depoimento-text">
              "Excelente equipe e resultados incríveis."
            </p>
            <span className="depoimento-autor">- Cliente B</span>
          </div>
          <div className="depoimento">
            <p className="depoimento-text">
              "Recomendo a todos que buscam inovação."
            </p>
            <span className="depoimento-autor">- Cliente C</span>
          </div>
        </div>
      </div>
    </section>
  );
}
