import { FC } from "react";
import content from "../assets/content";
import ButtonsContainer from "./ButtonsContainer";
import ListItem, { IPropsListItem } from "./ListItem";

interface IModalProps {
  title: string;
  subtitle: string;
  points: IPropsListItem[];
}

const Modal: FC<IModalProps> = (props) => {
  const { points, subtitle, title } = props;
  const splittedTitle = title.split(" ");
  return (
    <div className="grid absolute top-0 left-0 z-20 place-content-center min-h-screen dark:bg-black dark:text-white pl-[46px] pr-[26px] shadow-md rounded-xl font-lato">
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

      <section className="flex relative flex-col items-center h-[460px] overflow-y-scroll  my-[64px]">
        {points.map((item) => (
          <ListItem {...item} />
        ))}
      </section>
      <ButtonsContainer okayText="Let's Go!" laterText="Later" />
    </div>
  );
};

export default Modal;
