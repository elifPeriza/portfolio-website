/* eslint-disable react/no-children-prop */
import ReactMarkdown from "react-markdown";
import { ArticleImage } from "./ArticleImage";

export const MarkdownRenderer = ({ markdownText }: any) => {
  // eslint-disable-next-line react/no-children-prop
  return (
    <ReactMarkdown
      children={markdownText}
      components={{
        img: ArticleImage,
      }}
    ></ReactMarkdown>
  );
};
