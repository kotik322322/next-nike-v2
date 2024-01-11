"use client";

import { actualCartTotalAmount, clearCart } from "@/store/cartSlice";
import { CartState } from "@/types";
import React, { useEffect } from "react";
import { TfiTrash } from "react-icons/tfi";
import { useDispatch, useSelector } from "react-redux";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcStripe,
} from "react-icons/fa";

const CartCheckout = () => {
  const dispatch = useDispatch();
  const { cartProducts: data } = useSelector((state: CartState) => state.cart);
  const { cartTotalAmount } = useSelector((state: CartState) => state.cart);

  useEffect(() => {
    dispatch(actualCartTotalAmount());
  }, [dispatch, data]);

  return (
    <div className="border border-gray-500 rounded-md p-4 lg:w-1/3">
      <div className="w-full flex flex-col gap-y-2">
        <p className="uppercase font-semibold next-base">Order Summary</p>

        <div className="flex justify-between border border-transparent border-b-black">
          <p>Subtotal</p>
          <p>{cartTotalAmount.toFixed(2)} $</p>
        </div>

        <div className="flex justify-between border border-transparent border-b-black">
          <p>Delivery</p>
          <span>0 $</span>
        </div>

        <div className="flex justify-between text-base font-semibold border border-transparent border-b-black">
          <p>Total</p>
          <p>{cartTotalAmount.toFixed(2)} $</p>
        </div>

        <div className="flex items-center justify-center gap-x-3 text-2xl">
          <span className="text-sm">Payment Methods</span>
          <FaCcVisa />
          <FaCcMastercard />
          <FaCcPaypal />
          <FaCcStripe />
        </div>

        <button className="px-10 py-2 flex items-center justify-center gap-x-4 rounded-full bg-black text-white hover:bg-gray-500 duration-200">
          Checkout now
        </button>

        <button
          className="px-10 py-2 flex items-center justify-center gap-x-4 rounded-full bg-black text-white hover:bg-gray-500 duration-200 "
          onClick={() => dispatch(clearCart())}
        >
          Clear Bag
          <TfiTrash />
        </button>
      </div>
    </div>
  );
};

export default CartCheckout;
