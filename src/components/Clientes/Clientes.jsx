import "./Clientes.css";

export default function Clientes() {
  return (
    <section id="clientes" className="clientes-section">
      <div className="clientes-container">
        <h2 className="clientes-title">Projetos entregues para Clientes</h2>
        <p className="clientes-intro">
          Os planos de ação desenvolvidos para os clientes-teste{" "}
          <strong>ABCC</strong>, <strong>FLOR DE SAL</strong> e{" "}
          <strong>VANILLA</strong> destacam a capacidade do LÚMINA em criar
          soluções personalizadas e estratégicas.
        </p>

        <div className="clientes-grid">
          <div className="cliente-card">
            <h3 className="cliente-nome">Cliente ABCC</h3>
            <p className="cliente-desc">
              Fortalecimento da presença digital para gerar visibilidade e
              conversão, com foco na geração de doações, voluntariado e
              construção de um plano de comunicação integrado.
            </p>
            <button className="cliente-button">Ver Projeto</button>
          </div>

          <div className="cliente-card">
            <h3 className="cliente-nome">Cliente Flor de Sal</h3>
            <p className="cliente-desc">
              Criação de uma estratégia de marketing digital voltada para
              aumentar a visibilidade da marca e atrair novos clientes.
            </p>
            <button className="cliente-button">Ver Projeto</button>
          </div>

          <div className="cliente-card">
            <h3 className="cliente-nome">Cliente Vanilla</h3>
            <p className="cliente-desc">
              Desenvolvimento de uma identidade digital coesa e ações
              direcionadas para engajamento nas redes sociais.
            </p>
            <button className="cliente-button">Ver Projeto</button>
          </div>
        </div>
      </div>
    </section>
  );
}
