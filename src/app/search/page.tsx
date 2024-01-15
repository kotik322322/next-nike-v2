"use client";
import { ProductType } from "@/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const SearchPage = () => {
  const [productList, setProductList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/products/search?item=${inputValue}`
    );

    const { data } = await response.json();
    setProductList(data);
  };
  return (
    <div className="absolute top-0 right-0 bottom-0 left-0 z-30 bg-fuchsia-400">
      <div className="w-full border border-black">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="searchParametr"
            value={inputValue}
            onChange={handleChange}
          />
          <button>Search</button>
        </form>
      </div>

      {/* ======================product List====================== */}
      <div>
        {productList.map((product: ProductType) => (
          <div>
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
      {/* ======================product List End====================== */}
    </div>
  );
};

export default SearchPage;
