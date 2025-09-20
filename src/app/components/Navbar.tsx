"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Navbar() {

  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="w-full bg-gray-900 text-white px-6 py-3 flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <Link href="/">NextJS</Link>
      </div>


      {/* Nav Links */}
      <div className="flex flex-wrap justify-center md:justify-end space-x-4">
        {/* <Link href="/products" className="hover:text-gray-300">
          Products
        </Link> */}
        <Link href="/products" className={`${
         pathname==="/products"?"text-blue-500 font-semibold underline"
         :"text-white hover:underline"
         }`}>
          Products
        </Link>
        <Link href="/gallery" className={`${
          pathname==="/gallery"?"text-red-500 font-semibold underline"
          :"hover:underline text-white "
          }`}>
          Gallery
        </Link>
        <Link href="/posts" className={`${
          pathname==="/posts"?"text-green-500 font-semibold underline"
          :"hover:underline text-white "
          }`}>
          Posts
        </Link>
        {/* <Link href="/gallery" className="hover:text-gray-300">
          Gallery
        </Link> */}
        <Link href="/about" className="hover:text-gray-300">
          About
        </Link>
        <Link href="/contact" className="hover:text-gray-300">
          Contact
        </Link>
        {/* <Link href="/dashboard" className="hover:text-gray-300">
          Dashboard
        </Link>
        <Link href="/login" className="hover:text-gray-300">
          Login
        </Link> */}

       
      </div>
    </nav>
  );
}
