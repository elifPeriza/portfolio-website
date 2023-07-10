import ArticleCard from "@/components/ArticleCard";
import Dot from "@/components/Dot";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import Tag from "@/components/Tag";
import { apiURL } from "@/config/urls";
import { ArticlePreview } from "@/types/Articles";
import Image from "next/image";
import GithubLogo from "../public/github-mark.svg";
import TwitterLogo from "../public/twitter-icon.png";

type ProjectCommits = {
  repo: string;
  commits: string[];
};

type HomepageProps = {
  articles: ArticlePreview[];
  githubCommits: ProjectCommits[];
};

const currentStack = [
  "HTML",
  "CSS",
  "TailwindCSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "E2E-Testing (Playwright)",
  "Express.js",
  "MySQL",
  "SQLite",
  "ORM (DrizzleORM)",
  "Node.js",
  "Figma",
  "Git",
  "GitHub",
];

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

            <h3
              id="about-me"
              className="pt-5  font-poppins text-xl font-bold  text-black underline decoration-neon-primary decoration-[6px] [text-decoration-skip-ink:none] sm:pt-10 sm:text-2xl "
            >
              About me
            </h3>
            <div className=" mb-5 mt-5 sm:flex sm:flex-row  sm:gap-14 lg:gap-28 ">
              <div className="mb-8  font-ibm text-base leading-6 text-black md:max-w-[550px]">
                <p>
                  I'm a curious Junior Front-End Developer with a solid backend
                  knowledge and a keen eye for UI/UX design. Clean and readable
                  code is my top priority and I'm always looking for ways to
                  improve the user experience. I like to keep up-to-date and
                  enjoy learning new cutting-edge technologies and frameworks.
                </p>
                <br />
                <p>
                  After working in Research, (Higher) Education, and Project
                  Management, I made the decision to pursue my passion for web
                  development. It all started with a side project, where I took
                  on the UX Design responsibilities and realized how excited I
                  was about the process of building a user-centric product.
                </p>
                <br />
                <p>
                  Through self-learning on platforms like Udemy, I delved into
                  HTML, CSS, and JavaScript and graduated from a 5-month
                  Full-Stack Web Developer bootcamp where I gained in-depth
                  knowledge of HTML, JavaScript, CSS, and React, applying them
                  practically in group projects. While developing responsive and
                  user-friendly websites, I worked with Next.js, Typescript,
                  Express.js and MySQL.
                </p>
                <br />
                <p>
                  Since then, I've continued my learning journey, constantly
                  building projects and exploring new technologies. Feel free to
                  check out my work and reach out.
                </p>
              </div>
              <div className=" mb-4 flex flex-col gap-2 font-ibm text-base leading-6 text-black md:max-w-[650px]">
                <p>Checkout my Github:</p>
                <a
                  href="https://github.com/elifPeriza"
                  target="_blank"
                  rel="noreferrer"
                  className="h-7 w-7"
                >
                  <Image src={GithubLogo} alt="Go to my Github" />
                </a>
                <p className="mt-6">I also tweet about coding:</p>
                <a
                  href="https://twitter.com/elifscode"
                  target="_blank"
                  rel="noreferrer"
                  className="h-7 w-7"
                >
                  <Image src={TwitterLogo} alt="Go to my Twitter" />
                </a>
                <p className="mt-6">
                  Technologies and tools I've been working with:
                </p>
                <div className="mb-5 mt-2 flex max-w-[500px] flex-wrap gap-3">
                  {currentStack.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>
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
