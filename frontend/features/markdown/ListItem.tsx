import { LiComponent } from "react-markdown/lib/ast-to-react";

export const ListItem: LiComponent = ({ children }) => {
  return (
    <li className=" mb-4 font-inter text-base font-normal text-black sm:mb-6 sm:text-lg ">
      {children}
    </li>
  );
};
