import Image from "next/image";
import Pato from "../../assets/image/cards/Pato-2x.png";

export default function Clube() {
  return (
    <>
      <div className="bg-[#FFA518] relative rounded-lg text-white flex items-center gap-3 justify-between px-3">
        <div className="flex-1">
          <p className="text-[10px] md:text-base">Assine já o</p>
          <p className="text-lg font-bold md:text-xl">Clube Quack</p>
          <p className="text-[10px] leading-3 md:text-base">
            e tenha acesso em dobro as experiências
          </p>
        </div>

        <Image
          src={Pato}
          alt="image pato"
          className="rounded-lg relative -top-2 h-[110px] md:h-full object-cover"
        />
        <div className="flex-1 gap-1 flex flex-col items-center justify-center">
          <strong className="text-xl text-center font-bold  md:text-2xl">
            R$ 299,99
          </strong>
          <button className=" rounded-lg py-1 px-2 text-[10px] md:text-base bg-[#FF6D1D]">
            Clique aqui e assine
          </button>
        </div>
      </div>
      <div className="border p-1 text-center rounded-lg text-black shadow-lg">
        <p className="text-[14px] md:text-lg">
          <span className="text-[#FF6D1D] ">Clube Quack</span> ainda não ativado
          para essa cidade
        </p>
      </div>
    </>
  );
}
