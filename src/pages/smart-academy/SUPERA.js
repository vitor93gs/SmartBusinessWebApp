import { Navbar } from "../../components/Navbar";
import Image from "next/image";
import ebook from "../../assets/ebook.jpg";

export default function Supera() {
  return (
    <div className="bg-theme h-screen  z-0">
      <Navbar />
      <div className="h-36"></div>
      <section className="bg-banner1 h-5/6 flex text-gray1 text-4xl text-right text-opacity-70 justify-around items-center">
        <div>
          <Image src={ebook} alt="ebook" width={400} height={540} />
        </div>
        <h1>TEXTO</h1>
      </section>
      <section className="bg-theme h-96 flex text-gray1 text-4xl text-right text-opacity-70 justify-around items-center">
        <h1>CONTEUDO</h1>
      </section>
    </div>
  );
}
