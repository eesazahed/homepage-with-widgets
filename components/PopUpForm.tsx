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
    <div className="bg-white text-black p-8 rounded-xl">
      <h1 className="text-3xl font-bold text-center mb-6">Edit username</h1>
      <div className="flex">
        <div className="w-5/6 flex h-1/2">
          <div className="w-full pr-2">
            <Input
              parentData={formUsername}
              placeholder="Username"
              updateParent={(e: string) => setFormUsername(e)}
              doFunction={handleConfirm}
            />
          </div>
        </div>
        <div className="w-1/6 flex">
          <div className="w-full pl-2">
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
