import ArticleCard from "@/components/ArticleCard";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";

export const backendURL = "http://localhost:5005";
export default function Web({ articles }: any) {
  //   const { release_date, title, tag, teaser } = articles[0];
  return (
    <>
      <div className=" mx-auto px-[5%] max-w-[1200px]">
        <Navbar />
        <Header />
      </div>
      <div className="bg-violet-bg w-full mt-8">
        <div className="mx-auto px-[5%] max-w-[1200px]">
          <h2 className=" underline  decoration-neon-primary decoration-[6px] [text-decoration-skip-ink:none]  font-poppins text-black font-bold text-xl pt-7 sm:text-2xl sm:pt-10 ">
            Work
          </h2>
          <Project />
          <h2 className=" underline  decoration-neon-primary decoration-[6px] [text-decoration-skip-ink:none]  font-poppins text-black font-bold text-xl pt-7 sm:text-2xl sm:pt-10 ">
            Writing
          </h2>

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
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch(`${backendURL}/api/articles`);
  const data = await response.json();
  return {
    props: {
      articles: data,
    },
    revalidate: 60 * 60,
  };
}
