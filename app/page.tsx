import Image from "next/image";
import Navbar from "./components/Layout/Navbar";
import Content from "./components/Layout/Content";
import Footer from "./components/Layout/Footer";

export default function Home() {
  return (
    <div className="bg-[#fcfafa]">
      <div className="px-[4rem] md:px-[10rem] 2xl:px-[20rem] py-[36px]">
        <Navbar />
        <Content />
      </div>
      <Footer />
    </div>
  );
}
