import ArticleHeader from "@/components/ArticleHeader";
import Button from "@/components/Button";
import { MarkdownRenderer } from "@/features/markdown/MarkdownRenderer";
import { GetStaticPaths, GetStaticPropsContext } from "next";
import Link from "next/link";

const backendURL = "http://localhost:5005";

export default function Article({ article }: any) {
  return (
    <div className="w-full bg-violet-bg">
      <div className="mx-auto px-5 max-w-[700px] pb-24 sm:px-9">
        <div className="flex flex-row justify-end pt-8">
          <Button href="/" variant="secondary">
            Go Back
          </Button>
        </div>

        <ArticleHeader
          title={article.title}
          date={article.release_date}
          keywords={article.keywords}
        />
        <MarkdownRenderer markdownText={article.text}></MarkdownRenderer>
      </div>
    </div>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const response = await fetch(
    `${backendURL}/api/articles/${context.params?.id}`
  );
  const data = await response.json();
  return {
    props: {
      article: data,
    },
    revalidate: 60 * 60,
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`${backendURL}/api/articles`);
  const data = await response.json();

  const paths = data.map((item: any) => {
    return {
      params: { id: `${item.id}`, title: item.title.split(" ").join("-") }, // we define the params for which next js should build this page at build time
    };
  });
  console.log(paths);
  return {
    paths,
    fallback: "blocking",
  };
};
