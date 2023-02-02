import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

export default function Web() {
  return (
    <div className=" mx-auto px-[5%] max-w-[1030px]">
      <Navbar />
      {/* <div className="border">Home</div> */}
      <Header />
    </div>
  );
}
