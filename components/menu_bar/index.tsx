import Link from "next/link";
import React from "react";
import Home from "../../assets/image/icon/home.svg";
import Star from "../../assets/image/icon/star.svg";
import Map from "../../assets/image/icon/map.svg";
import List from "../../assets/image/icon/list.svg";
import Heart from "../../assets/image/icon/heart.svg";
import Menu from "../../assets/image/icon/menu.svg";
import Image from "next/image";

export default function MenuBar() {
  return (
    <div className="px-3 flex gap-3 sticky bottom-0 pb-3 z-50 items-center justify-between bg-white py-5">
      <Link href={"/"}>
        <Image src={Home} alt="Home icon" />
      </Link>
      <Link href={"/"}>
        {" "}
        <Image src={Map} alt="Map icon" />
      </Link>
      <Link href={"/"}>
        {" "}
        <Image src={List} alt="List icon" />
      </Link>

      <Link href={"/"}>
        {" "}
        <Image src={Star} alt="Star icon" />
      </Link>
      <Link href={"/"}>
        {" "}
        <Image src={Heart} alt="Heart icon" />
      </Link>
      <Link href={"/"}>
        {" "}
        <Image src={Menu} alt="Menu icon" />
      </Link>
    </div>
  );
}
