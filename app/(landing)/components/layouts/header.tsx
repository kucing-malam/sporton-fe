"use client";

import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import Image from "next/image";
import CardPopup from '../ui/card-popup';
import { useState } from "react";

const Header = () => {
  const [IsCardPopupOpen, setIsCardPopupOpen] = useState(false);

  return (
    <header className="flex justify-between gap-10 container mx-auto py-7 content-center">
      <Link href="/" >
        <Image
          src="/images/logo.svg"
          alt="sporton logo"
          width={127}
          height={30}
          className="cursor-pointer"
        />
      </Link>
      <nav className="flex gap-12 justify-between font-medium">
        <Link
          href="#"
          className="relative after:content-[''] after:block after:bg-primary after:rounded-full after:w-[22px] after:h-[3px] after:self-center after:absolute after:bottom-2/20 after:left-0 after:right-0 after:m-auto">
          Home
        </Link>
        <Link href="#">Category</Link>
        <Link href="#">Explore Products</Link>
      </nav>
      <div className="relative flex">
        <button onClick={() => setIsCardPopupOpen(!IsCardPopupOpen)} className="relative flex items-center gap-10 justify-between">
          <FiSearch className="w-6 h-6 hover:cursor-pointer" />
          <div className="relative">
            <FiShoppingBag className="relative w-6 h-6 hover:cursor-pointer after:content['3'] after:rounded-full after:bg-white after:absolute after:top-0 after:left-0 after:w-4 after:h-4 z-10" />
            <div className="absolute -top-3.5 -right-3.5 w-5.5 h-5.5 bg-primary text-3 rounded-full text-center text-white">3</div>
          </div>
        </button>
        {IsCardPopupOpen && <CardPopup />}
      </div>
    </header>
  )
};

export default Header;