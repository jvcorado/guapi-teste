import Image from "next/image";
import Group from "../../assets/image/cards/group.png";
import Cinema from "../../assets/image/cards/cinema.png";
import Mala from "../../assets/image/cards/mala.png";
import Bag from "../../assets/image/cards/bag.png";
import Pato from "../../assets/image/cards/Pato.png";

export default function Cards() {
  return (
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-2 justify-between gap-5">
        <div className="bg-[#FFF7AC] flex relative  justify-between rounded-lg shadow-xl ">
          <p className="self-start relative top-1 left-2  text-black font-semibold md:text-2xl md:p-3">
            Gastronomia
          </p>
          <Image
            src={Group}
            alt="image group"
            className="object-cover  rounded-e-lg"
          />
        </div>
        <div className="bg-[#E0E3FF] flex flex-col  relative   justify-between rounded-lg shadow-xl  ">
          <p className="self-start relative top-1 left-2 mb-2 text-black font-semibold md:text-2xl md:p-3 ">
            Entretenimento
          </p>
          <Image
            src={Cinema}
            alt="image cinema"
            className="object-cover self-end  rounded-e-lg h-[50px] md:object-bottom md:h-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-3 ">
        <div className="bg-[#CBA4FE] relative flex flex-col items-center justify-between rounded-lg shadow-xl">
          <Image src={Mala} alt="image mala" className="relative -bottom-5" />
          <p className="w-full text-center py-1 z-50 object-cover text-black text-sm md:text-lg font-semibold bg-white rounded-b-lg">
            Turismo
          </p>
        </div>

        <div className="bg-[#FFD9D9] relatives flex flex-col items-center justify-between rounded-lg shadow-xl">
          <Image
            src={Bag}
            alt="image bag"
            className=" relative -bottom-4 flex-1 object-contain"
          />
          <p className="self-start w-full text-center py-1  text-black text-sm md:text-lg font-semibold bg-white rounded-b-lg">
            Compras
          </p>
        </div>
        <div className="bg-[#D9FFFA] flex flex-col-reverse justify-between rounded-lg shadow-xl">
          <p className="self-start w-full text-center py-1  text-black text-sm md:text-lg font-semibold bg-white rounded-b-lg">
            Eventos
          </p>
        </div>
        <div className="bg-[#FF6E1F] relative flex flex-col justify-between rounded-lg shadow-xl">
          <div className="flex justify-between gap-1">
            <p className="p-2 text-sm md:text-xl font-semibold text-white">
              Seu <br /> Clube
            </p>
            <Image
              src={Pato}
              alt="image pato"
              className="rounded-lg relative right-7 h-[80px] object-cover"
            />
          </div>

          <p className="self-start w-full text-center py-1  text-black text-sm md:text-lg font-semibold bg-white rounded-b-lg">
            Quack+
          </p>
        </div>
      </div>
    </div>
  );
}
