import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCPYtl2Sw7lGDd0zX6EInnOTXzm8PFvcmk&libraries=places&callback=Function.prototype" />
      </body>
    </html>
  );
}
