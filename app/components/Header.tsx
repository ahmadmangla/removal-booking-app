"Use Client";

import Image from "next/image";
import Logo from "@/public/logo.jpg";
import Link from "next/link";

const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Image src={Logo} alt="WeMove Logo" width={100} height={100}></Image>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/" className="mr-5 hover:text-gray-900 hover:cursor-pointer">
            Home
          </Link>
          <Link href="/services" className="mr-5 hover:text-gray-900 hover:cursor-pointer">
            Services
          </Link>
          <Link href="/about" className="mr-5 hover:text-gray-900 hover:cursor-pointer">
            About
          </Link>
          <Link href="/contact" className="mr-5 hover:text-gray-900 hover:cursor-pointer">
            Contact
          </Link>
        </nav>
        <Link href="/booking" className="inline-flex items-center bg-gray-100 border-0 p-3 font-medium focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Book Now
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </header>
  );
};

export default Header;
