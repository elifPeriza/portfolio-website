import ArticleCard from "@/components/ArticleCard";
import Dot from "@/components/Dot";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import { apiURL } from "@/config/urls";

export default function Web({ articles }: any) {
  //   const { release_date, title, tag, teaser } = articles[0];
  return (
    <>
      <div className="bg-violet-bg">
        <div className=" mx-auto max-w-[1200px] px-[5%]">
          <Navbar />
          <Header />
        </div>
        <div className=" mt-4 w-full md:mt-14">
          <div className="mx-auto max-w-[1200px] px-[5%]">
            <h2 className=" font-poppins  text-xl font-bold text-black  underline decoration-neon-primary decoration-[6px] [text-decoration-skip-ink:none] sm:pt-10 sm:text-2xl ">
              Work
            </h2>
            <Project />
            <h2 className="mb-3 max-w-3xl pt-8 font-poppins text-2xl font-bold text-black sm:text-3xl blogIntroBreakpoint:max-w-[301.5px] ">
              I love to share my learnings through writing, check out my latest
              posts
              <Dot variant="violet" />
            </h2>
            <h3 className=" pt-4  font-poppins text-xl font-bold  text-black underline decoration-neon-primary decoration-[6px] [text-decoration-skip-ink:none] sm:pt-7 sm:text-2xl ">
              Writing
            </h3>

            <div className="grid grid-cols-1 gap-5 pt-5 pb-14 sm:grid-cols-2 sm:gap-8 sm:pt-7 sm:pb-20">
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

        <Footer />
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
