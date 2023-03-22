import ArticleCard from "@/components/ArticleCard";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import { apiURL } from "@/config/urls";

export default function Web({ articles }: any) {
  //   const { release_date, title, tag, teaser } = articles[0];
  return (
    <>
      <div className="bg-violet-bg">
        <div className=" mx-auto px-[5%] max-w-[1200px]">
          <Navbar />
          <Header />
        </div>
        <div className=" w-full mt-4 md:mt-14">
          <div className="mx-auto px-[5%] max-w-[1200px]">
            <h2 className=" underline  decoration-neon-primary decoration-[6px] [text-decoration-skip-ink:none]  font-poppins text-black font-bold text-xl sm:text-2xl sm:pt-10 ">
              Work
            </h2>
            <Project />
            <h2 className="font-poppins font-bold max-w-3xl pt-8 text-black text-2xl mb-3 sm:text-3xl">
              I love to share my learnings through writing, check out my latest
              posts<span className="text-violet-secondary">.</span>
            </h2>
            <h3 className=" underline  decoration-neon-primary decoration-[6px] [text-decoration-skip-ink:none]  font-poppins text-black font-bold text-xl pt-4 sm:text-2xl sm:pt-7 ">
              Writing
            </h3>

            <div className="grid grid-cols-1 gap-5 pt-5 pb-8 sm:grid-cols-2 sm:gap-8 sm:pt-7 sm:pb-10">
              {articles.map((article: any) => {
                return (
                  <ArticleCard
                    key={article.title}
                    id={article.id}
                    release_date={article.release_date}
                    tag={article.tag}
                    teaser={article.teaser}
                    title={article.title}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch(`${apiURL}/api/articles`);
  const data = await response.json();
  return {
    props: {
      articles: data,
    },
    revalidate: 60 * 60,
  };
}
