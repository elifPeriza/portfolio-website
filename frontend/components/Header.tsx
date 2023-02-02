import Image from "next/image";
import ProfilePic from "../public/elif2.png";
import LinkedInLogo from "../public/Li-In-Bug.png";
import GithubLogo from "../public/github-mark.svg";

export default function Header() {
  return (
    <div className="flex flex-row gap-4 items-center py-7 px-10  mt-8 headerBreakpoint:px-0">
      <div className="flex flex-col ">
        <h1 className="font-poppins font-bold text-black text-2xl  mb-3 sm:text-3xl">
          Hi, I’m Elif<span className="text-violet-secondary">.</span>
          <br /> Front-End Webdeveloper
        </h1>
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
        <Image
          className="object-cover rounded-[50%] aspect-[1/1] shadow-sm"
          alt="my profile picture"
          src={ProfilePic}
          width={250}
          height={250}
        ></Image>
      </div>
    </div>
  );
}
