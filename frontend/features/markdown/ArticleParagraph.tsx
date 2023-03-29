type ArticleParagraphProps = {
  children: React.ReactNode;
};

export const ArticleParagraph = ({ children }: ArticleParagraphProps) => {
  return (
    <p className=" mb-4 font-inter text-base font-normal text-black sm:mb-6 sm:text-lg ">
      {children}
    </p>
  );
};
