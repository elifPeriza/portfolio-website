import Image from "next/image";
import Button from "./Button";
import Tag from "./Tag";
import MusiQue from "../public/musiQue.jpg";

export default function Project() {
  return (
    <div className="flex flex-row justify-between gap-3 pt-5 pb-8 sm:pt-7 sm:pb-10">
      <div className="flex flex-col">
        <h2
          className="font-poppins text-black font-bold
     text-lg mb-3 sm:text-xl "
        >
          musiQue
        </h2>
        <p className="font-noto text-base  text-black mb-4 max-w-[500px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis in
          eu mi bibendum neque egestas congue quisque egestas.
        </p>
        <div className="flex flex-wrap gap-3 mb-8">
          <Tag>React</Tag>
          <Tag>CSS</Tag>
          <Tag>Spotify API</Tag>
        </div>

        <div className="flex flex-row gap-6">
          <Button
            href="https://musique.wcs-student-projects.d-a-pfeiffer.info/"
            target="_blank"
          >
            Go to Website
          </Button>
          <Button href="https://github.com/elifPeriza/MusiQue" target="_blank">
            Github Repo
          </Button>
        </div>
      </div>
      <div className="hidden mx-auto flex-row justify-center relative min-w-[250px] max-h-[250px] rounded-xl overflow-hidden shadow-sm sm:flex ">
        <Image alt="musique" src={MusiQue} width={250} height={250}></Image>
      </div>
    </div>
  );
}
