import React from 'react';
import Image from 'next/image';
import { Button } from 'antd';

const CardComponent = ({ cardImage, date, tag, buttonText1, buttonText2 }) => {
  return (
    <div className="max-w-xs rounded-lg bg-gray-800  mt-5 ">
      {/* Image Section */}
      <Image
        src={cardImage}
        alt="Card"
        width={760}
        height={289}
        className="rounded-t-lg  w-[400px]"
      />

      {/* Secondary Image */}
      <Image src="/pladn.png" alt="pladn" width={182} height={24} className="mt-3 ml-6 sm:ml-2" />

      {/* Date and Tag Section */}
      <h1 className="text-white ml-5 text-sm mt-2">{date}</h1>
      <h1 className="text-gray-400 ml-5 text-sm mt-1">{tag}</h1>

      {/* First Button */}
      <div className=' flex justify-start'>
      <Button
        type="text"
        className="bg-gray-700 text-white ml-[34px] mt-4  "
      >
        {buttonText1}
      </Button> 
      </div>
     

      {/* Horizontal Line */}
      <hr className="w-3/4 border-gray-500 my-4 ml-8" />

      {/* Second Button */}
      <div className='flex justify-center'>
      <Button
        type="primary"
        className="bg-gray-700 text-white rounded-md  w-[250px] mb-10 md: w-[100px]  "
     >
        {buttonText2}
      </Button> 
      </div>
     
    </div>
  );
};

export default CardComponent;

