import "./Depoimentos.css";

export default function Depoimentos() {
  return (
    <section id="feedback" className="depoimentos-section">
      <div className="depoimentos-container">
        <h2 className="depoimentos-title">Depoimentos de Clientes</h2>
        <p className="depoimentos-subtitle">
          Veja o que nossos parceiros têm a dizer sobre o impacto da Lúmina.
        </p>
        <div className="depoimentos-grid">
          <div className="depoimento">
            <img
              src="/clientes/cliente-a.jpg"
              alt="Cliente A"
              className="depoimento-img"
            />
            <p className="depoimento-text">
              "A Lúmina transformou nossa presença digital!"
            </p>
            <span className="depoimento-autor">- Cliente A</span>
          </div>
          <div className="depoimento">
            <img
              src="/clientes/cliente-b.jpg"
              alt="Cliente B"
              className="depoimento-img"
            />
            <p className="depoimento-text">
              "Excelente equipe e resultados incríveis."
            </p>
            <span className="depoimento-autor">- Cliente B</span>
          </div>
          <div className="depoimento">
            <img
              src="/clientes/cliente-c.jpg"
              alt="Cliente C"
              className="depoimento-img"
            />
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
