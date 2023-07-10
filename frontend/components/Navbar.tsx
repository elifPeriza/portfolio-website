import Link from "next/link";
import Button from "./Button";
import HamburgerMenu from "./HamburgerMenu";
import LogoPrimary from "./LogoPrimary";
import UnderlinedHeading from "./UnderlinedHeading";

const menuItems = ["Work", "Writing", "About Me"];

export default function Navbar() {
  return (
    <nav className=" flex flex-row items-center justify-between py-6 ">
      <LogoPrimary />
      <div className="hidden flex-row items-center gap-14 md:flex">
        {menuItems.map((item) => (
          <Link href={`/#${item.toLowerCase().replace(/ /g, "-")}`} key={item}>
            <UnderlinedHeading fontSizeMobile="1rem" fontWeight="font-semibold">
              {item}
            </UnderlinedHeading>
          </Link>
        ))}

        <Button
          href={`/resume-elifgoemleksiz.pdf`}
          target="_blank"
          variant="secondary"
        >
          Resume
        </Button>
      </div>
      <div className="flex md:hidden">
        <HamburgerMenu menuItems={menuItems} />
      </div>
    </nav>
  );
}
