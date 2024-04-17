import Image from "next/image";
import Group from "../../assets/image/cards/group.png";
import Cinema from "../../assets/image/cards/cinema.png";
import Mala from "../../assets/image/cards/mala.png";
import Bag from "../../assets/image/cards/bag.png";
import Pato from "../../assets/image/cards/Pato.png";

export default function Cards() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between bg-slate-400 gap-3">
        <div className="bg-[#FFF7AC] flex  justify-between rounded-lg shadow-xl w-1/2">
          <h1 className="self-start p-2 text-black  bg-slate-800">
            Gastronomia
          </h1>
          <Image
            src={Group}
            alt="image group"
            className="object-cover  bg-slate-700 "
          />
        </div>
        <div className="bg-[#E0E3FF] flex flex-col justify-between rounded-lg shadow-xl w-1/2">
          <h1 className="self-start p-2 text-black">Entretenimento</h1>
          <Image
            src={Cinema}
            alt="image cinema"
            className="object-contain self-end"
          />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3 ">
        <div className="bg-[#CBA4FE] relative flex flex-col items-center justify-between rounded-lg shadow-xl">
          <Image src={Mala} alt="image mala" className="relative -bottom-5" />
          <h1 className="w-full text-center py-1 z-50 object-cover text-black text-sm bg-white rounded-b-lg">
            Turismo
          </h1>
        </div>

        <div className="bg-[#FFD9D9] relatives flex flex-col items-center justify-between rounded-lg shadow-xl">
          <Image
            src={Bag}
            alt="image bag"
            className=" relative -bottom-5 flex-1 object-contain "
          />
          <h1 className="self-start w-full text-center py-1  text-black text-sm bg-white rounded-b-lg">
            Compras
          </h1>
        </div>
        <div className="bg-[#D9FFFA] flex flex-col-reverse justify-between rounded-lg shadow-xl">
          <h1 className="self-start w-full text-center py-1  text-black text-sm bg-white rounded-b-lg">
            Eventos
          </h1>
        </div>
        <div className="bg-[#FF6E1F] relative flex flex-col justify-between rounded-lg shadow-xl">
          <div className="flex gap-1">
            <h1 className="p-2 text-sm text-white">Seu Clube</h1>
            <Image
              src={Pato}
              alt="image pato"
              className="rounded-lg relative right-7 h-[80px] object-cover"
            />
          </div>

          <h1 className="self-start w-full text-center py-1  text-black text-sm bg-white rounded-b-lg">
            Quack+
          </h1>
        </div>
      </div>
    </div>
  );
}
