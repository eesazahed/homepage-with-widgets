import { NextPage } from "next";

interface Props {
  parentData: string | number;
  updateParent: Function;
  placeholder: string;
  doFunction?: Function;
}

const Input: NextPage<Props> = ({
  placeholder,
  parentData,
  updateParent,
  doFunction,
}) => {
  function keydown(e: any) {
    if (doFunction) {
      if (e.key === "Enter") {
        doFunction();
      }
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        className="text-xl shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline"
        value={parentData}
        onChange={(e) => updateParent(e.target.value)}
        onKeyDown={(e) => keydown(e)}
      />
    </div>
  );
};

export default Input;
