import { Navbar } from "../../components/Navbar";
import Image from "next/image";
import ebook from "../../assets/ebook.jpg";

export default function ComunidadeMulheres() {
  return (
    <div className="h-full bg-theme">
      <Navbar />
      <section className="pt-24 flex text-opacity-70 justify-around items-center">
        <div>
          <Image src={ebook} alt="ebook" width={400} height={400} />
        </div>
        <div className="text-golden text-right">
          <h1 className=" sm:text-4xl text-2xl">
            COMUNIDADE MULHERES INVESTIDORAS
          </h1>
          <h1 className=" sm:text-4xl text-2xl">
            Fazendo nossas próprias escolhas.
          </h1>
          <br />
          <h3 className="text-l sm:text-2xl">
            Valoramos a liberdade individual e a independência feminina.
            Junte-se a nós!
          </h3>
        </div>
      </section>
      <section className=" text-gray1 text-4xl text-opacity-70 items-center">
        <h1>Uma comunidade só de mulheres</h1>
        <h3>Porque independência financeira é coisa de mulher!</h3>
        <p>
          A realidade social feminina está em constante transformação, são
          muitas mudanças e reconhecimento de direitos ao longo das décadas. Mas
          sabemos que o principal a ser fortalecido para diminuir desigualdades,
          dirimir preconceitos e mudar vidas é o mindset financeiro. Queremos
          falar com mulheres sobre dinheiro, para empoderar suas mentes,
          oferecendo acesso à educação e tecnologias financeiras. Essa
          comunidade é para que todas conheçam as Criptomoedas e a
          Criptoeconomia, expandam seus conhecimentos financeiros e sejam
          independentes e livres!
        </p>
        <h2>Propósito</h2>
        <p>Independência financeira como forma de empoderamento feminino.</p>
        <h2>Missão</h2>
        <ul>
          <li>
            <p>
              • Empoderar mulheres e trazer soluções financeiras para que sejam
              pessoas livres e independentes, ainda que num ambiente hostil, que
              busque corajosamente seus objetivos;
            </p>
          </li>
          <li>
            <p>
              • Estimular a mulher a agir por conta própria, ou seja, ter
              autoconfiança e espírito livre;
            </p>
          </li>
          <li>
            <p>
              • Educar financeiramente mulheres que querem cuidar do seu próprio
              dinheiro e multiplicá-lo.
            </p>
          </li>
        </ul>
        <h2>Visão</h2>
        <p>
          Ampliar o mercado investidor feminino através da educação financeira e
          acesso à tecnologia.
        </p>
        <h2>Valores</h2>
        <ul>
          <li>
            <p>Liberdade;</p>
          </li>
          <li>
            <p>Individualidade;</p>
          </li>
          <li>
            <p>Independência.</p>
          </li>
        </ul>
      </section>
    </div>
  );
}
