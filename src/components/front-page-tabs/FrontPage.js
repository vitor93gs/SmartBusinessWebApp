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
      <div className="flex flex-col items-center justify-between">
        <h1 className="text-gray1 text-4xl text-right text-opacity-70 mb-12">
          BAIXE NOSSOS EBOOKS <br /> EBOOK - Criptoeconomia ( Conceitos e
          Curiosidades )
        </h1>
        <button className="w-2/5 text-golden opacity-75  border-2   shadow-golden border-golden ">
          SAIBA MAIS
        </button>
      </div>
    </div>
  );
}
