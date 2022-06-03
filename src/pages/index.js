import Head from "next/head";
import { useState } from "react";

import { Tabs } from "../components/Tabs";
import { Loading } from "./Loading";

export default function Home() {
  const [isLoading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 4500);
  //{
  //isLoading ? <Loading /> : <Tabs />;
  //
  return (
    <div className="bg-background bg-center bg-no-repeat bg-fixed bg-cover">
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
      {isLoading ? <Loading /> : <Tabs />}
    </div>
  );
}
