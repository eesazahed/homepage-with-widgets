import type { NextPage } from "next";
import Head from "next/head";
import Gradient from "../components/Gradient";
import Link from "../components/Link";
import EmojiLink from "../components/EmojiLink";
import greeting from "../utils/greeting";
import { useEffect, useState } from "react";
import PopUpForm from "../components/PopUpForm";

const Home: NextPage = () => {
  const [username, setUsername] = useState<string>("user");
  const [isPopUpVisible, setIsPopUpVisible] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUsername(localStorage.getItem("username") || "user");
    }
  }, []);

  const handleUsernameChange = (newUsername: string) => {
    localStorage.setItem("username", newUsername);
    setUsername(newUsername);
    setIsPopUpVisible(false);
  };

  return (
    <div className="relative">
      <Head>
        <title>Homepage</title>
        <meta name="description" content="Homepage" />
        <link rel="icon" href="./assets/images/favicon.ico" />
      </Head>

      <div
        className={`transition duration-300 ${isPopUpVisible ? "blur-sm" : ""}`}
      >
        <main className="py-16 leading-8 text-xl grid min-h-screen place-items-center">
          <h1 className="text-6xl md:text-8xl text-center font-bold">
            <Gradient text="Home" /> &#127968;
          </h1>
          <div>
            <h2 className="text-2xl">
              {greeting()},{" "}
              <span
                className="cursor-pointer duration-200 hover:text-yellow-500"
                onClick={() => setIsPopUpVisible(true)}
              >
                {username}
              </span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center items-center">
            <EmojiLink
              emoji="&#128232;"
              text="gmail"
              href="https://gmail.com"
            />
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

      {isPopUpVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <PopUpForm
            onClose={() => setIsPopUpVisible(false)}
            onConfirm={handleUsernameChange}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
