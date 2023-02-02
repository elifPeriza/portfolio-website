import Tag from "./Tag";

export default function ArticleCard() {
  return (
    <div className="bg-white border-2 border-violet-primary rounded-xl px-6 py-6  ">
      <h3 className="font-robotoMono text-violet-secondary text-sm mb-2 ">
        14-02-2023
      </h3>
      <h2
        className="font-poppins text-black font-bold
       text-lg mb-3 sm:text-xl "
      >
        How to create wavy shapes with SVG
      </h2>
      <p className="font-noto text-base  text-black mb-4">
        In one of thes group projects during the bootcamp, we struggled with a
        header that had a wavy shape with a background image. tempor incididunt
        ut labore et dolore magna aliqua. Turpis in eu mi bibendum neque egestas
        congue quisque egestas.
      </p>
      <div className=""></div>
      <Tag>{"Tutorial"}</Tag>
    </div>
  );
}
