import { FC } from "react";

interface IPropsButtonContainer {
  okayText: string;
  laterText: string;
}

const ButtonsContainer: FC<IPropsButtonContainer> = (props) => {
  const { laterText, okayText } = props;
  return (
    <div className="flex flex-col">
      <button className="btn-bg rounded-lg text-white w-full text-[15px] font-semibold py-2">
        {okayText}
      </button>
      <button className="text-[#3B7FF4] text-[15px] mt-4">{laterText}</button>
    </div>
  );
};

export default ButtonsContainer;
