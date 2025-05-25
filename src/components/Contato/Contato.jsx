import "./Contato.css";

export default function Contato() {
  return (
    <section id="contato" className="contato-section">
      <div className="contato-container">
        <h2 className="contato-title">Fale Conosco</h2>
        <p className="contato-description">
          Estamos aqui para ajudar. Preencha o formulário abaixo ou entre em
          contato diretamente.
        </p>
        <form className="contato-form">
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensagem</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="contato-button">
            Enviar
          </button>
        </form>
        <div className="contato-info">
          <p>Email: contato@lumina.com.br</p>
          <p>Telefone: (11) 1234-5678</p>
        </div>
      </div>
    </section>
  );
}
