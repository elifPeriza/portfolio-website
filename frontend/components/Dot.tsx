type DotProps = {
  variant: "violet" | "neon";
};

const dotVariants = {
  violet: "bg-violet-secondary ",
  neon: "bg-neon-light",
};

export default function Dot({ variant }: DotProps) {
  return (
    <span
      className={`${dotVariants[variant]} rounded-full w-[0.375rem] h-[0.375rem] mx-[0.15rem] inline-flex`}
    ></span>
  );
}
