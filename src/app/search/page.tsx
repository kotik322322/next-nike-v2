"use client";
import Container from "@/components/Container";
import { ProductType } from "@/types";
import Image from "next/image";

import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";

const SearchPage = () => {
  const [productList, setProductList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch(
      `http://localhost:3000/api/products/search?item=${inputValue}`,    );

    const { data } = await response.json();
    setProductList(data);
  };
  return (
    <div className="w-full h-screen absolute top-0 right-0 bottom-0 left-0 z-30 bg-[#f6f6f6]">
      {/* ======================Serch Form====================== */}
      <div className="w-full h-1/4 flex items-center justify-center border border-black">
        <form onSubmit={handleSubmit} className="flex items-center justify-center border border-black">
          <input
            type="text"
            name="searchParametr"
            value={inputValue}
            onChange={handleChange}
          />
          <button className="bg-red-500">
          <IoIosSearch className="text-2xl" />
          </button>
        </form>
      </div>
      {/* ======================Serch Form====================== */}

      {/* ======================Product List====================== */}
      <div className="h-3/4 bg-red-500">
        {productList.map((product: ProductType) => (
          <div key={product._id}>
            <h1>{product.title}</h1>
            <Image
              src={product.mainImg}
              alt={product.title}
              width={100}
              height={100}
            />
          </div>
          // <h1>{}</h1>
        ))}
      </div>
      {/* ======================Product List End====================== */}
    </div>
  );
};

export default SearchPage;
