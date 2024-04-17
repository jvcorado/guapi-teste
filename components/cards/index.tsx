import Image from "next/image";
import Group from "../../assets/image/cards/group.png";

export default function Cards() {
  return (
    <div className="grid grid-cols-1 gap-3">
      <div className="grid grid-cols-2 gap-3  h-[90px]">
        <div className="bg-[#FFF7AC] flex justify-between rounded-lg shadow-xl">
          <h1 className="self-start p-2 text-black">Gastronomia</h1>
          <Image src={Group} alt="image group" className="rounded-lg " />
        </div>
        <div className="bg-[#E0E3FF] flex justify-between rounded-lg shadow-xl">
          <h1 className="self-start p-2 text-black">Entretenimento</h1>
          <Image src={Group} alt="image group" className="rounded-lg " />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3">
        <div className="bg-[#CBA4FE] flex flex-col-reverse justify-between rounded-lg shadow-xl">
          <h1 className="self-start w-full text-center py-1  text-black text-sm bg-white rounded-b-lg">
            Gastronomia
          </h1>
          <Image src={Group} alt="image group" className="rounded-lg " />
        </div>
        <div className="bg-[#FFD9D9] flex flex-col-reverse justify-between rounded-lg shadow-xl">
          <h1 className="self-start w-full text-center py-1  text-black text-sm bg-white rounded-b-lg">
            Gastronomia
          </h1>
          <Image src={Group} alt="image group" className="rounded-lg " />
        </div>
        <div className="bg-[#D9FFFA] flex flex-col-reverse justify-between rounded-lg shadow-xl">
          <h1 className="self-start w-full text-center py-1  text-black text-sm bg-white rounded-b-lg">
            Gastronomia
          </h1>
          <Image src={Group} alt="image group" className="rounded-lg " />
        </div>
        <div className="bg-[#FF6E1F] flex flex-col-reverse justify-between rounded-lg shadow-xl">
          <h1 className="self-start w-full text-center py-1  text-black text-sm bg-white rounded-b-lg">
            Gastronomia
          </h1>
          <Image src={Group} alt="image group" className="rounded-lg " />
        </div>
      </div>
    </div>
  );
}
