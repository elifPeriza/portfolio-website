import Link from "next/link";

export default function Button({ href, children }: any) {
  return (
    <Link href={href} target="_blank" rel="noreferrer">
      <button className="font-noto font-bold text-[0.925rem] text-violet-primary border-2 border-violet-primary rounded-md px-3 py-1 ">
        {children}
      </button>
    </Link>
  );
}
