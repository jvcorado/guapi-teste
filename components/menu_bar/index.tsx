"use client";

import Link from "next/link";
import Home from "../../assets/image/icon/home.svg";
import Star from "../../assets/image/icon/star.svg";
import Map from "../../assets/image/icon/map.svg";
import List from "../../assets/image/icon/list.svg";
import Heart from "../../assets/image/icon/heart.svg";
import Menu from "../../assets/image/icon/menu.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function MenuBar() {
  const pathname = usePathname();
  const [currentRoute, setCurrentRoute] = useState("");

  useEffect(() => {
    setCurrentRoute(pathname);
  }, [pathname]);

  return (
    <div className="px-3 flex gap-3 sticky bottom-0 pb-6 z-50 items-center justify-between bg-white py-5">
      <Link href="/">
        <Image
          src={Home}
          alt="Home icon"
          className={currentRoute === "/" ? "fill-red-900" : ""}
        />
      </Link>
      <Link href="/map">
        <Image
          src={Map}
          alt="Map icon"
          className={currentRoute === "/map" ? "fill-red-900" : ""}
        />
      </Link>
      <Link href="/list">
        <Image
          src={List}
          alt="List icon"
          className={currentRoute === "/list" ? "!fill-red-900" : ""}
        />
      </Link>
      <Link href="/star">
        <Image
          src={Star}
          alt="Star icon"
          className={currentRoute === "/star" ? "fill-red-900" : ""}
        />
      </Link>
      <Link href="/heart">
        <Image
          src={Heart}
          alt="Heart icon"
          className={currentRoute === "/heart" ? "fill-red-900" : ""}
        />
      </Link>
      <Link href="/menu">
        <Image
          src={Menu}
          alt="Menu icon"
          className={currentRoute === "/menu" ? "fill-red-900" : ""}
        />
      </Link>
    </div>
  );
}
