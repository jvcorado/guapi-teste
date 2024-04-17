import Cards from "@/components/cards";
import Carousel from "@/components/carousel";
import Clube from "@/components/clube";
import Header from "@/components/header";
import Lista from "@/components/lista";
import MenuBar from "@/components/menu_bar";
import Parceiros from "@/components/parceiros";

export default function Home() {
  return (
    <div className=" flex flex-col  justify-between  bg-white">
      <Header />

      <div className="px-3 flex-1 flex flex-col gap-5  h-full ">
        <Carousel />
        <Cards />
        <Clube />
        <Parceiros />
        <Lista />
      </div>
      <MenuBar />
    </div>
  );
}
