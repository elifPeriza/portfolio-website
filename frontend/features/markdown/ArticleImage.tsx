import Image from "next/image";

export const ArticleImage = ({ src, alt, title }: any) => {
  return (
    <img
      style={{ borderRadius: "20px" }}
      src={src}
      alt={alt}
      title={title}
      width={200}
      height={100}
    ></img>
  );
};
