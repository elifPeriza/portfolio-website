import Link from "next/link";
import { useState } from "react";
import Button from "./Button";
import UnderlinedHeading from "./UnderlinedHeading";

export default function HamburgerMenu({ menuItems }: { menuItems: string[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
      </button>
      <div
        className={`fixed inset-0 z-10 bg-black bg-opacity-50 transition-opacity duration-200 ${
          isOpen ? "opacity-100" : "opacity-0"
        } pointer-events-none backdrop-blur-[2px]`}
      ></div>

      <div
        className={`fixed right-0 top-0 z-20 flex h-[50vh] w-[75vw] max-w-[400px] transform flex-col  bg-violet-bg p-4 transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } ease-in-out `}
      >
        <button
          className="right-5 top-5 self-end"
          onClick={() => setIsOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        <div className="mt-10 flex flex-col items-center justify-center gap-10">
          {menuItems.map((item) => {
            return (
              <div
                key={item}
                role="button"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <Link href={`/#${item.toLowerCase()}`}>
                  <UnderlinedHeading
                    fontSizeMobile="1rem"
                    fontWeight="font-semibold"
                  >
                    {item}
                  </UnderlinedHeading>
                </Link>
              </div>
            );
          })}
          <Button
            href={`/resume-elifgoemleksiz.pdf`}
            target="_blank"
            variant="secondary"
          >
            Resume
          </Button>
        </div>
      </div>
    </div>
  );
}
