import "./ComoFunciona.css";

export default function ComoFunciona() {
  return (
    <section id="funciona" className="funciona-section">
      <div className="funciona-container">
        <h2 className="funciona-title">Como Funciona?</h2>
        <p className="funciona-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>

        <div className="funciona-grid">
          <div className="funciona-box">
            <h3 className="funciona-percent">50%</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="funciona-box">
            <h3 className="funciona-percent">50%</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        <div className="funciona-buttons">
          <button className="funciona-button primary">Saiba Mais</button>
          <button className="funciona-button secondary">Fale Conosco</button>
        </div>
      </div>
    </section>
  );
}
