"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsOpen(false);
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-center z-50  w-[200px]">
      <div className="relative group w-full">
        <button
          id="dropdown-button"
          className="inline-flex justify-center items-center w-full px-4 py-2 text-sm font-medium text-black bg-white  rounded-md "
          onClick={toggleDropdown}
        >
          <span className="mr-2 font-semibold  text-base">São Paulo</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="#27303C"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div
          id="dropdown-menu"
          className={`absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1 ${
            isOpen ? "" : "hidden"
          }`}
        >
          <Link
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md"
            style={{ display: "block" }}
          >
            Ribeirão Pires
          </Link>
          <Link
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md"
            style={{ display: "block" }}
          >
            Contratem o joão victor
          </Link>
          <Link
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md"
            style={{ display: "block" }}
          >
            Contratem eu
          </Link>
        </div>
      </div>
    </div>
  );
}
