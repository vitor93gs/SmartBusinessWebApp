import Head from "next/head";
import Image from "next/image";
import { Navbar } from "../components/Navbar";
import { FrontPage } from "./FrontPage";

export default function Home() {
  return (
    <div className=" bg-gradient-to-r from-theme to-theme2">
      <Head>
        <title>Smart Business</title>
        <meta name="description" content="Smart Business web app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="//db.onlinewebfonts.com/c/09d57d76383244264b7bdef717efcb36?family=Gotham+HTF+Book"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <Navbar />
      <FrontPage />
      <section className="h-46"></section>
    </div>
  );
}
