"use client";

import Container from "@/components/Container";
import CartProduct from "@/components/CartProduct";
import { useSelector } from "react-redux";
import { CartProductType, CartState } from "@/types";
import CartCheckout from "@/components/CartCheckout";
import EmptyList from "@/components/EmptyList";

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
        <EmptyList text="Your cart is empty &#129303;" />
      )}
    </>
  );
};

export default Cart;
