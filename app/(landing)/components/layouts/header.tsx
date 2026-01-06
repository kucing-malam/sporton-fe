import Link from "next/link"
import { CiSearch } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import Image from "next/image"

const Header = () => {
  return (
    <header className="flex justify-between gap-10 container mx-auto py-7 content-center">
      <Image
        src="/images/logo.svg"
        alt="sporton logo"
        width={127}
        height={30}
      />
      <nav className="flex gap-12 justify-between font-medium">
        <Link
          href="#"
          className="relative after:content-[''] after:block after:bg-primary after:rounded-full after:w-6 after:h-1 after:self-center after:absolute after:-bottom-1/20 after:left-0 after:right-0 after:m-auto">
          Home
        </Link>
        <Link href="#">Category</Link>
        <Link href="#">Explore Products</Link>
      </nav>
      <div className="flex items-center gap-10 justify-between">
        <CiSearch className="w-6 h-6 hover:cursor-pointer"/>
        <FiShoppingBag className="w-6 h-6 hover:cursor-pointer"/>
      </div>
    </header>
  )
}

export default Header;