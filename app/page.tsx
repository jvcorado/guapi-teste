import Cards from "@/components/cards";
import Carousel from "@/components/carousel";
import Header from "@/components/header";
import MenuBar from "@/components/menu_bar";

export default function Home() {
  return (
    <div className=" flex flex-col justify-between  bg-white">
      <Header />
      <div className="px-3 flex-1 ">
        <Carousel />
        <Cards />
        <Cards />

        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
      <MenuBar />
    </div>
  );
}
