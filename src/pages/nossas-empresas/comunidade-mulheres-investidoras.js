import { Navbar } from "../../components/Navbar";
import Image from "next/image";
import ebook from "../../assets/ebook.jpg";

export default function ComunidadeMulheres() {
  return (
    <div className="bg-theme h-screen  z-0">
      <Navbar />
      <div className="h-36"></div>
      <section className=" h-5/6 flex text-opacity-70 justify-around items-center">
        <div>
          <Image src={ebook} alt="ebook" width={400} height={400} />
        </div>
        <div className="text-golden text-right">
          <h1 className=" sm:text-4xl text-2xl">
            COMUNIDADE MULHERES INVESTIDORAS
          </h1>
          <h1 className=" sm:text-4xl text-2xl"
          >
            Fazendo nossas próprias escolhas.
          </h1>
          <br />
          <h2 className="text-l sm:text-2xl">
            Valoramos a liberdade individual e a independência feminina.
            Junte-se a nós!
          </h2>
        </div>
      </section>
      <section className="bg-theme h-96 flex text-gray1 text-4xl text-right text-opacity-70 justify-around items-center">
        <h1>CONTEUDO</h1>
      </section>
    </div>
  );
}
