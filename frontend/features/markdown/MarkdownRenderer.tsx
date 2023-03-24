/* eslint-disable react/no-children-prop */
import ReactMarkdown from "react-markdown";
import { ArticleH2 } from "./ArticleH2";
import { ArticleH3 } from "./ArticleH3";
import { ArticleImage } from "./ArticleImage";
import { ArticleLink } from "./ArticleLink";
import { ArticleParagraph } from "./ArticleParagraph";
import { ArticleCode } from "./ArticleCode";
import { UnorderedList } from "./UnorderedList";
import { ListItem } from "./ListItem";

export const MarkdownRenderer = ({ markdownText }: any) => {
  // eslint-disable-next-line react/no-children-prop
  return (
    <ReactMarkdown
      children={markdownText}
      components={{
        img: ArticleImage,
        h2: ArticleH2,
        h3: ArticleH3,
        p: ArticleParagraph,
        a: ArticleLink,
        code: ArticleCode,
        ul: UnorderedList,
        li: ListItem,
      }}
    ></ReactMarkdown>
  );
};
