import Dot from "./Dot";

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
      <Dot variant="neon" />
      code
    </h2>
  );
}
