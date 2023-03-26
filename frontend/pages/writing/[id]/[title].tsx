import ArticleHeader from "@/components/ArticleHeader";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import { apiURL } from "@/config/urls";
import { MarkdownRenderer } from "@/features/markdown/MarkdownRenderer";
import { GetStaticPaths, GetStaticPropsContext } from "next";

export default function Article({ article }: any) {
  return (
    <div>
      <div className="w-full bg-violet-bg pb-0 min-h-[calc(100vh-92px)] ">
        <div className="mx-auto px-5 max-w-[850px] pb-14  sm:px-9 sm:pb-20  ">
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
  console.log(apiURL);
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
  const paths = data.map((item: any) => {
    return {
      params: {
        id: `${item.id}`,
        title: item.title.split(" ").join("-").split(":").join(""),
      }, // we define the params for which next js should build this page at build time
    };
  });
  console.log(paths);
  return {
    paths,
    fallback: "blocking",
  };
};
