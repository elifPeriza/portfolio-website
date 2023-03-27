import Image from "next/image";
import ProfilePic from "../public/elif2.webp";
import LinkedInLogo from "../public/linkedin-icon.png";
import GithubLogo from "../public/github-mark.svg";
import Dot from "./Dot";

export default function Header() {
  return (
    <>
      <svg width="0" height="0">
        <defs>
          <clipPath id="squircle" clipPathUnits="objectBoundingBox">
            <path d="M .5,0 C .1,0 0,.1 0,.5 0,.9 .1,1 .5,1 .9,1 1,.9 1,.5 1,.1 .9,0 .5,0 Z" />
          </clipPath>
        </defs>
      </svg>
      <div className="mt-8 flex flex-row items-center gap-4  py-7 sm:mt-16 headerBreakpoint:px-0">
        <div className="flex flex-col ">
          <div className="mb-5 flex flex-row items-center gap-4 ">
            <h1 className="mb-3 font-poppins text-2xl font-bold  text-black sm:text-3xl">
              Hi, I’m Elif
              <Dot variant="violet" />
              <br /> Front-End Developer
            </h1>
            <div className="squircle hidden aspect-square h-[142px] w-[142px] bg-[url('/elif2.webp')] bg-cover bg-center headerTablet:block"></div>
          </div>

          <p className="mb-4 font-inter text-base font-normal text-black sm:mb-6 sm:text-lg ">
            I am passionate about building things on the internet that not only
            look great, but provide a seamless and enjoyable user experience.
          </p>
          <div className="flex flex-row gap-3">
            <a
              href="https://www.linkedin.com/in/elifgoemleksiz/"
              rel="noreferrer"
              className="h-7 w-7"
            >
              <Image src={LinkedInLogo} alt="Go to my LinkedIn" />
            </a>
            <a
              href="https://github.com/elifPeriza"
              target="_blank"
              rel="noreferrer"
              className="h-7 w-7"
            >
              <Image src={GithubLogo} alt="Go to my LinkedIn" />
            </a>
          </div>
        </div>
        <div className=" relative flex w-full flex-row justify-center headerTablet:hidden ">
          <div className=" squircle relative h-[200px] w-[200px] bg-[url('/elif2.webp')] bg-cover bg-center sm:h-[220px] sm:w-[220px] md:h-[240px] md:w-[240px] lg:h-[260px] lg:w-[260px] "></div>
        </div>
      </div>
    </>
  );
}
