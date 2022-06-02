import Head from "next/head";
import { Tabs } from "../components/Tabs";
import { Loading } from "./Loading";

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
      <Loading />

      <section className="h-46"></section>
    </div>
  );
}
