import Button from "./Button";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-between items-center py-6">
      <h2 className="font-poppins font-bold text-4xl text-violet-primary">
        LOGO
      </h2>
      <Button href="https://mag.wcoomd.org/uploads/2018/05/blank.pdf">
        Resume
      </Button>
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
