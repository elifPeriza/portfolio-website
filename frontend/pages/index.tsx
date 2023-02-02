import ArticleCard from "@/components/ArticleCard";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

export default function Web() {
  return (
    <>
      <div className=" mx-auto px-[5%] max-w-[1030px]">
        <Navbar />
        <Header />
      </div>
      <div className="bg-violet-bg w-full mt-8">
        <div className="mx-auto px-[5%] max-w-[1030px]">
          <h2 className="font-poppins text-black font-bold text-xl pt-7 sm:text-2xl sm:pt-10 ">
            Writing
          </h2>
          <div className="grid grid-cols-1 gap-5 pt-5 pb-8 sm:grid-cols-2 sm:gap-8 sm:pt-7 sm:pb-10">
            <ArticleCard />
            <ArticleCard />
          </div>
        </div>
      </div>
    </>
  );
}
