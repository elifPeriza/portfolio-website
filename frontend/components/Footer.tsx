import LogoSecondary from "./LogoSecondary";

export default function Footer() {
  return (
    <div className=" bg-black flex flex-col justify-center items-center ">
      <div className="pt-4 pb-1">
        <LogoSecondary variant="white" />
      </div>
      <p className="text-white text-sm font-inter pb-5">
        © 2023 designed & built by Elif Gömleksiz
      </p>
    </div>
  );
}
