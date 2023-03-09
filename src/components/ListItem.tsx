import React, { FC } from "react";

export interface IPropsListItem {
  id: string;
  imgPath: string;
  text: string;
  title: string;
}

const ListItem: FC<IPropsListItem> = (props) => {
  const { id, imgPath, text, title } = props;
  return (
    <div
      key={id}
      className="flex w-full first:mt-0 mt-[39px] flex-grow-0 gap-8 justify-center items-center"
    >
      <img src={imgPath} className="w-[40px] h-[40px]" />
      <div className="w-full">
        <h2 className="text-xl font-semibold mb-1">{title}</h2>
        <p className="text-[#929292] text-sm dark:text-white leading-[100%]">
          {text}
        </p>
      </div>
    </div>
  );
};

export default ListItem;
