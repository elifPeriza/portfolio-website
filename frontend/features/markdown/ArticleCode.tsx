import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/prism";
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";

SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("typescript", typescript);

export const ArticleCode = ({ inline, className, children, ...props }: any) => {
  const match = /language-(\w+)/.exec(className || "");
  return !inline ? (
    <SyntaxHighlighter
      children={String(children).replace(/\n$/, "")}
      style={nightOwl}
      customStyle={{
        borderRadius: "5px",
        backgroundColor: "#08090a",
        marginBottom: "1.25rem",
        padding: "1rem",
      }}
      language={match?.[1] || "typescript"}
      PreTag="div"
      {...props}
    />
  ) : (
    <code
      className={` bg-gray-200 rounded-sm font-normal ${className} `}
      {...props}
    >
      {children}
    </code>
  );
};
