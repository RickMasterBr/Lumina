import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Aprendizagem from "../components/Aprendizagem/Aprendizagem";
import Projetos from "../components/Projetos/Projetos";
import Podcast from "../components/Podcast/Podcast";
import ComoFunciona from "../components/ComoFunciona/ComoFunciona";
import Clientes from "../components/Clientes/Clientes";
import Sobre from "../components/Sobre/Sobre";
import Depoimentos from "../components/Depoimentos/Depoimentos";
import Contato from "../components/Contato/Contato";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Aprendizagem />
        <Projetos />
        <Podcast />
        <ComoFunciona />
        <Clientes />
        <Sobre />
        <Depoimentos />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
