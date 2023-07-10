import ArticleCard from "@/components/ArticleCard";
import Dot from "@/components/Dot";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import { apiURL } from "@/config/urls";
import { ArticlePreview } from "@/types/Articles";

type ProjectCommits = {
  repo: string;
  commits: string[];
};

type HomepageProps = {
  articles: ArticlePreview[];
  githubCommits: ProjectCommits[];
};

export default function Home({ articles, githubCommits }: HomepageProps) {
  return (
    <>
      <div className="bg-violet-bg">
        <div className=" mx-auto max-w-[1400px] px-[5%] ">
          <div>
            <Navbar />
          </div>

          <Header />
          <div className=" mt-4 w-full md:mt-14">
            <h2
              id="work"
              className=" font-poppins  text-xl font-bold text-black  underline decoration-neon-primary decoration-[6px] [text-decoration-skip-ink:none] sm:pt-10 sm:text-2xl "
            >
              Work
            </h2>
            <div className=" pb-6">
              <Project githubCommits={githubCommits} />
            </div>

            <h2 className=" max-w-3xl  font-poppins text-2xl font-bold text-black sm:text-3xl blogIntroBreakpoint:max-w-[301.5px] ">
              I love to share my learnings through writing, check out my latest
              posts
              <Dot variant="violet" />
            </h2>
            <h3
              id="writing"
              className=" pt-5  font-poppins text-xl font-bold  text-black underline decoration-neon-primary decoration-[6px] [text-decoration-skip-ink:none] sm:pt-10 sm:text-2xl "
            >
              Writing
            </h3>

            <div className="grid grid-cols-1 gap-5 pb-14 pt-5 sm:grid-cols-2 sm:gap-8 sm:pb-20 sm:pt-7">
              {articles.map((article: ArticlePreview) => {
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
  // fetch article data
  const articlesResponse = await fetch(`${apiURL}/api/articles`);
  const articles = await articlesResponse.json();

  // fetch Github data
  const token = process.env.GITHUB_TOKEN;
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github.v3+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };

  // makermatic
  const makermaticUrl =
    "https://api.github.com/repos/elifPeriza/makermatic/commits?author=elifPeriza&per_page=100";
  const makermaticResponse = await fetch(makermaticUrl, { headers });
  const makermaticData = await makermaticResponse.json();

  // moment

  const momentUrl =
    "https://api.github.com/repos/elifPeriza/gallery-website/commits?author=elifPeriza&per_page=100";
  const momentResponse = await fetch(momentUrl, { headers });
  const momentData = await momentResponse.json();
  // portfolio
  const portfolioUrl =
    "https://api.github.com/repos/elifPeriza/portfolio-website/commits?author=elifPeriza&per_page=100";
  const portfolioResponse = await fetch(portfolioUrl, { headers });
  const portfolioData = await portfolioResponse.json();

  // skyhub
  const skyhubUlr =
    "https://api.github.com/repos/Skyhub-aero/skyhub.aero/commits?sha=cbee2d5e34604479e578a19c08113495895cb2ee&per_page=100&author=elifPeriza";
  const skyhubResponse = await fetch(skyhubUlr, { headers });
  const skyhubData = await skyhubResponse.json();

  // musiQue
  const musiqueUrl =
    "https://api.github.com/repos/elifPeriza/MusiQue/commits?sha=b6f1382882961006dc7544c178833871a030e74f&author=elifPeriza&per_page=100";
  const musiqueResponse = await fetch(musiqueUrl, { headers });
  const musiqueData = await musiqueResponse.json();

  // function transforming response data into needed data
  function createProjectCommits(fetchedData: any) {
    const commitsArray = fetchedData.map((commit: any) => {
      const { date } = commit.commit.author;
      return date;
    });
    // extracting project name from commit url
    const { url } = fetchedData[0].commit;
    const repo = url.split("/")[5];
    // constructing needed data
    const projectCommits = { repo: repo, commits: commitsArray };
    return projectCommits;
  }

  const makermaticCommits = createProjectCommits(makermaticData);
  const momentCommits = createProjectCommits(momentData);
  const portfolioCommits = createProjectCommits(portfolioData);
  const skyhubCommits = createProjectCommits(skyhubData);
  const musiqueCommits = createProjectCommits(musiqueData);

  const githubCommits = [
    makermaticCommits,
    momentCommits,
    portfolioCommits,
    skyhubCommits,
    musiqueCommits,
  ];

  return {
    props: {
      articles,
      githubCommits,
    },
    revalidate: 1,
  };
}
