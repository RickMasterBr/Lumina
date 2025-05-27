"use client";

import { useState } from "react";
import "./Header.css";

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-left">
          <div className="logo">Lúmina</div>
        </div>

        {/* Botão hamburguer visível no mobile */}
        <button
          className="menu-toggle"
          onClick={() => setMenuAberto(!menuAberto)}
        >
          ☰
        </button>

        {/* Menu de navegação central */}
        <ul className={`nav-center ${menuAberto ? "ativo" : ""}`}>
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
        </ul>

        <div className="nav-right">
          <a href="#contato" className="fale-conosco-button">
            Fale Conosco
          </a>
        </div>
      </nav>
    </header>
  );
}
