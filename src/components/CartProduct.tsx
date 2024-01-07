"use client";

import React from "react";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { CartProductType } from "@/types";
import { useDispatch } from "react-redux";
import { decrement, increment, removeFromCart } from "@/store/cartSlice";
// import toast from "react-hot-toast";

const CartProduct = ({ product }: { product: CartProductType }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="p-4 flex justify-between items-center border border-grey rounded-md "
      key={product._id}
    >
      {/* item photo  */}
      <Link href={`/products/${product.category}/${product._id}`}>
        <Image
          src={product.mainImg}
          alt="Cart Product Logo"
          width={120}
          height={120}
          className=""
        />
      </Link>
      {/* item photo end */}

      <div className="w-full grid grid-rows-3 md:grid-rows-1 md:grid-cols-3 md:justify-between gap-y-2 text-center">
        {/* item price  */}
        <span className="text-sm">$ {product.price}</span>
        {/* item price end */}

        {/* item quantity&& increase and decrease  */}
        <div className="flex items-center justify-center gap-x-3 font-semibold text-[12px] md:text-base">
          <button
            className="w-6 h-6  text-center rounded-full  bg-black hover:bg-bgHover text-white"
            onClick={() => dispatch(decrement(product))}
          >
            -
          </button>

          {/* Item Quantity */}
          <div className="w-10 text-sm">{product.quantity}</div>
          {/* <span className="">{itemQuantity}</span> */}

          <button
            className="w-6 h-6  text-center rounded-full bg-black hover:bg-bgHover text-white"
            onClick={() => dispatch(increment(product))}
          >
            +
          </button>
        </div>

        {/* item total  */}
        <span className="text-sm">
          $ {(product.price * product.quantity).toFixed(2)}
        </span>
        {/* item total end */}
      </div>

      {/* Delete item*/}
      <button
        className="rounded-full p-[8px] hover:bg-grey duration-200"
        onClick={() => {
          dispatch(removeFromCart(product)) 
            // toast.success(
            //   <div>
            //     <span className="font-bold">{product.title}</span> deleted from
            //     cart
            //   </div>
            // );
        }}
      >
        <AiOutlineClose />
      </button>
      {/* Delete item end*/}
    </div>
    // </div>
  );
};

export default CartProduct;
