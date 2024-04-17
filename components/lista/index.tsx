"use client";

import Image, { StaticImageData } from "next/image";
import Foto1 from "../../assets/image/lista/foto-1.png";
import Foto2 from "../../assets/image/lista/foto-2.png";
import Foto3 from "../../assets/image/lista/foto-3.png";
import Foto4 from "../../assets/image/lista/foto-4.png";
import Foto5 from "../../assets/image/lista/foto-5.png";
import Foto6 from "../../assets/image/lista/foto-6.png";
import Star from "../../assets/image/lista/star-full.png";

import { useState } from "react";

interface DataProps {
  image: StaticImageData;
}

const Data: DataProps[] = [
  {
    image: Foto1,
  },
  {
    image: Foto2,
  },
  {
    image: Foto3,
  },
  {
    image: Foto4,
  },
  {
    image: Foto5,
  },
  {
    image: Foto6,
  },
];

export default function Lista() {
  const [iconColors, setIconColors] = useState<string[]>(
    Array(Data.length).fill("transparent")
  );

  const handleButtonClick = (index: number) => {
    const newIconColors = [...iconColors];
    newIconColors[index] =
      newIconColors[index] === "transparent" ? "#FFA500" : "transparent";
    setIconColors(newIconColors);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-5 w-full max-w-screen-sm md:max-w-screen-md overflow-x-auto scroll">
        {Data.map((item, index) => {
          return (
            <div
              key={index}
              className="flex shadow-lg border-2 items-center justify-between  rounded-xl pe-3 w-full"
            >
              <Image
                src={item.image}
                alt="image"
                className="object-cover rounded-lg w-[110px]"
              />
              <div className="">
                <h1 className="text-black font-semibold text-[13px]">
                  Nome do Estabelecimento
                </h1>
                <div className="flex items-center gap-2">
                  <Image src={Star} alt="star" />
                  <p className="text-[#FFB746] text-[13px]">5.0</p>
                  <p className="text-[#959595] text-[13px]">
                    Categoria - Localidade
                  </p>
                </div>
                <p className="text-black font-normal  text-[13px]">Descrição</p>
              </div>
              <button onClick={() => handleButtonClick(index)} className="">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill={iconColors[index]}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.3333 18.6667C27.32 16.72 29.3333 14.3867 29.3333 11.3333C29.3333 9.38841 28.5607 7.52315 27.1854 6.14788C25.8102 4.77262 23.9449 4 22 4C19.6533 4 18 4.66667 16 6.66667C14 4.66667 12.3467 4 10 4C8.05508 4 6.18981 4.77262 4.81455 6.14788C3.43928 7.52315 2.66666 9.38841 2.66666 11.3333C2.66666 14.4 4.66666 16.7333 6.66666 18.6667L16 28L25.3333 18.6667Z"
                    stroke="#FFB746"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
