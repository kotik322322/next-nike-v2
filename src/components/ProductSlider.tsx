"use client";
import React from "react";
import Image from "next/image";

interface Props {
  images: string[] 
}

const ProductSlider = ({images}: Props) => {

  const [selectedImg, setSelectedImg] = React.useState<string>(images[0]);

  const changeMainImg = (image: string) => {
    setSelectedImg(image);
  };

  return (
    <div className="max-w-[600px] flex flex-col-reverse gap-y-4 md:flex-row md:gap-x-10 ">
      {/* Images  */}
      <div className="flex flex-row md:flex-col gap-y-3 gap-x-1 overflow-x-auto ">
        {images.map((image: string, index: number) => (
          <Image
            src={image}
            alt="Slider images"
            width={40}
            height={40}
            key={index}
            onClick={() => changeMainImg(image)}
            className={`w-auto cursor-pointer rounded-md border ${image === selectedImg ? "border-black" : "border-grey" }`}
          />
        ))}
      </div>
      {/* Images End */}

      {/* Main Img  */}
      <div className="">
        <Image
          src={selectedImg}
          alt="Main Slider Image"
          className=""
          width={400}
          height={400}
        />
      </div>
      {/* Main Img End  */}
    </div>
  );
};

export default ProductSlider;
