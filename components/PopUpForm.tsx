import { NextPage } from "next";
import Input from "./Input";
import { useState } from "react";
import Btn from "./Btn";

interface Props {
  onClose: Function;
  onConfirm: Function;
}

const PopUpForm: NextPage<Props> = ({ onClose, onConfirm }) => {
  const [formUsername, setFormUsername] = useState<string>("");

  const handleConfirm = () => {
    onConfirm(formUsername);
    onClose();
  };

  return (
    <div className="bg-white text-black p-4 rounded-xl">
      <div className="flex">
        <div className="w-5/6 flex h-1/2">
          <div className="w-full pr-2 m-0">
            <Input
              parentData={formUsername}
              placeholder="Enter a username"
              updateParent={(e: string) => setFormUsername(e)}
              doFunction={handleConfirm}
            />
          </div>
        </div>
        <div className="w-1/6 flex">
          <div className="w-full pl-2 m-0">
            <Btn
              onClick={handleConfirm}
              text="&rarr;"
              color={formUsername ? "" : "gray"}
              disabled={formUsername === ""}
            ></Btn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpForm;
