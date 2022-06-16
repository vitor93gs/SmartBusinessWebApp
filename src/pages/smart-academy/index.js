import { Navbar } from "../../components/Navbar";
import Image from "next/image";
import ebook from "../../assets/ebook.jpg";

export default function SmartAcademy() {
  return (
    <div className="bg-theme h-full  z-0">
      <Navbar />

      <section className=" text-gray1 pt-24 text-4xl text-opacity-70">
        <h1>POR QUE ESTUDAR CONOSCO?</h1>
        <h2>Vantagens</h2>
        <h4>Skin In The Game</h4>
        <p>
          Aprenda como investir seu dinheiro em criptoativos, com professores
          que estão todos os dias no campo de batalha, praticando na íntegra o{" "}
          <strong>Skin In The Game</strong> (Pele em Risco).
        </p>
        <h4>Suporte</h4>
        <p>
          Equipe acessível e professores que prestam acompanhamento ao aluno de
          modo virtual, tirando dúvidas e alinhando a aprendizagem extra-aulas.
        </p>
        <h4>Materiais complementares</h4>
        <p>
          Disponibilizamos materiais complementares, para que o aluno possa
          praticar o autodesenvolvimento: matérias no blog; Instagram com
          conteúdo relacionado à Criptoeconomia, alimentado diariamente;
          apostilas; PDF's; grupos virtuais de alunos por turma e muito mais.
        </p>
      </section>
      <section className=" text-gray1 text-4xl text-opacity-70">
        <h2>CURSOS</h2>
        <h3>Criptoeconomia: o que é e qual é o seu impacto no futuro?</h3>
        <strong>GRATUITO</strong>
        <p>
          Curso rápido para queles que se sentem curiosos e inseguros sobre o
          mundo das criptomoedas e seu sistema econômico.
        </p>
        <h4>Você irá aprender:</h4>
        <ul>
          <li>
            <p>Conceitos e nomenclaturas relacionados ao tema;</p>
          </li>
          <li>
            <p>Conceitos e nomenclaturas relacionados ao tema;</p>
          </li>
          <li>
            <p>O que é criptomoeda;</p>
          </li>
          <li>
            <p>Como comprar Cripto;</p>
          </li>
          <li>
            <p>Como a Criptoeconomia influencia o mercado tradicional;</p>
          </li>
          <li>
            <p>Qual será o futuro do dinheiro.</p>
          </li>
        </ul>
        <h4>
          <strong>Bônus: e-book gratuito.</strong>
        </h4>
      </section>
    </div>
  );
}
