type ArticleH2Props = {
  children: React.ReactNode;
};

export const ArticleH2 = ({ children }: ArticleH2Props) => {
  return (
    <h2 className=" mb-1 font-poppins text-xl font-bold text-black sm:mb-2 sm:text-2xl ">
      {children}
    </h2>
  );
};
