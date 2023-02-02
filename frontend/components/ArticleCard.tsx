import Link from "next/link";
import Tag from "./Tag";

export default function ArticleCard({
  release_date,
  title,
  teaser,
  tag,
  id,
}: any) {
  return (
    <Link
      href={`/writing/${id}/${title.split(" ").join("-")}`}
      passHref
      className="block h-full"
    >
      <div className="bg-white border-2 border-violet-primary rounded-xl px-6 py-6 h-full ">
        <h3 className="font-robotoMono text-violet-secondary text-sm mb-2 ">
          {release_date}
        </h3>
        <h2
          className="font-poppins text-black font-bold
     text-lg mb-3 sm:text-xl "
        >
          {title}
        </h2>
        <p className="font-noto text-base  text-black mb-4">{teaser}</p>
        <div className=""></div>
        <Tag>{tag}</Tag>
      </div>
    </Link>
  );
}
