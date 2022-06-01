import Head from "next/head";
import Image from "next/image";
import { Navbar } from "../components/Navbar";

export default function Home() {
  return (
    <div className="bg-theme">
      <Head>
        <title>Template</title>
        <meta name="description" content="Template web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <section className="h-46"></section>
    </div>
  );
}
