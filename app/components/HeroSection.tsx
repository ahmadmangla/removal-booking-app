import Link from "next/link";
import vanImage from "@/public/removal-van.jpg";

const HeroSection = () => {
  return (
    <div
      className="isolate relative text-center py-40 first-letter:px-6 lg:px-8 bg-cover bg-no-repeat bg-center before:content-[''] before:w-[100%] before:h-[100%] before:bg-black before:absolute before:start-0 before:top-0 before:opacity-40 before:-z-10"
      style={{ backgroundImage: `url(${vanImage.src})` }}
    >
      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">We Provide Amazing Removal Services</h1>
      <p className="mt-6 text-lg leading-8 text-gray-300">
        Simplicity is key to our approach. We make things easier for our clients with a simple online quote process and transparent pricing, allowing you to book our services quickly and hassle-free.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link
          href="/booking"
          className="rounded bg-gray-950 px-3.5 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Get A Quote
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
