import "./Podcast.css";

export default function Podcast() {
  return (
    <section id="podcast" className="podcast-section">
      <div className="podcast-container">
        <h2 className="podcast-title">Podcast</h2>
        <p className="podcast-subtitle">Engaj(ai) Podcast</p>
        <p className="podcast-text">
          Movidos por interações que transformam!
          <br />
          Produção de conteúdo exclusivo Lúmina
          <br />
          Vamos engajar?!
        </p>
        <div className="podcast-buttons">
          <button className="podcast-button">Fale com nossa equipe!</button>
        </div>
      </div>
    </section>
  );
}
