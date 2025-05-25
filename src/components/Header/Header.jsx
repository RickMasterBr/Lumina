import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">Lúmina</div>
        <ul className="nav-links">
          <li>
            <a href="#hero">Início</a>
          </li>
          <li>
            <a href="#aprendizagem">Aprendizagem</a>
          </li>
          <li>
            <a href="#projetos">Projetos</a>
          </li>
          <li>
            <a href="#podcast">Podcasts</a>
          </li>
          <li>
            <a href="#funciona">Como Funciona</a>
          </li>
          <li>
            <a href="#clientes">Clientes</a>
          </li>
          <li>
            <a href="#sobre">Sobre Nós</a>
          </li>
          <li>
            <a href="#feedback">Feedback</a>
          </li>
          <li>
            <a href="#contato">Fale Conosco</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
