"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "antd";
import Image from "next/image";
import CardComponent from "../app/CardComponent/page";
import { usePathname } from "next/navigation";
import Navbar from "./component/page";
export default function Home() {
  const pathname = usePathname();
  return (
    <div className="bg-[#00000A] min-h-screen">
 
      <div className="flex justify-between items-center bg-black px-5 py-4 md:py-6 relative z-20">
        <div className="cursor-pointer">
          <Link href="/">
            <Image
              src="/PALADINS.png"
              alt="Logo"
              width={77}
              height={22}
              className="cursor-pointer"
            />
          </Link>
        </div>

   
       <Navbar/>
     
       
        <Button className="bg-gray-700 text-white px-4 py-2 rounded-md flex items-center">
          <Image src="/wallet.png" alt="Wallet" width={15} height={15} className="mr-2" />
          My 404 Wallet
        </Button>
      </div>
<hr className="border-t border-gray-700 mb-3" />
    
      <div
  className="relative w-full min-h-[320px] md:min-h-[420px] flex flex-col items-center justify-center text-center bg-cover bg-center"
  style={{
    backgroundImage: "url('bgy.jpeg')",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
   backgroundSize: "cover", 
    backgroundPosition: "center",
    justifyContent: "center",
    width: "100%",
    borderRadius: "10px",
  }}
>
  <div className="relative w-full flex flex-col items-center justify-center gap-6 text-center bg-cover bg-center min-h-[420px] px-4 md:px-12">
  
  
  <div className="flex flex-col md:flex-row items-center justify-center w-full gap-6">

    <Image
      src="/head.png"
      alt="Header"
      width={400}
      height={250}
      className="w-[70%] sm:w-[50%] sm:ml-[220px] md:w-[40%] mx-auto order-2 md:order-1 md:ml-[-25px] lg:ml-[-20px]"
    />

    <div className="w-[70%] sm:w-[40%] md:w-[30%] flex justify-center order-1 md:order-2">
      <Image src="/shape.png" alt="Shape" width={300} height={200} className="w-full" />
    </div>
  </div>

 
  <div className="w-[70%]  sm:w-[50%] lg:ml-[-62%]  md:w-[40%]  flex flex-col sm:flex-row sm:ml-[5%] gap-4">
    <Button type="primary" className=" text-white w-full sm:w-auto px-4 py-2 rounded-md">
      Mint Your ERC404
    </Button>
    <Button className="bg-gray-500 text-white w-full sm:w-auto px-4 py-2 rounded-md">
      How To Mint?
    </Button>
  </div>

</div>
</div>
      <section className="px-5 sm:px-10 md:px-16 lg:px-24 xl:px-32 mt-8 text-start">
        <h1 className="text-white font-extrabold text-xl md:text-2xl lg:text-3xl">
          DISCOVER THE LATEST GEMS
        </h1>
        <p className="text-[#9E9898] mt-3 text-sm md:text-lg">
        Explore the Freshest Additions to Our Growing Collection of Unique NFTs. Each Piece Tells a Story.
        </p>
      </section>

     
      <section className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-5 sm:px-10  md:px-16 lg:px-24 xl:px-32 mt-8 xsm:grid-cols-1 justify-center">
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
      </section>

     
      <section className="px-5 sm:px-10 md:px-16 lg:px-24 xl:px-32 text-start mt-12">
        <h1 className="text-white font-extrabold text-xl md:text-3xl lg:text-2xl">
          OWN A PIECE OF HISTORY: INTRODUCING ERC-404 NFTS
        </h1>
        <p className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[90%] xl:w-[52%] text-[#9E9898] mt-3 text-sm md:text-[17px] ">
  Ever wanted to own a piece of a valuable digital asset, but the price tag felt out of reach? ERC-404 NFTs change the game! This innovative technology allows you to co-own unique digital collectibles with others. Imagine owning a fraction of a famous CryptoPunk or a rare piece of digital art. ERC-404 makes it possible!
</p>

      </section>
      <section>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
  <Image src="/Frame1.png" width={400} height={100} className="w-[80%] sm:w-[30%] md:w-[28%] lg:w-[28%]" />
  <Image src="/Frame2.png" width={400} height={100} className="w-[80%] sm:w-[30%] md:w-[28%] lg:w-[28%]" />
  <Image src="/Frame3.png" width={400} height={100} className="w-[80%] sm:w-[30%] md:w-[28%] lg:w-[28%]" />
</div>

      </section>
      <section className="flex flex-wrap justify-between px-5 sm:px-10 md:px-16 lg:px-24 xl:px-32 mt-12 bg-[#00000A] text-white">
  <div className="max-w-sm">
    <Image src="/PALADINS.png" alt="Logo" width={177} height={122} className="cursor-pointer" />
    <p className="mt-8 text-[17px] text-[#9E9898] ">
      Lorem ipsum dolor sit amet consectetur. Non curabitur egestas quis in gravida parturient lacinia lacus.
    </p>
    <Image src="/immg.png" alt="Image" width={177} height={122} className="cursor-pointer mt-8" />
    
  </div>

  <div className="mt-8 sm:mt-0">
    <h2 className="font-bold mb-4">Products</h2>
    <p className="mb-2 text-[#9E9898]">Footer Item</p>
    <p className="mb-2 text-[#9E9898]">Footer Item</p>
    <p className="mb-2 text-[#9E9898]">Footer Item</p>
  </div>

  <div className="mt-8 sm:mt-0">
    <h2 className="font-bold mb-4">Contact Us</h2>
    <p className="mb-2 text-[#9E9898]">Footer Item</p>
    <p className="mb-2 text-[#9E9898]">Footer Item</p>
    <p className="mb-2 text-[#9E9898]">Footer Item</p>
  </div>

  <div className="mt-8 sm:mt-0 ">
    <h2 className="font-bold mb-4 ">About</h2>
    <p className="mb-2 text-[#9E9898]">Footer Item</p>
    <p className="mb-2 text-[#9E9898]">Footer Item</p>
    <p className="mb-2 text-[#9E9898]">Footer Item</p>
  </div>
  
</section>
<div className="mt-8 sm:ml-[115px] px-8 sm:px-0">
  <p className="text-[#9E9898] text-sm text-center sm:text-left">
    © 2024 PALADINS, all rights reserved
  </p>
</div>



            
    </div>
  );
}









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


