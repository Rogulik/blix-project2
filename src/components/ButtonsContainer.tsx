import { FC } from "react";

interface IPropsButtonContainer {
  okayText: string;
  laterText: string;
}

const ButtonsContainer: FC<IPropsButtonContainer> = (props) => {
  const { laterText, okayText } = props;
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center">
      <button className="btn-bg rounded-lg text-white w-full text-[15px] font-semibold py-2 sm:w-[90px] sm:mr-5">
        {okayText}
      </button>
      <button className="text-[#3B7FF4] text-[15px] mt-4 sm:mt-0 py-2">
        {laterText}
      </button>
    </div>
  );
};

export default ButtonsContainer;
