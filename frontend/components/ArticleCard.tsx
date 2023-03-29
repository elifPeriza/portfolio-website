import { ArticlePreview } from "@/types/Articles";
import Link from "next/link";
import Tag from "./Tag";

export default function ArticleCard({
  release_date,
  title,
  teaser,
  tag,
  id,
}: ArticlePreview) {
  return (
    <Link
      href={`/writing/${id}/${title.split(" ").join("-").split(":").join("")}`}
      className="block h-full"
    >
      <div className="h-full rounded-xl border-2 border-violet-primary bg-white px-6 py-6 ">
        <h3 className="mb-2 font-ibm text-sm text-violet-secondary ">
          {release_date}
        </h3>
        <h2
          className="mb-3 font-poppins text-lg
     font-bold text-black sm:text-xl "
        >
          {title}
        </h2>
        <p className="mb-4 font-inter  text-base text-black">{teaser}</p>
        <div className=""></div>
        <Tag>{tag}</Tag>
      </div>
    </Link>
  );
}
