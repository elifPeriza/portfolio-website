type ArticleH3Props = {
  children: React.ReactNode;
};

export const ArticleH3 = ({ children }: ArticleH3Props) => {
  return (
    <h3 className=" font-poppins text-xl font-semibold text-black sm:text-2xl  ">
      {children}
    </h3>
  );
};
