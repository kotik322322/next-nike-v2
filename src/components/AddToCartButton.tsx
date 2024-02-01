"use client"

import { addToCart } from "@/store/cartSlice";
import { ProductType } from "@/types";
import React from "react";
import toast from "react-hot-toast";
import { IoBagCheckOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";

const AddToCartButton = ({product}:{product: ProductType}) => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() =>
        dispatch(addToCart(product)) &&
        toast.success(`${product.title} added to cart`)
      }
      className="w-full py-2 flex items-center justify-center gap-x-2 rounded-full bg-black text-white hover:bg-slate-500 text-[12px] md:text-base duration-200"
    >
      Add to Cart
      <IoBagCheckOutline className="text-xl" />
    </button>
  );
};

export default AddToCartButton;
