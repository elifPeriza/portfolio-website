type ArticleH1Props = {
  children: React.ReactNode;
};

export const ArticleH1 = ({ children }: ArticleH1Props) => {
  return (
    <h1 className=" mb-3 font-poppins text-2xl font-bold  text-black sm:text-3xl  ">
      {children}
    </h1>
  );
};
