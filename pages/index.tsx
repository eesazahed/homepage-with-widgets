import type { NextPage } from "next";
import Head from "next/head";
import Gradient from "../components/Gradient";
import Link from "../components/Link";
import EmojiLink from "../components/EmojiLink";
import greeting from "../utils/greeting";
import { useState } from "react";

const Home: NextPage = () => {
  const [username, setUsername] = useState<string>(
    localStorage.getItem("username") || "user"
  );

  const changeUsername = () => {
    const newUsername = "eesa";

    localStorage.setItem("username", newUsername);
    setUsername(newUsername);
  };

  return (
    <div className="mx-8">
      <Head>
        <title>Homepage</title>
        <meta name="description" content="Homepage" />
        <link rel="icon" href="./assets/images/favicon.ico" />
      </Head>

      <main className="py-16 leading-8 text-xl grid min-h-screen place-items-center">
        <h1 className="text-6xl md:text-8xl text-center font-bold">
          <Gradient text="Home" /> &#127968;
        </h1>
        <div>
          <h2 className="text-2xl">
            {greeting()},{" "}
            <span
              className="cursor-pointer duration-200 hover:text-yellow-500"
              onClick={changeUsername}
            >
              {username}
            </span>
          </h2>
        </div>
        <div className="flex flex-wrap justify-center items-center">
          <EmojiLink emoji="&#128232;" text="gmail" href="https://gmail.com" />
          <EmojiLink
            emoji="&#127916;"
            text="youtube"
            href="https://youtube.com"
          />
          <EmojiLink
            emoji="&#127911;"
            text="spotify"
            href="https://open.spotify.com"
          />
          <EmojiLink
            emoji="&#128187;"
            text="github"
            href="https://github.com"
          />
        </div>
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
