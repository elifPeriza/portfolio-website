type ArticleHeaderProps = {
  date: string;
  title: string;
  keywords: string;
};

export default function ArticleHeader({
  date,
  title,
  keywords,
}: ArticleHeaderProps) {
  return (
    <div className="pt-20 sm:pt-32">
      <h3 className="mb-4 font-ibm text-sm text-violet-secondary ">{date}</h3>
      <h1 className="mb-3 font-poppins text-2xl font-bold  text-black sm:text-3xl">
        {title}
      </h1>
      <h4 className="mb-3 font-ibm text-sm text-violet-secondary ">
        {keywords}
      </h4>
      <hr className="mb-8 border-t-2 border-violet-primary"></hr>
    </div>
  );
}
