type UnderlinedHeadingProps = {
  children: string;
  fontSizeMobile: string;
  fontWeight: "font-bold" | "font-semibold";
  fontSizeDesktop?: string;
  paddingTopMobile?: string;
  paddingTopDesktop?: string;
};

export default function UnderlinedHeading({
  children,
  fontSizeMobile,
  fontWeight,
  fontSizeDesktop,
  paddingTopMobile,
  paddingTopDesktop,
}: UnderlinedHeadingProps) {
  return (
    <h2
      className={`${paddingTopMobile} font-poppins ${fontSizeMobile} ${fontWeight} text-black underline decoration-neon-primary 
  decoration-[6px] [text-decoration-skip-ink:none] sm:${paddingTopDesktop} sm:${fontSizeDesktop}`}
    >
      {children}
    </h2>
  );
}
