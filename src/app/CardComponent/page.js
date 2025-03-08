import React from 'react';
import Image from 'next/image';
import { Button } from 'antd';

const CardComponent = ({ cardImage, date, tag, buttonText1, buttonText2 }) => {
  return (
    <div
      style={{
        width: '282px',
        height: '496px',
        backgroundColor: 'rgba(255, 255, 255, 0.06)',
        borderRadius: '10px',
        marginTop: '20px',
        marginLeft: '25px',
      }}
    >
      {/* Image Section */}
      <Image
        src={cardImage} // Dynamic image source passed via props
        alt="card"
        width={560}
        height={289}
        style={{ borderTopRightRadius: '10px', borderTopLeftRadius: '10px' }}
      />

      {/* Secondary Image */}
      <Image src="/pladn.png" alt="pladn" width={182} height={24} className="mt-5 ml-5" />

      {/* Date and Tag Section */}
      <h1 className="text-white w-[234px] h-[9px] mt-2 ml-5">{date}</h1> {/* Dynamic Date */}
      <h1 className="text-rgba(255, 255, 255, 0.5) w-[234px] h-[9px] mt-2 ml-5">{tag}</h1> {/* Dynamic Tag */}

      {/* First Button */}
      <Button
        type="text"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          marginTop: '17px',
          marginLeft: '25px',
        }}
      >
        {buttonText1} {/* Dynamic Button Text */}
      </Button>

      {/* Horizontal Line */}
      <hr style={{ width: '200px', marginLeft: '35px', marginTop: '25px' }} />

      {/* Second Button */}
      <Button
        type="text"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          marginTop: '17px',
          marginLeft: '25px',
          width: '217px',
        }}
      >
        {buttonText2} {/* Dynamic Button Text */}
      </Button>
    </div>
  );
};

export default CardComponent;
