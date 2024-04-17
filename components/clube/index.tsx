import Image from "next/image";
import Pato from "../../assets/image/cards/Pato-2x.png";

export default function Clube() {
  return (
    <>
      <div className="bg-[#FFA518] relative rounded-lg text-white flex items-center gap-3 justify-between px-3 md:p-5">
        <div className="flex-1">
          <p className="text-[10px] md:text-xl">Assine já o</p>
          <p className="text-lg font-bold md:text-4xl">Clube Quack</p>
          <p className="text-[10px] leading-3 md:text-xl">
            e tenha acesso em dobro as experiências
          </p>
        </div>

        <Image
          src={Pato}
          alt="image pato"
          className="rounded-lg relative -top-2 h-[110px]  object-cover"
        />
        <div className="flex-1 gap-1 md:gap-3 flex flex-col items-center justify-center ">
          <strong className="text-xl text-center font-bold md:text-5xl">
            R$ 299,99
          </strong>
          <button className=" rounded-lg py-1 px-2 md:p-2 md:-w-full text-[10px] md:text-xl bg-[#FF6D1D]">
            Clique aqui e assine
          </button>
        </div>
      </div>
      <div className="border p-1 text-center rounded-lg text-black shadow-lg md:p-2 ">
        <p className="text-[14px] md:text-2xl ">
          <span className="text-[#FF6D1D] ">Clube Quack</span> ainda não ativado
          para essa cidade
        </p>
      </div>
    </>
  );
}
