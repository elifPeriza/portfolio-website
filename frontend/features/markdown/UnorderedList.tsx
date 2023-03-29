import { UnorderedListComponent } from "react-markdown/lib/ast-to-react";

export const UnorderedList: UnorderedListComponent = ({ children }) => {
  return <ul className=" list-inside list-disc ">{children}</ul>;
};
