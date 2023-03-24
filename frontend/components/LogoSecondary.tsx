type LogoSecondaryProps = {
  variant: "white" | "black";
};

const logoVariants = {
  white: "text-white ",
  black: "text-black",
};

export default function LogoSecondary({ variant }: LogoSecondaryProps) {
  return (
    <h2
      className={`${logoVariants[variant]} font-secular text-2xl self-center`}
    >
      elifs
      <span className="bg-neon-light rounded-full w-[0.3rem] h-[0.3rem] mx-[0.1rem] inline-flex items-center justify-center"></span>
      code
    </h2>
  );
}
