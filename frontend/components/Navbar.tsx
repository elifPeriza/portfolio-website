import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-between items-center py-6">
      <h2 className="font-poppins font-bold text-4xl text-violet-primary">
        LOGO
      </h2>
      <Link
        href="https://mag.wcoomd.org/uploads/2018/05/blank.pdf"
        target="_blank"
        rel="noreferrer"
      >
        <button className="font-noto font-bold text-[0.925rem] text-violet-primary border-2 border-violet-primary rounded-md px-3 py-1 ">
          RESUME
        </button>
      </Link>
    </div>
  );
}

{
  /* <Link href={route}>
  <button
    className={`font-semibold rounded-full px-6 py-[0.6rem] border-2 ${buttonVariants[variant]}`}
    onClick={onClick}
  >
    {children}
  </button>
</Link>; */
}
