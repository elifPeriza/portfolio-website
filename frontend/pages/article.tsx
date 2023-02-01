import { MarkdownRenderer } from "@/features/markdown/MarkdownRenderer";

const text = `## How to create wavy shapes with SVG And Some more Text

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis in eu mi bibendum neque egestas congue quisque egestas. 

### What is SVG?

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis in eu mi bibendum neque egestas congue quisque egestas.

![Alt text](https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80)

### Resources

[CSS/SVG Art & Animation: A Curated Collection](https://blog.anniebombanie.com/css-svg-art-animation-a-curated-collection-of-useful-resources-tutorials)


`;
export default function Article() {
  return (
    <div className="mx-auto max-w-3xl">
      <MarkdownRenderer markdownText={text}></MarkdownRenderer>
    </div>
  );
}
