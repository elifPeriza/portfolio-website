import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/prism";
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";

// With the light build  we need to import and register the TypeScript and TSX languages with the syntax highlighter
SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("typescript", typescript);

export const ArticleCode = ({ inline, className, children, ...props }: any) => {
  // Extract the language from the className using a regular expression
  const match = /language-(\w+)/.exec(className || "");

  // Render a code block with syntax highlighting if inline is false
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
