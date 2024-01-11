"use client";

import React from "react";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { CartProductType } from "@/types";

import CartProductBar from "./CartProductBar";
// import toast from "react-hot-toast";

const CartProduct = ({ product }: { product: CartProductType }) => {
  return (
    <div
      className="p-4 flex justify-between items-center border border-gray-500 rounded-md"
      key={product._id}
    >
      <Link href={`/products/${product.category}/${product._id}`}>
        <Image
          src={product.mainImg}
          alt="Cart Product Logo"
          width={120}
          height={120}
          className="hover:scale-110 duration-200"
        />
      </Link>

      <CartProductBar product={product} />

    </div>
  );
};

export default CartProduct;
