import Head from "next/head";
import { useState } from "react";
import { Navbar } from "../components/Navbar";
import Tabs from "../components/Tabs";
import Tabs2 from "../components/TabCarousel";
import { Loading } from "../components/Loading";
import NProgress from "nprogress";
import Router from "next/router";
import { useEffect } from "react";

export default function Home() {
  const [isLoading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1500);

  const handleStart = () => {
    setLoading(true);
  };
  const handleComplete = () => {
    setLoading(false);
  };

  useEffect(() => {
    Router.events.on("routeChangeStart", () => {
      NProgress.start();
      handleStart();
    });
    Router.events.on("routeChangeComplete", () => {
      handleComplete();
      NProgress.done();
    });
    Router.events.on("routeChangeError", () => {
      handleComplete();
      NProgress.done();
    });
  }, []);

  return (
    <div className="bg-theme z-0">
      <Head>
        <title>Smart Business</title>
        <meta name="description" content="Smart Business web app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="//db.onlinewebfonts.com/c/09d57d76383244264b7bdef717efcb36?family=Gotham+HTF+Book"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="//db.onlinewebfonts.com/c/bd317adf74e5e7e564eb61ce9926cc6d?family=Gotham"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="bg-theme">
          <div className="flex justify-center">
            <Navbar />
            <Tabs2 />
          </div>
        </div>
      )}
    </div>
  );
}
