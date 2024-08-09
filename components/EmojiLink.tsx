import { NextPage } from "next";
import Link from "./Link";

interface Props {
  emoji: string;
  text: string;
  href: string;
}

const EmojiLink: NextPage<Props> = ({ emoji, text, href }) => {
  return (
    <div className="m-8 flex flex-col justify-center items-center">
      <h2 className="text-8xl mb-12">
        <a
          className="duration-200 hover:drop-shadow-[0_0_10px_#00ffd9cc]"
          href={href}
          rel="noreferrer"
          target="_blank"
        >
          {emoji}
        </a>
      </h2>
      <p>
        <Link text={text} href={href} />
      </p>
    </div>
  );
};

export default EmojiLink;
