import Button from "./Button";
import LogoPrimary from "./LogoPrimary";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-between items-center py-6 ">
      <LogoPrimary />
      <Button
        href={`/resume-elifgoemleksiz.pdf`}
        target="_blank"
        variant="secondary"
      >
        Resume
      </Button>
    </div>
  );
}
