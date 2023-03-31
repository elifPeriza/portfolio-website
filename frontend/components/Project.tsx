import Image from "next/image";
import Button from "./Button";
import Tag from "./Tag";
import MusiQue from "../public/musiQue-new.webp";
import Skyhub from "../public/skyhub-new.webp";
import Portfolio from "../public/portfolio.webp";

type ProjectCommits = {
  repo: string;
  commits: string[];
};

type ProjectProps = {
  githubCommits: ProjectCommits[];
};

const projects = [
  {
    title: "musiQue",
    description: `musiQue offers music lovers a chance to discover new music through the
            Spotify API. Using React and API implementation, the
            website displays the most popular songs and trending artists for
            selected genres, with new updates every week. Users can preview songs,
            shuffle playlists, and listen to top tracks from specific countries.
            The recommended section highlights standout tracks that catch our
            team's attention. A group project with Isamu Schlothauer, João Mota,
            Diogo Augustinho and Iryna Kukuruza.`,
    stack: ["React", "Spotify API", "CSS", "Figma"],
    urlWebsite: "https://musique.wcs-student-projects.d-a-pfeiffer.info/",
    urlGithub: "https://github.com/elifPeriza/MusiQue",
    image: MusiQue,
    imageAlt: "screenshots of the website Musique",
    repoName: "MusiQue",
  },
  {
    title: "Skyhub (Rework)",
    description: `The task was to rework a second version of the website using a modern stack, with a focus on improving the user experience and creating a fully responsive version. Skyhub aimes at airlines and recruitment companies, as well as individuals searching for aviation jobs or interested in careers in the industry. Features include: "Job Market" where airlines or recruiters can post jobs, insights into specific airlines and salaries for which every visitor can submit new information, a registration and login process.  A group project with Isamu Schlothauer, João Mota, Diogo Augustinho and Iryna Kukuruza.`,
    stack: [
      "React",
      "Next.js",
      "SaSS",
      "TailwindCSS",
      "Typescript",
      "Node.js",
      "Express.js",
      "MySQL",
      "Figma",
    ],
    image: Skyhub,
    imageAlt: "screenshots of the website Skyhub",
    urlWebsite: "https://skyhubaero-staging-web.up.railway.app/",
    repoName: "skyhub.aero",
  },

  {
    title: "Portfolio",
    description: `My portfolio showcases my web development projects and skills, along with a blog section where I share my insights and experiences. The blog posts are rendered using the react-markdown and react-syntax-highlighter libraries. The blog section is built with Incremental Static Regeneration (ISR) of Next.js for optimal performance and my database is hosted on PlanetScale.`,
    stack: [
      "React",
      "Next.js",
      "TailwindCSS",
      "Typescript",
      "Node.js",
      "Express.js",
      "MySQL",
      "Figma",
    ],

    urlGithub: "https://github.com/elifPeriza/portfolio-website",
    image: Portfolio,
    imageAlt: "screenshots of my portfolio website",
    repoName: "portfolio-website",
  },
];

export default function Project({ githubCommits }: ProjectProps) {
  return (
    <>
      {projects.map((project) => {
        const projectCommits = githubCommits.find(
          (projectData: ProjectCommits) => projectData.repo === project.repoName
        );

        const formattedCommitsArray = projectCommits?.commits?.map((date) => {
          const newDate = date.split("T")[0];
          return newDate;
        });

        const commitCountPerDate = formattedCommitsArray?.reduce(
          (acc, curr) => {
            const existingDate = acc.findIndex((el) => el.date === curr);
            if (existingDate !== -1) {
              acc[existingDate].commitCount += 1;
            } else {
              acc.push({ date: curr, commitCount: 1 });
            }
            return acc;
          },
          [] as { date: string; commitCount: number }[]
        );

        //console.log(commitCountPerDate);

        const commitCountTotal = commitCountPerDate?.reduce((acc, curr) => {
          acc += curr.commitCount;
          return acc;
        }, 0);

        //console.log(commitCountTotal);

        return (
          <div
            key={project.title}
            className="flex flex-row justify-between gap-6 pt-5 pb-8  sm:pt-7 sm:pb-14"
          >
            <div className="flex flex-col">
              <h2
                className="mb-3 font-poppins text-lg
     font-bold text-black sm:text-xl "
              >
                {project.title}
              </h2>
              <p className="mb-4 max-w-[500px]  font-inter text-base text-black ">
                {project.description}
              </p>
              <div className="mb-8 flex max-w-[500px] flex-wrap gap-3">
                {project.stack.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>

              <div className="flex flex-row gap-6">
                {project.urlWebsite && (
                  <Button
                    href={project.urlWebsite}
                    target="_blank"
                    variant="primary"
                  >
                    Go to Website
                  </Button>
                )}
                {project.urlGithub && (
                  <Button
                    href={project.urlGithub}
                    target="_blank"
                    variant="primary"
                  >
                    Github Repo
                  </Button>
                )}
              </div>
            </div>
            <div className="hidden sm:block">
              <Image
                alt={project.imageAlt}
                src={project.image}
                width={450}
                height={300}
                unoptimized={true}
              ></Image>
            </div>
          </div>
        );
      })}
    </>
  );
}
