import Image from "next/dist/client/image";
import logoBig from "../assets/logoBig.png";
export function FrontPage() {
  return (
    <div className="flex justify-center h-screen items-center mr-36 ml-36">
      <Image
        src={logoBig}
        alt="Logo smart Business"
        width="1080px"
        height="712"
      />
      <h1 className="text-gray1 text-5xl text-right text-opacity-70">
        A CHAVE DE ENTRADA PARA UM NOVO MUNDO!
      </h1>
    </div>
  );
}
