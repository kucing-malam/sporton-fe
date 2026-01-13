"use client";

import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import Image from "next/image";
import CartPopup from '../ui/cart-popup';
import { useState } from "react";
import { useCartStore } from "@/app/hook/use-cart-store";

const Header = () => {
  const { items } = useCartStore();
  const [IsCartPopupOpen, setIsCartPopupOpen] = useState(false);

  return (
    <header className=" w-full py-7 fixed z-10 backdrop-blur-xl bg-white/50 right-0">
      <div className="container mx-auto flex justify-between gap-10 content-center">
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
          <div className="relative flex items-center gap-10 justify-between">
            <button>
              <FiSearch className="w-6 h-6 hover:cursor-pointer" />
            </button>
            <div className="relative">
              <button onClick={() => setIsCartPopupOpen(!IsCartPopupOpen)}>
                <FiShoppingBag className="relative w-6 h-6 hover:cursor-pointer after:content['3'] after:rounded-full after:bg-white after:absolute after:top-0 after:left-0 after:w-4 after:h-4 z-10" />
                {
                  items.length ?
                    <div className="absolute -top-3.5 -right-3.5 w-5.5 h-5.5 bg-primary text-3 rounded-full text-center text-white">{items.length}</div>
                    : (
                      <></>
                    )
                }
              </button>
            </div>
          </div>
          {IsCartPopupOpen && <CartPopup />}
        </div>
      </div>
    </header>
  )
};

export default Header;