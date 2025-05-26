import "./Aprendizagem.css";
import aprendizagemImg from "../../assets/aprendizagem.jpg";

export default function Aprendizagem() {
  return (
    <section id="aprendizagem" className="aprendizagem-section">
      <div className="aprendizagem-content">
        <div className="aprendizagem-texts">
          <h2 className="aprendizagem-title">Aprendizagem</h2>
          <p className="aprendizagem-tagline">
            Construímos aprendizagem para o seu desenvolvimento. <br />
            <strong>Trilhas de conhecimento exclusivas do mundo digital</strong>
          </p>
          <p className="aprendizagem-text">
            Através das Trilhas de Conhecimento, buscamos disseminar o marketing
            digital e a inovação, fornecendo conteúdo abrangente sobre temas
            relevantes, como: planejamento de marketing digital, jornada de
            consumo do cliente, estratégia de conteúdo entre outros.
          </p>
          <p className="aprendizagem-text">
            Nosso objetivo é oferecer um material dinâmico, fácil de entender e
            completo, que capacite nossos participantes a aplicarem efetivamente
            o conhecimento adquirido em suas atividades diárias.
          </p>
          <div className="aprendizagem-buttons">
            <button className="aprendizagem-button">
              Fale com nossa equipe!
            </button>
          </div>
        </div>

        <div className="aprendizagem-image-wrapper">
          <img
            src={aprendizagemImg}
            alt="Ilustração aprendizagem"
            className="aprendizagem-image"
          />
        </div>
      </div>
    </section>
  );
}
