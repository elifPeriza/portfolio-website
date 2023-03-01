import React, { ReactNode } from "react";
import Link from "next/link";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant: "primary" | "secondary";
  target?: "_self" | "_blank";
};

const buttonVariants = {
  primary:
    "font-noto bg-violet-button font-normal text-[0.925rem] text-white border-2 border-violet-button rounded-md px-3 py-1 drop-shadow-md hover:filter hover:saturate-[0.9] hover:brightness-[0.9] hover:contrast-[1.2] ",
  secondary:
    "font-noto bg-white font-bold text-[0.925rem] text-violet-button border-2 border-violet-button rounded-md px-3 py-1 drop-shadow-sm hover:bg-violet-button hover:font-normal hover:text-white",
};

export default function Button({
  href,
  children,
  target = "_self",
  variant,
}: ButtonProps) {
  return (
    <Link href={href} target={target} rel="noreferrer">
      <button className={buttonVariants[variant]}>{children}</button>
    </Link>
  );
}
