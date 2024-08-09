import { NextPage } from "next";

interface Props {
  text: string;
  onClick: Function;
  color?: string;
  disabled?: boolean;
}

const Btn: NextPage<Props> = ({ text, onClick, color, disabled }) => {
  return (
    <button
      style={{ background: color || "#1E90FF" }}
      className={`duration-200 block hover:brightness-90 text-white mr-32 w-full py-2 px-4 h-full rounded-xl text-xl ${
        disabled ? "cursor-not-allowed" : "cursor-pointer"
      }`}
      disabled={disabled}
      onClick={() => onClick()}
    >
      {text}
    </button>
  );
};

export default Btn;
