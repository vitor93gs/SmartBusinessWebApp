import Image from "next/image";
import ebook from "../../assets/ebook.jpg";
import { Navbar } from "../../components/Navbar";

export default function Exchange() {
  return (
    <div className="h-full pb-2 bg-theme">
      <Navbar />
      <div className="pt-24">
        <section className=" text-gray1 text-4xl text-opacity-70 items-center">
          <h1>A SMART BUSINESS possui EXCHANGE e MOEDA próprias</h1>
          <p>
            Exchange é uma corretora de criptoativos que funciona como uma
            plataforma digital, possibilitando a venda e compra de moedas
            digitais e tokens.
          </p>
          <p>
            As exchanges conectam vendedores e compradores deixando transação
            mais segura e mais prática para às duas partes envolvidas.
          </p>
          <p>
            A SMART EXCHANGE surgiu para abrigar nossa moeda CRD (Credit Coin),
            com isso, criando uma economia própria para o HUB de empresas que
            estabelecemos no mercado.
          </p>
          <h2>CRIE SUA CONTA AGORA</h2>
          <h3>Vantagens</h3>
          <ul>
            <li>
              <p>
                As transações de criptomoedas não precisam necessariamente serem
                feitas por uma Exchange. No entanto, isso garante mais segurança
                para quem está comprando ou vendendo.
              </p>
            </li>
            <li>
              <p>
                Ao fazer uma compra ou venda de criptomoedas na modalidade p2p,
                que é diretamente entre usuários, fica difícil saber a origem
                dos recursos que transitou entre as contas. Por mais que a sua
                contraparte seja lícita, os recursos podem ter origem
                consideradas duvidosas pelo Banco Central ou Receita Federal, o
                que não acontece com as transações feitas por meio de uma
                Exchange.
              </p>
            </li>
            <li>
              <p>
                As Exchange fazem a custódia dos ativos até que os clientes
                decidam fazer a sua transferência para a própria carteira
                virtual.
              </p>
            </li>
          </ul>
          <h3>
            Para negociar em nossa Exchange é preciso, primeiramente, fazer um
            cadastro:
          </h3>
          <h2>CRIE SUA CONTA AGORA</h2>
          <h3>ASSISTA AO VÍDEO E APRENDA A ABRIR SUA CONTA E COMPRAR A CRD:</h3>
        </section>
        <section>
          <h1>CRD (Credit Coin)</h1>
          <p>É ut. Token lastreado em operação física....</p>
          <h3>Vantagens</h3>
          <ul>
            <li>
              <p>dividendos</p>
            </li>
            <li>
              <p></p>
            </li>
          </ul>
          <h2>BAIXE O WHITEPAPER</h2>
        </section>
      </div>
    </div>
  );
}
