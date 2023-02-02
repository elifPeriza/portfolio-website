export default function ArticleHeader({ date, title, keywords }: any) {
  return (
    <div className="pt-20 sm:pt-32">
      <h3 className="font-robotoMono text-violet-secondary text-sm mb-4 ">
        {date}
      </h3>
      <h1 className="font-poppins font-bold text-black text-2xl  mb-3 sm:text-3xl">
        {title}
      </h1>
      <h4 className="font-robotoMono text-violet-secondary text-sm mb-3 ">
        {keywords}
      </h4>
      <hr className="border-t-2 border-violet-primary mb-8"></hr>
    </div>
  );
}
