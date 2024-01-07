"use client";

import Container from "@/components/Container";
import CartProduct from "@/components/CartProduct";
import { useDispatch, useSelector } from "react-redux";
import { CartProductType, CartState } from "@/types";
import { clearCart } from "@/store/cartSlice";
import Link from "next/link";

const Cart = () => {
  const { cartProducts: data } = useSelector((state: CartState) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      {data && data?.length > 0 ? (
        <Container>
          <h2 className="text-2xl font-semibold my-4">Cart Page</h2>

          <div className="flex flex-col gap-y-3">
            {data &&
              data?.map((product: CartProductType, index: number) => (
                <CartProduct product={product} key={index} />
              ))}
          </div>

          <button
            className="px-10 py-2 flex items-center justify-center gap-x-4 rounded-full bg-black text-white hover:bg-bgHover duration-200"
            onClick={() => dispatch(clearCart())}
          >
            Clear Bag
          </button>
        </Container>
      ) : (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-y-4 text-center">
          Your cart is empty &#129303;
          <Link
            href={"/products/all"}
            className="p-2 w-full flex items-center justify-center rounded-full text-sm text-white bg-black hover:bg-bgHover duration-200"
          >
            Continue Shopping
          </Link>
        </div>
      )}
    </>
  );
};

export default Cart;
