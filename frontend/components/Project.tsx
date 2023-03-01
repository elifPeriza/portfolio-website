import Image from "next/image";
import Button from "./Button";
import Tag from "./Tag";
import MusiQue from "../public/musiQue-new.webp";

export default function Project() {
  return (
    <div className="flex flex-row justify-between gap-3 pt-5 pb-8  sm:pt-7 sm:pb-10">
      <div className="flex flex-col">
        <h2
          className="font-poppins text-black font-bold
     text-lg mb-3 sm:text-xl "
        >
          musiQue
        </h2>
        <p className="font-noto text-base  text-black mb-4 max-w-[500px]">
          musiQue offers music lovers a chance to discover new music through the
          official Spotify API. Using React.js and API implementation, the
          website displays the most popular songs and trending artists for
          selected genres, with new updates every week. Users can preview songs,
          shuffle playlists, and listen to top tracks from specific countries.
          The recommended section highlights standout tracks that catch our
          team's attention. A group project with Isamu Schlothauer, Joao Mota,
          Diogo Augustinho and Iryna Kukuruza.
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
            variant="primary"
          >
            Go to Website
          </Button>
          <Button
            href="https://github.com/elifPeriza/MusiQue"
            target="_blank"
            variant="primary"
          >
            Github Repo
          </Button>
        </div>
      </div>
      <div className="hidden sm:block">
        <Image
          alt="musique"
          src={MusiQue}
          width={450}
          height={300}
          unoptimized={true}
        ></Image>
      </div>
    </div>
  );
}
