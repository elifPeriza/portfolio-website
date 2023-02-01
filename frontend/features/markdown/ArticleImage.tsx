import Image from "next/image";

export const ArticleImage = ({ src, alt, title }: any) => {
  return (
    <img
      className="rounded-[15px] h-24 w-52"
      src={src}
      alt={alt}
      title={title}
    ></img>
  );
};
