import Dot from "./Dot";

export default function Logo() {
  return (
    <div className="inline-block bg-neon-light px-2 py-1  ">
      <h2 className="text-black font-secular text-2xl ">
        elifs
        <Dot variant="violet" />
        code
      </h2>
    </div>
  );
}
