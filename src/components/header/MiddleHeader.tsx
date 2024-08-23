"use client";
import Container from "../Container";
import Image from "next/image";
import { IoClose, IoSearch } from "react-icons/io5";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa6";
import { MdFavoriteBorder } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Link from "next/link";
import { logo } from "@/assets";
import { RiMenu3Line } from "react-icons/ri";

const MiddleHeader = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="border-b-[1px] border-b-gray-400">
      <Container className="py-5 flex items-center justify-between gap-4 md:gap-6 lg:gap-20">
        <Link href={"/"}>
          <Image src={logo} alt="logo" className="w-28" />
        </Link>

        <div className="hidden md:inline-flex flex-1 relative">
          <input
            type="text"
            placeholder="Search products here..."
            className="w-full border-2 border-gray-600 focus-visible:border-themeColor outline-none h-10 pl-4 pr-20"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          {searchValue && (
            <IoClose
              onClick={() => setSearchValue("")}
              className="absolute text-xl top-2.5 right-12 text-gray-600 hover:text-red-500 duration-200 cursor-pointer"
            />
          )}
          <span className="bg-themeColor text-white inline-flex w-10 h-10 items-center justify-center text-xl absolute top-0 right-0 border-gray-600">
            <IoSearch />
          </span>
        </div>

        <div className="hidden md:inline-flex items-center gap-3">
          <div className="flex items-center gap-2">
            {/* icon */}
            <div className="border-2 border-gray-600 p-2 text-xl rounded-full">
              <FaRegUser />
            </div>
            {/* text */}
            <div>
              <p className="text-xs">Hello, Guest</p>
              <p className="text-sm font-semibold">Login / Register</p>
            </div>
          </div>
          {/* Favorite Icon */}
          <Link href={"/favorite"} className="relative">
            <MdFavoriteBorder className="text-2xl text-gray-600" />
            <span className="absolute -right-1 -top-1 text-[10px] bg-themeColor text-white w-4 h-4 font-semibold rounded-full inline-flex items-center justify-center">
              0
            </span>
          </Link>
          {/* Cart Icon */}
          <Link href="/cart" className="relative">
            <HiOutlineShoppingBag className="text-2xl text-gray-600" />
            <span className="absolute -right-1 -top-1 text-[10px] bg-themeColor text-white w-4 h-4 font-semibold rounded-full inline-flex items-center justify-center">
              0
            </span>
          </Link>
        </div>
        <div className="text-xl border border-themeColor p-2 text-black flex md:hidden items-center justify-center">
          <RiMenu3Line />
        </div>
      </Container>
    </div>
  );
};

export default MiddleHeader;
