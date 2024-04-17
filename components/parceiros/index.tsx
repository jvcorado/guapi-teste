import Image, { StaticImageData } from "next/image";
import Elipse1 from "../../assets/image/parceiros/Ellipse-6.png";
import Elipse2 from "../../assets/image/parceiros/Ellipse-7.png";
import Elipse3 from "../../assets/image/parceiros/Ellipse-8.png";
import Elipse4 from "../../assets/image/parceiros/Ellipse-9.png";
import Elipse5 from "../../assets/image/parceiros/Ellipse-10.png";
import Elipse6 from "../../assets/image/parceiros/Ellipse-11.png";

interface DataProps {
  image: StaticImageData;
}

const Data: DataProps[] = [
  {
    image: Elipse1,
  },
  {
    image: Elipse2,
  },
  {
    image: Elipse3,
  },
  {
    image: Elipse4,
  },
  {
    image: Elipse5,
  },
  {
    image: Elipse5,
  },
  {
    image: Elipse5,
  },
  {
    image: Elipse5,
  },
];

export default function Parceiros() {
  return (
    <>
      <h1 className="text-black font-semibold border-b border-[#FF6D1D] w-[35%] md:text-2xl md:w-[30%] max-[370px]:w-[40%]">
        Parceiros <span className="text-[#FF6D1D]">Quack</span>
      </h1>

      <div className="flex gap-4 pb-0 w-full max-w-screen-sm md:max-w-screen-md overflow-x-auto scroll ">
        {Data.map((item, index) => {
          return (
            <Image
              key={index}
              src={item.image}
              alt="image"
              className="w-[80px] h-[80px] md:h-[100px] md:w-[100px]"
            />
          );
        })}
      </div>
      <h1 className=" max-[370px]:hidden block text-black font-semibold border-b border-[#FF6D1D] w-[100%] md:text-2xl md:w-[80%]">
        Estabelecimentos disponíveis no{" "}
        <span className="text-[#FF6D1D]">Clube Quack</span>
      </h1>

      <h1 className=" max-[370px]:block hidden text-black font-semibold border-b border-[#FF6D1D]  max-[370px]:w-[65%]">
        Estabelecimentos <br /> disponíveis no
        <span className="text-[#FF6D1D]"> Clube Quack</span>
      </h1>
    </>
  );
}
