type LogoSecondaryProps = {
  variant: "white" | "black";
};

const logoVariants = {
  white: "text-white ",
  black: "text-black",
};

export default function LogoSecondary({ variant }: LogoSecondaryProps) {
  return (
    <h2 className={`${logoVariants[variant]} font-secular text-2xl`}>
      elifs
      <span className="bg-neon-light rounded-full w-[0.375rem] h-[0.375rem] mx-[0.15rem] inline-flex"></span>
      code
    </h2>
  );
}
