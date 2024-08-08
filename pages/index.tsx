import type { NextPage } from "next";
import Head from "next/head";
import Gradient from "../components/Gradient";
import Link from "../components/Link";

const Home: NextPage = () => {
  return (
    <div className="mx-8">
      <Head>
        <title>Homepage</title>
        <meta name="description" content="Homepage" />
        <link rel="icon" href="./assets/images/favicon.ico" />
      </Head>

      <main className="py-16 leading-8 text-xl grid min-h-screen place-items-center">
        <h1 className="my-8 text-6xl md:text-8xl text-center font-bold">
          <Gradient text="Home" /> 🏠
        </h1>
      </main>

      <footer className="py-16 text-center">
        <p>
          Designed and developed by{" "}
          <Link text="Eesa Zahed" href="https://eesa.zahed.ca" />
        </p>
      </footer>
    </div>
  );
};

export default Home;
