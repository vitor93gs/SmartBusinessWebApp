import Image from "next/dist/client/image";
import logoBig from "../../assets/logoBig.png";
export function FrontPage() {
  return (
    <div className="bg-background bg-center bg-no-repeat bg-cover flex justify-center items-center h-screen pr-36 pl-36">
      <Image
        src={logoBig}
        alt="Logo smart Business"
        width="1080"
        height="712"
      />
      <h1 className="text-gray1 text-5xl text-right text-opacity-70">
        BAIXE NOSSOS EBOOKS <br /> EBOOK - Criptoeconomia ( Conceitos e
        Curiosidades )
      </h1>
    </div>
  );
}
