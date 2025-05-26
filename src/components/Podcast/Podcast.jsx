import "./Podcast.css";
import podcastImg from "../../assets/podcast.jpg"; // Certifique-se de que a imagem está no caminho correto

export default function Podcast() {
  return (
    <section id="podcast" className="podcast-section">
      <div className="podcast-card">
        <div className="podcast-content">
          <div className="podcast-text-wrapper">
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
          <div className="podcast-image-wrapper">
            <img
              src={podcastImg} // coloque a imagem em /public
              alt="Imagem do Podcast"
              className="podcast-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
