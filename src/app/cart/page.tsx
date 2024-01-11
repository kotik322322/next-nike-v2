"use client";

import Container from "@/components/Container";
import CartProduct from "@/components/CartProduct";
import { useSelector } from "react-redux";
import { CartProductType, CartState } from "@/types";
import CartCheckout from "@/components/CartCheckout";
import Link from "next/link";

const Cart = () => {
  const { cartProducts: data } = useSelector((state: CartState) => state.cart);

  return (
    <>
      {data && data?.length > 0 ? (
        <Container className="my-5 ">
          <h2 className="text-2xl font-semibold my-4">Cart Page</h2>

          <div className="flex flex-col gap-y-3 lg:flex-row lg:gap-x-3 lg:items-start">
            <div className="flex flex-col gap-y-3 ">
              {data &&
                data?.map((product: CartProductType, index: number) => (
                  <CartProduct product={product} key={index} />
                ))}
            </div>

            {data.length > 0 && <CartCheckout />}
          </div>
        </Container>
      ) : (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-y-4 text-center">
          Your cart is empty &#129303;
          <Link
            href={"/"}
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
