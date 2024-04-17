import Header from "@/components/header";
import MenuBar from "@/components/menu_bar";

export default function Heart() {
  return (
    <div className="container mx-auto flex flex-col  justify-between h-screen lg:max-w-[800px]   bg-white">
      <Header />
      <div className="px-3 flex-1 flex flex-col gap-7 items-center justify-center  h-full ">
        <h1>Heart</h1>
      </div>
      <MenuBar />
    </div>
  );
}
