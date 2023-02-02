import ArticleHeader from "@/components/ArticleHeader";
import { MarkdownRenderer } from "@/features/markdown/MarkdownRenderer";
import Link from "next/link";

const text = `

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis in eu mi bibendum neque egestas congue quisque egestas. 

## What is SVG?

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis in eu mi bibendum neque egestas congue quisque egestas.

![Alt text](https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80)

### Resources

[CSS/SVG Art & Animation: A Curated Collection](https://blog.anniebombanie.com/css-svg-art-animation-a-curated-collection-of-useful-resources-tutorials)


`;
export default function Article() {
  return (
    <div className="mx-auto px-5 max-w-[700px] sm:px-9">
      <div className="flex flex-row justify-end pt-8">
        <Link href="/">
          <button className="font-noto font-bold text-[0.925rem] text-violet-primary border-2 border-violet-primary rounded-md px-3 py-1 ">
            Go Back
          </button>
        </Link>
      </div>

      <ArticleHeader />
      <MarkdownRenderer markdownText={text}></MarkdownRenderer>
    </div>
  );
}
