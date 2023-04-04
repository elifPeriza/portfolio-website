import Image from "next/image";
import Button from "./Button";
import Tag from "./Tag";
import MusiQue from "../public/musiQue-new.webp";
import Skyhub from "../public/skyhub-new.webp";
import Portfolio from "../public/portfolio.webp";
import CommitGraph from "./CommitGraph";
import { getDifferenceInDays } from "@/utils/dates";

type ProjectCommits = {
  repo: string;
  commits: string[];
};

type ProjectProps = {
  githubCommits: ProjectCommits[];
};

type CommitItem = {
  date: string;
  commitCount: number;
  daysBeforeWithZeroCommits: number;
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

// Function to generate commit data for each project
const generateCommitsWithGapInfo = (githubCommits: ProjectCommits) => {
  const commitCountTotal = githubCommits.commits.length;

  const lastCommit = githubCommits.commits[0];
  const firstCommit = githubCommits.commits[commitCountTotal - 1];
  const totalDays =
    getDifferenceInDays(new Date(firstCommit), new Date(lastCommit)) + 2;

  // Initializing array to store commit data with gap information
  let commitsNew: CommitItem[] = [];
  let totalDaysWithZeroCommits = 0;

  // Looping through each commit in reverse order

  githubCommits.commits.reverse().forEach((commit: string, i: number) => {
    const date = commit.split("T")[0];

    // If first commit, initialize commit data with one commit and zero days before with zero commits
    if (i === 0) {
      commitsNew = [{ date, commitCount: 1, daysBeforeWithZeroCommits: 0 }];
      return;
    }
    //  Checking if commit already exists for a given date
    let existingCommit = commitsNew.find((item) => item.date === date);

    if (existingCommit) {
      // If commit already exists, increment only the commit count
      existingCommit.commitCount += 1;
    } else {
      // If commit does not exist, calculate daysBeforeWithZeroCommits and add new commit data to new commit array
      const daysBeforeWithZeroCommits = Math.min(
        7,
        getDifferenceInDays(
          new Date(date),
          new Date(commitsNew.slice(-1)[0].date)
        ) - 1
      );
      totalDaysWithZeroCommits += daysBeforeWithZeroCommits;

      commitsNew.push({
        date,
        commitCount: 1,
        daysBeforeWithZeroCommits,
      });
    }
  });
  // Return object with commit data and gap information for a given repository
  return {
    [githubCommits.repo]: {
      commitCountTotal,
      totalDays,
      totalDaysWithZeroCommits,
      commitsNew,
    },
  };
};

type ProjectsCommitData = ReturnType<typeof generateCommitsWithGapInfo>;

const generateProjectsCommitData = (githubCommits: ProjectCommits[]) => {
  // Create an empty object to store project commit data
  let projectsCommitData: ProjectsCommitData = {};

  githubCommits.forEach((item) => {
    // Generate new commit data for the current project
    const commitData = generateCommitsWithGapInfo(item);
    // create a key with repo name in projectsCommitData and assign it the value of the new commitData;
    projectsCommitData[item.repo] = commitData[item.repo];
    // projectsCommitData = {...projectsCommitData, ...commitData};
  });
  return projectsCommitData;
};

export default function Project({ githubCommits }: ProjectProps) {
  const projectsCommitData = generateProjectsCommitData(githubCommits);
  const data = projects.map((project) => {
    const {
      commitsNew: projectCommits,
      commitCountTotal,
      totalDays,
      totalDaysWithZeroCommits,
    } = projectsCommitData[project.repoName as string];

    if (!projectCommits) return { project, totalDaysWithZeroCommits: 0 };

    return {
      project,
      commitCountTotal,
      totalDays,
      projectCommits,
      totalDaysWithZeroCommits,
    };
  });

  return (
    <>
      {data.map(
        ({
          project,
          projectCommits,
          totalDays,
          commitCountTotal,
          totalDaysWithZeroCommits,
        }) => {
          return (
            <div
              key={project.title}
              className=" flex flex-row justify-between gap-6  pt-5 pb-5  sm:pb-10"
            >
              <div className="flex flex-col">
                <h2
                  className="mb-3 font-poppins text-lg
     font-bold text-black sm:text-xl "
                >
                  {project.title}
                </h2>
                <div className="mb-4 block sm:hidden">
                  <Image
                    alt={project.imageAlt}
                    src={project.image}
                    width={450}
                    height={300}
                    unoptimized={true}
                  ></Image>
                </div>
                <p className="mb-4 max-w-[500px]  font-inter text-base text-black ">
                  {project.description}
                </p>
                <div className="mb-5 flex max-w-[500px] flex-wrap gap-3">
                  {project.stack.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
                {projectCommits && (
                  <div className=" pb-8 sm:hidden">
                    <CommitGraph
                      projectCommits={projectCommits}
                      gapDays={totalDaysWithZeroCommits}
                      totalDays={totalDays}
                      commitCountTotal={commitCountTotal}
                    />
                  </div>
                )}
                <div className=" flex flex-row gap-6 sm:mt-5">
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

              <div className="flex flex-col">
                <div className="hidden sm:block">
                  <Image
                    alt={project.imageAlt}
                    src={project.image}
                    width={450}
                    height={300}
                    unoptimized={true}
                  ></Image>
                </div>
                {projectCommits && (
                  <div className=" hidden pt-6 sm:block sm:self-end">
                    <CommitGraph
                      projectCommits={projectCommits}
                      gapDays={totalDaysWithZeroCommits}
                      totalDays={totalDays}
                      commitCountTotal={commitCountTotal}
                    />
                  </div>
                )}
              </div>
            </div>
          );
        }
      )}
    </>
  );
}
