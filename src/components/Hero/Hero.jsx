import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <h1 className="hero-title">
          Sua jornada de soluções digitais e inovadoras começa aqui!
        </h1>
        <p className="hero-subtitle">
          Somos um <strong>Laboratório de Marketing Digital e Inovação</strong>{" "}
          Squad da Ânima Hub, feito por alunos de diversos cursos e instituições
          da Ânima Educação.
        </p>
        <div className="hero-buttons">
          <button className="hero-button primary">Saiba Mais</button>
          <button className="hero-button secondary">Fale Conosco</button>
        </div>
      </div>
    </section>
  );
}
