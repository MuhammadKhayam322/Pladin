"use client";
import Link from "next/link";
import { useState } from "react";
import { Card } from "antd";
import Image from "next/image";
import { Button } from "antd";
import CardComponent from "../app/CardComponent/page";

export default function Home() {
  const [isHovere, setIsHovere] = useState(false);
  const [isHoverede, setIsHoverede] = useState(false);
  const [isHoveredd, setIsHoveredd] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{ backgroundColor: "rgba(0, 0, 10, 1)" }}>
      <div className="min-h-screen relative overflow-hidden">
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap"
          rel="stylesheet"
        />
        {/* Navigation Bar */}
        <div className="flex gap-8 bg-black justify-center items-center relative z-20 h-32 sm:h-24 md:h-32 lg:h-40 xl:h-40">
          <Link href="/">
            <Image
              src="/PALADINS.png"
              alt="Luxury Vacation Logo"
              width={77}
              height={22}
              className="cursor-pointer ml-5"
            />
          </Link>
          <div className="hidden sm:hidden md:flex lg:flex xl:flex gap-8 bg-black  absolute">
            <Link
              href="/home"
              className="hover:text-gold-500 transition-colors  text-white"
              style={{
                color: 'white',
                marginLeft: '20px',
                fontWeight: 'bold',
                textDecoration: isHovere ? 'underline' : 'none', // Apply underline when hovered
              }}
              onMouseEnter={() => setIsHovere(true)}  // When mouse enters, apply underline
              onMouseLeave={() => setIsHovere(false)} // When mouse leaves, remove underline
            >
              Home
            </Link>
            <Link
              href="/mint"
              className="text-gold-500 transition-colors text-white hover::underlined"
              style={{
                color: 'white',
                marginLeft: '20px',
                fontWeight: 'bold',
                textDecoration: isHoveredd ? 'underline' : 'none', // Apply underline when hovered
              }}
              onMouseEnter={() => setIsHoveredd(true)}  // When mouse enters, apply underline
              onMouseLeave={() => setIsHoveredd(false)} // When mouse leaves, remove underline
            >
              Mint
            </Link>
            <Link
              href="/stacking"
              className="hover:text-gold-500 transition-colors  text-white"
              style={{
                color: 'white',
                marginLeft: '20px',
                fontWeight: 'bold',
                textDecoration: isHoverede ? ' underline' :'none' // Apply underline when hovered
              }}
              onMouseEnter={() => setIsHoverede(true)}  // When mouse enters, apply underline
              onMouseLeave={() => setIsHoverede(false)} // When mouse leaves, remove underline
            >
              Staking
            </Link>
            <Link
              href="/Account"
              className="hover:text-gold-500 transition-colors  text-white"
              style={{
                color: 'white',
                marginLeft: '20px',
                fontWeight: 'bold',
                textDecoration: isHovered ? 'underline' : '' // Apply underline when hovered
              }}
              onMouseEnter={() => setIsHovered(true)}  // When mouse enters, apply underline
              onMouseLeave={() => setIsHovered(false)} // When mouse leaves, remove underline
            >
              Account
            </Link>
          </div>
          <div className="ml-auto">
            <Button type="text" className="text-white mr-5 " style={{ backgroundColor: "gray" }}><Image src="/wallet.png" alt="shape" width={15} height={15} /> My 404 Wallet</Button>
          </div>
          <div className="block sm:block md:hidden lg:hidden xl:hidden absolute right-5 top-5">
            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
              Menu
            </button>
          </div>
        </div>
        <div className="block sm:block md:hidden lg:hidden xl:hidden">
          <div className="bg-gray-500 p-5">
            <Link
              href="/home"
              className="hover:text-gold-500 transition-colors  text-white block"
              style={{
                color: 'white',
                fontWeight: 'bold',
                textDecoration: isHovere ? 'underline' : 'none', // Apply underline when hovered
              }}
              onMouseEnter={() => setIsHovere(true)}  // When mouse enters, apply underline
              onMouseLeave={() => setIsHovere(false)} // When mouse leaves, remove underline
            >
              Home
            </Link>
            <Link
              href="/mint"
              className="text-gold-500 transition-colors text-white hover::underlined block"
              style={{
                color: 'white',
                fontWeight: 'bold',
                textDecoration: isHoveredd ? 'underline' : 'none', // Apply underline when hovered
              }}
              onMouseEnter={() => setIsHoveredd(true)}  // When mouse enters, apply underline
              onMouseLeave={() => setIsHoveredd(false)} // When mouse leaves, remove underline
            >
              Mint
            </Link>
            <Link
              href="/stacking"
              className="hover:text-gold-500 transition-colors  text-white block"
              style={{
                color: 'white',
                fontWeight: 'bold',
                textDecoration: isHoverede ? ' underline' :'none' // Apply underline when hovered
              }}
              onMouseEnter={() => setIsHoverede(true)}  // When mouse enters, apply underline
              onMouseLeave={() => setIsHoverede(false)} // When mouse leaves, remove underline
            >
              Staking
            </Link>
            <Link
              href="/Account"
              className="hover:text-gold-500 transition-colors  text-white block"
              style={{
                color: 'white',
                fontWeight: 'bold',
                textDecoration: isHovered ? 'underline' : '' // Apply underline when hovered
              }}
              onMouseEnter={() => setIsHovered(true)}  // When mouse enters, apply underline
              onMouseLeave={() => setIsHovered(false)} // When mouse leaves, remove underline
            >
              Account
            </Link>
          </div>
        </div>
        <div
          style={{
            backgroundImage: "url('bgy.jpeg')",
            width: "100%",
            height: "420px",
            backgroundSize: "cover",
            display: "flex"
          }}
        >
          <div className="m-auto sm:ml-5 md:ml-10 lg:ml-20 xl:ml-20">
            <Image src="/head.png" alt="head" className=" mb-20" width={760} height={353} />
          </div>
          <div>
            <Image src="/shape.png" alt="shape" className=" py-10 ml-5 sm:ml-10 md:ml-20 lg:ml-30 xl:ml-30" width={560} height={353} />
          </div>
          <Button style={{ marginTop: "320px", position: "absolute", marginLeft: "244px", backgroundColor: 'green', color: 'white' }} type="primary">Mint Your ERC404</Button>
          <Button style={{ marginTop: "320px", position: "absolute", marginLeft: "90px", backgroundColor: "gray" }} type="text">How To Mint?</Button>
        </div>
        <div>
          <h1
            className="text-white ml-5 mt-20 font-extrabold w-[400px] sm:w-full md:w-full lg:w-full xl:w-full"
          >
            DISCOVER THE LATEST GEMS
          </h1>
          <p style={{ width: "100%", fontSize: "16px" }}>
            Ever wanted to own a piece of a valuable digital asset, but the price tag felt out of reach? ERC-404 NFTs change the game! This innovative technology allows you to co-own unique digital collectibles with others. Imagine owning a fraction of a famous CryptoPunk or a rare piece of digital art. ERC-404 makes it possible!
          </p>
        </div>

        <div className="flex flex-row gap-8 mt-10 justify-space-between h-496 sm:flex-col md:flex-row lg:flex-row xl:flex-row">
          <div className="w-full sm:w-full md:w-full lg:w-1/3 xl:w-1/3">
            <CardComponent
              cardImage="/cardpic.png" // Example image
              date="10/05/2024" // Example date
              tag="#gaming" // Example tag
              buttonText1="1PAL" // First button text
              buttonText2="BUY NFT" // Second button text
            />
          </div>

          <div className="w-full sm:w-full md:w-full lg:w-1/3 xl:w-1/3">
            <CardComponent
              cardImage="/cardpic.png" // Example image
              date="10/05/2024" // Example date
              tag="#gaming" // Example tag
              buttonText1="1PAL" // First button text
              buttonText2="BUY NFT" // Second button text
            />
          </div>

          <div className="w-full sm:w-full md:w-full lg:w-1/3 xl:w-1/3">
            <CardComponent
              cardImage="/fram.png" // Example image
              date="10/05/2024" // Example date
              tag="#gaming" // Example tag
              buttonText1="0.3PAL Remmaining" // First button text
              buttonText2="BUY NFT" // Second button text
            />
          </div>

          <div className="w-full sm:w-full md:w-full lg:w-1/3 xl:w-1/3">
            <CardComponent
              cardImage="/fram.png" // Example image
              date="10/05/2024" // Example date
              tag="#gaming" // Example tag
              buttonText1="0.3PAL Remmaiming" // First button text
              buttonText2="BUY NFT" // Second button text
            />
          </div>
          <Image src="/Frame.png" alt="shape" width={165} height={111} style={{ height: "150px", marginTop: "17px" }} />
        </div>
        <div>
          <h1
            className="text-white ml-5 mt-20 font-extrabold w-[600px] sm:w-full md:w-full lg:w-full xl:w-full"
          >
            OWN A PIECE OF HISTORY: INTRODUCING ERC-404 NFTS
          </h1>
          <p style={{ width: "100%", fontSize: "16px" }}>
            Ever wanted to own a piece of a valuable digital asset, but the price tag felt out of reach? ERC-404 NFTs change the game! This innovative technology allows you to co-own unique digital collectibles with others. Imagine owning a fraction of a famous CryptoPunk or a rare piece of digital art. ERC-404 makes it possible!
          </p>
        </div>
      </div>
    </div>
  );
}
