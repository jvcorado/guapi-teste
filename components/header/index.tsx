import Image from "next/image";
import QrCode from "../../assets/image/icon/qr-code.svg";
import Search from "../../assets/image/icon/search.svg";
import Dropdown from "../dropdown";

export default function Header() {
  return (
    <header className="sticky top-0 bg-white pt-10 px-3 pb-5 z-50 flex items-center justify-between ">
      <Image src={QrCode} alt="QrCode icon" />
      <Dropdown />
      <Image src={Search} alt="Search icon" />
    </header>
  );
}
