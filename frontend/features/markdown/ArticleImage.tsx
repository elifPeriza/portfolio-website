export const ArticleImage = ({ src, alt, title }: any) => {
  return (
    <span className="relative w-full block my-6 ">
      <img
        className="rounded-[20px] object-cover h-full w-full  drop-shadow-lg"
        src={src}
        alt={alt}
        title={title}
      ></img>
    </span>
  );
};
