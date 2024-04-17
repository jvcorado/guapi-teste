import Image, { StaticImageData } from "next/image";
import Elipse1 from "../../assets/image/carousel/Ellipse-1.png";
import Elipse2 from "../../assets/image/carousel/Ellipse-2.png";
import Elipse3 from "../../assets/image/carousel/Ellipse-3.png";
import Elipse4 from "../../assets/image/carousel/Ellipse-4.png";
import Elipse5 from "../../assets/image/carousel/Ellipse-5.png";

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
    image: Elipse1,
  },
  {
    image: Elipse2,
  },
  {
    image: Elipse3,
  },
  {
    image: Elipse2,
  },
  {
    image: Elipse3,
  },
];

export default function Carousel() {
  return (
    <>
      <div className="flex gap-4 w-full max-w-screen-sm md:max-w-screen-md overflow-x-auto scroll">
        {Data.map((item, index) => {
          return (
            <Image
              key={index}
              src={item.image}
              alt="image"
              className="w-[80px] h-[80px] md:w-full md:h-full"
            />
          );
        })}
      </div>
    </>
  );
}
