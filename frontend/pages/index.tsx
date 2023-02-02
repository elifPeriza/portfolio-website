import ArticleCard from "@/components/ArticleCard";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

export default function Web() {
  return (
    <div className=" mx-auto px-[5%] max-w-[1030px]">
      <Navbar />
      <Header />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-8">
        <ArticleCard />
        <ArticleCard />
      </div>
    </div>
  );
}
