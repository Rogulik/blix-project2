import { FC } from "react";
import content from "../assets/content";
import ButtonsContainer from "./ButtonsContainer";
import ListItem, { IPropsListItem } from "./ListItem";

interface IModalProps {
  title: string;
  subtitle: string;
  points: IPropsListItem[];
  okText: string;
  laterText: string;
}

const Modal: FC<IModalProps> = (props) => {
  const { points, subtitle, title, laterText, okText } = props;
  const splittedTitle = title.split(" ");
  return (
    <div className="grid absolute top-0 w-screen left-0 z-20 place-content-center min-h-screen dark:bg-black dark:text-white pl-[46px] pr-[26px] shadow-md rounded-xl font-lato">
      <img
        src="src/assets/img/exit.svg"
        className="absolute top-[18px] left-[18px]"
      />
      <div className="text-center ">
        <h1 className="font-bold  text-[25px]">
          <span className="text-[#1F6BF1]">{splittedTitle[0]}</span>{" "}
          {splittedTitle.slice(1).join(" ")}
        </h1>
        <p className="font-normal text-lg leading-[100%]">{subtitle}</p>
      </div>

      <section className="flex relative flex-col items-center h-[460px] overflow-y-scroll  my-[64px] sm:grid sm:grid-cols-2 sm:gap-4 sm:h-full sm:overflow-y-auto sm:my-0 sm:py-[64px] lg:grid-cols-3">
        {points.map((item) => (
          <ListItem {...item} />
        ))}
      </section>
      <ButtonsContainer okayText={okText} laterText={laterText} />
    </div>
  );
};

export default Modal;
