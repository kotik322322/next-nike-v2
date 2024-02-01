"use client"

import { addToWishlist } from "@/store/wishlistSlice";
import { ProductType } from "@/types";
import React from "react";
import toast from "react-hot-toast";
import { CiHeart } from "react-icons/ci";
import { useDispatch } from "react-redux";

const AddToWishListButton = ({ product }: { product: ProductType }) => {
  const dispatch = useDispatch();
  return (
    <button
      className="w-full py-2 flex items-center justify-center gap-x-2 border border-1 border-black  rounded-full  text-black text-[12px] md:text-base hover:shadow-xl duration-200 "
      // text="black"
      onClick={() =>
        dispatch(addToWishlist(product)) &&
        toast.success(`${product.title} added to wish list`)
      }
    >
      Add to Wishlist
      <CiHeart className="text-xl" />
    </button>
  );
};

export default AddToWishListButton;
