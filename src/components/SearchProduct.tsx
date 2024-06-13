import { ProductType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  product: ProductType
}

const SearchProduct = ({ product }:Props) => {
  return <Link href={`/products/${product.category}/${product._id}`} className="flex flex-col items-center justify-start">
    <Image src={product.mainImg} width={140} height={140 } alt="Search Product Image"/>
    <h1>{product.title}</h1>
  </Link>;
};

export default SearchProduct;
