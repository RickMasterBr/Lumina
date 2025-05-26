import "./ComoFunciona.css";

export default function ComoFunciona() {
  return (
    <section id="funciona" className="como-section">
      <div className="como-container">
        <h2 className="como-title">Como Funciona?</h2>
        <p className="como-subtitle">
          Uma jornada de aprendizagem única e personalizada. Entenda como a
          plataforma Lúmina transforma conhecimento em impacto real.
        </p>

        <div className="como-etapas">
          {/* Etapa 1 */}
          <div className="como-card">
            <div className="como-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3>1. Escolha sua Trilha</h3>
            <p>
              Selecione uma trilha personalizada de acordo com seus interesses e
              objetivos de carreira.
            </p>
          </div>

          {/* Etapa 2 */}
          <div className="como-card">
            <div className="como-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeWidth="2"
                  d="M12 3v4m0 10v4m8.66-12l-3.66 3.66m-10 0L3.34 9M21 12h-4M7 12H3"
                />
              </svg>
            </div>
            <h3>2. Aplique na Prática</h3>
            <p>
              Aprenda com projetos reais, desafios e conteúdos interativos com
              foco no mundo real.
            </p>
          </div>

          {/* Etapa 3 */}
          <div className="como-card">
            <div className="como-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-3-3h-2v5zM7 20H2v-2a3 3 0 013-3h2v5zM12 11a4 4 0 100-8 4 4 0 000 8z"
                />
              </svg>
            </div>
            <h3>3. Compartilhe Resultados</h3>
            <p>
              Receba certificados, mostre sua evolução e compartilhe conquistas
              com sua rede.
            </p>
          </div>
        </div>

        <div className="como-buttons">
          <a href="#projetos" className="como-btn primary">
            Ver Projetos
          </a>
          <a href="#contato" className="como-btn secondary">
            Fale com a Equipe
          </a>
        </div>
      </div>
    </section>
  );
}
