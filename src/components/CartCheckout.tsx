import { clearCart } from "@/store/cartSlice";
import React from "react";
import { TfiTrash } from "react-icons/tfi";
import { useDispatch } from "react-redux";

const CartCheckout = () => {
  const dispatch = useDispatch();

  return (
    <div className="border border-gray-500 rounded-md p-4 lg:w-1/3">
      <div className="w-full flex flex-col gap-y-1">
        <p className="uppercase font-semibold next-base">Order Summary</p>

        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>2230 $</p>
        </div>

        <div className="flex justify-between">
          <p>Delivery</p>
          <span>0 $</span>
        </div>

        <div className="flex justify-between text-base font-semibold">
          <p>Total</p>
          <p>2230 $</p>
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
