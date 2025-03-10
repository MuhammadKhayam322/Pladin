"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "antd";
import Image from "next/image";
import CardComponent from "../app/CardComponent/page";

export default function Home() {
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <div className="bg-[#00000A] min-h-screen">
      {/* Navigation Bar */}
      <div className="flex justify-between items-center bg-black px-5 py-6 sm:py-4 md:py-6 lg:py-8 xl:py-10 relative z-20">
        <Link href="/">
          <Image src="/PALADINS.png" alt="Logo" width={77} height={22} className="cursor-pointer" />
        </Link>
        <div className=" md:flex justify-between gap-8 items-center bg-black px-5 py-6 sm:py-4 md:py-6 lg:py-8 xl:py-10 relativ">
          {[
            { name: "Home", path: "/home" },
            { name: "Mint", path: "/mint" },
            { name: "Staking", path: "/stacking" },
            { name: "Account", path: "/Account" },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="text-white font-bold transition-colors"
              style={{ textDecoration: hoveredLink === link.name ? "underline" : "none" }}
              onMouseEnter={() => setHoveredLink(link.name)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <Button type="text" className="text-white bg-gray-700 px-4 py-2 rounded-md flex items-center">
          <Image src="/wallet.png" alt="Wallet" width={15} height={15} className="mr-2" />
          My 404 Wallet
        </Button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden text-center mt-4">
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          Menu
        </button>
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-[420px] bg-cover bg-center flex flex-col items-center justify-center text-center" style={{ backgroundImage: "url('bgy.jpeg')" }}>
        <Image src="/head.png" alt="Header" width={560} height={353} className="mr-[40%] w-[80%] md:mr-[40%] w-[60%] lg:mr-[40%] w-[50%] xl:mr-[43%] w-[40%]" />
        <Image src="/shape.png" alt="Shape" width={560} height={353} className="w-[40%] md:w-[30%] absolute right-4 md:right-16 lg:right-32 xl:right-48 top-1/2 transform -translate-y-1/2" />
        <div className="absolute  bottom-8 flex  sm: flex-row gap-4 px-2   w-full px-4 md:px-12 lg: px-4 xl: px-2">
          <Button type="primary" className="bg-green-600 text-white w-full sm:w-auto px-4 py-2 rounded-md">Mint Your ERC404</Button>
          <Button className="bg-gray-500 text-white w-full sm:w-auto px-4 py-2 rounded-md">How To Mint?</Button>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-5 sm:px-10 md:px-16 lg:px-24 xl:px-32 mt-12">
        <h1 className="text-white font-extrabold text-2xl md:text-2xl lg:text-2xl">DISCOVER THE LATEST GEMS</h1>
        <p className="text-white mt-4 text-lg md:text-xl">
          Ever wanted to own a piece of a valuable digital asset, but the price tag felt out of reach? ERC-404 NFTs change the game! Own a fraction of a CryptoPunk or a rare piece of digital art. ERC-404 makes it possible!
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-5 sm:px-10 md:px-16 lg:px-44 px-22 xl:px-32 mt-10">
        {[...Array(4)].map((_, i) => (
          <CardComponent
            key={i}
            cardImage={i % 2 === 0 ? "/cardpic.png" : "/fram.png"}
            date="10/05/2024"
            tag="#gaming"
            buttonText1={i % 2 === 0 ? "1PAL" : "0.3PAL Remaining "}
            buttonText2="BUY NFT"
          />
        ))}
        <Image className="mt-5 ml-10" src="/Frame.png" alt="Frame" width={282} height={496} />
      </div>

      {/* Footer Text Section */}
      <div className="px-5 sm:px-10 md:px-16 lg:px-24 xl:px-32 text-center mt-20">
        <h1 className="text-white font-extrabold text-3xl md:text-4xl lg:text-5xl">OWN A PIECE OF HISTORY: INTRODUCING ERC-404 NFTS</h1>
        <p className="text-white mt-4 text-lg md:text-xl">
          Ever wanted to own a piece of a valuable digital asset, but the price tag felt out of reach? ERC-404 NFTs change the game! Own a fraction of a CryptoPunk or a rare piece of digital art. ERC-404 makes it possible!
        </p>
      </div>
    </div>
  );







//   Microsoft Windows [Version 10.0.19045.5487]
// (c) Microsoft Corporation. All rights reserved.

// C:\Users\123\luxury-vacation>git add .

// C:\Users\123\luxury-vacation>git commit -m "done"
// [main cf5d32d] done
//  3 files changed, 148 insertions(+), 79 deletions(-)
//  create mode 100644 public/Frame.png
//  create mode 100644 public/fram.png

// C:\Users\123\luxury-vacation>git push -u origin main
// Enumerating objects: 13, done.
// Counting objects: 100% (13/13), done.
// Delta compression using up to 4 threads
// Compressing objects: 100% (7/7), done.
// Writing objects: 100% (8/8), 138.39 KiB | 8.65 MiB/s, done.
// Total 8 (delta 4), reused 0 (delta 0), pack-reused 0 (from 0)
// remote: Resolving deltas: 100% (4/4), completed with 4 local objects.
// To https://github.com/MuhammadKhayam322/Pladin.git
//    2989112..cf5d32d  main -> main
// branch 'main' set up to track 'origin/main'.

// C:\Users\123\luxury-vacation>

}
