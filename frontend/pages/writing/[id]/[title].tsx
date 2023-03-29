import ArticleHeader from "@/components/ArticleHeader";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import { apiURL } from "@/config/urls";
import { MarkdownRenderer } from "@/features/markdown/MarkdownRenderer";
import { ArticlePreview } from "@/types/Articles";
import { GetStaticPaths, GetStaticPropsContext } from "next";

type Article = {
  id: number;
  title: string;
  keywords: string;
  teaser: string;
  release_date: string;
  text: string;
};

type ArticleProps = {
  article: Article;
};

export default function Article({ article }: ArticleProps) {
  return (
    <div>
      <div className="min-h-[calc(100vh-92px)] w-full bg-violet-bg pb-0 ">
        <div className="mx-auto max-w-[850px] px-5 pb-14  sm:px-9 sm:pb-20  ">
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
      <Footer />
    </div>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const response = await fetch(`${apiURL}/api/articles/${context.params?.id}`);
  const data = await response.json();

  return {
    props: {
      article: data,
    },
    revalidate: 60 * 60,
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`${apiURL}/api/articles`);

  const data = await response.json();
  const paths = data.map((item: ArticlePreview) => {
    return {
      params: {
        id: `${item.id}`,
        title: item.title.split(" ").join("-").split(":").join(""),
      }, // we define the params for which next js should build this page at build time
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
};
