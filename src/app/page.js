"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Button } from "antd";


export default function Home() {


  const [isHovere, setIsHovere] = useState(false);
  const [isHoverede, setIsHoverede] = useState(false);
  const [isHoveredd, setIsHoveredd] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className=" bg-black height-1800">
      <div className="min-h-screen relative overflow-hidden ">
      <link
            href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap"
            rel="stylesheet"
          />
        {/* Navigation Bar */}
        <div className="flex gap-8 bg-black justify-center items-center relative z-20 h-32">
          <Link href="/">
            <Image
              src="/PALADINS.png"
              alt="Luxury Vacation Logo"
              width={77}
              height={22}
              className="cursor-pointer ml-5"
              
            />
          </Link>
          <div className="flex gap-8 bg-black  absolute ">
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
                textDecoration: isHoverede ? ' underline' :'space' // Apply underline when hovered
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
                textDecoration: isHovered ? 'underline' : 'none', // Apply underline when hovered
              }}
              onMouseEnter={() => setIsHovered(true)}  // When mouse enters, apply underline
              onMouseLeave={() => setIsHovered(false)} // When mouse leaves, remove underline
            >
              Account
            </Link>
          </div>
          <div className="ml-auto">
           <Button type="text" className="text-white mr-5 " style={{backgroundColor:"gray"}}>       <Image src="/wallet.png" alt="shape" width={15} height={15} /> My 404 Wallet</Button>
          </div>
        </div>
        <div 
  style={{ 
    backgroundImage: "url('bgy.jpeg')",
    width: "100%",
    height: "420px",
    backgroundSize: "cover",
   display:"flex"
  }}
>
       
          <div className="m-auto">
            <Image src="/head.png" alt="head" className=" mb-20 mr-60" width={760} height={353} />
           
          </div>
          <div>
            <Image src="/shape.png" alt="shape" className=" py-10 mr-20  " width={560} height={353} />
          </div >
         <Button style={{marginTop:"320px",position:"absolute", marginLeft:"244px"}} type="primary">    Mint Your ERC404</Button> 
         <Button style={{marginTop:"320px",position:"absolute", marginLeft:"90px",backgroundColor:"gray"}} type="text">How To Mint?</Button> 
        </div>
        <div>
        <h1 
     className="text-white ml-5 mt-20 font-extrabold w-[400px] ">
       DISCOVER THE LATEST GEMS </h1>
       <p className=" text-white ml-5 font-small">Explore the Freshest Additions to Our Growing Collection of Unique NFTs. Each Piece Tells a Story.</p>
    </div>
      </div>
      
    </div>
  );
}
