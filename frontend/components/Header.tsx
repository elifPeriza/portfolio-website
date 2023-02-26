import Image from "next/image";
import ProfilePic from "../public/elif2.jpg";
import LinkedInLogo from "../public/Li-In-Bug.png";
import GithubLogo from "../public/github-mark.svg";

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
      <div className="flex flex-row gap-4 items-center py-7  mt-8 headerBreakpoint:px-0">
        <div className="flex flex-col ">
          <div className="flex flex-row gap-4 mb-5 items-center ">
            <h1 className="font-poppins font-bold text-black text-2xl  mb-3 sm:text-3xl">
              Hi, I’m Elif<span className="text-violet-secondary">.</span>
              <br /> Front-End Developer
            </h1>
            <div className="hidden max-w-[150px] headerTablet:block">
              <Image
                className="squircle object-cover aspect-[1/1] shadow-sm"
                alt="my profile picture"
                src={ProfilePic}
                width={250}
                height={250}
                unoptimized={true}
              ></Image>
            </div>
          </div>

          <p className="font-noto font-normal text-base text-black mb-4 sm:text-lg sm:mb-6 ">
            I am passionate about building things that not only look good, but
            provide a meaningful user experience.
          </p>
          <div className="flex flex-row gap-3">
            <a
              href="https://www.linkedin.com/in/elifgoemleksiz/"
              rel="noreferrer"
              className="w-7 h-7"
            >
              <Image src={LinkedInLogo} alt="Go to my LinkedIn" />
            </a>
            <a
              href="https://github.com/elifPeriza"
              target="_blank"
              rel="noreferrer"
              className="w-7 h-7"
            >
              <Image src={GithubLogo} alt="Go to my LinkedIn" />
            </a>
          </div>
        </div>
        <div className=" headerTablet:hidden flex flex-row justify-center relative w-full ">
          <div className="aspect-square w-[250px] relative ">
            <Image
              className="squircle object-cover shadow-sm"
              alt="my profile picture"
              src={ProfilePic}
              fill
              sizes="(max-width: 800px) 400px, 
              500px"
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
}
