import { apiURL } from "@/config/urls";
import Button from "./Button";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-between items-center py-6 ">
      <h2 className="font-poppins font-bold text-4xl text-black">
        EG<span className="text-violet-secondary">.</span>
      </h2>
      <Button
        href={`${apiURL}/static/files/resume.pdf`}
        target="_blank"
        variant="secondary"
      >
        Resume
      </Button>
    </div>
  );
}
