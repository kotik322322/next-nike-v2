"use client";

import Link from "next/link";
import Image from "next/image";
import { ProductType } from "@/types";
import { addToCart } from "@/store/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";

interface ProductProps {
  product: ProductType;
}

const SingleProduct = ({ product }: ProductProps) => {
  const dispatch = useDispatch();

  return (
    <div className="w-full relative bg-[#f6f6f6] border border-grey rounded-sm">
      {product && product.isNew && (
        <span className="px-3 py-1 rounded-full absolute top-3 right-5 bg-[#d4d1d1] text-sm z-10">
          New Arrival
        </span>
      )}

      <Link
        key={product?._id}
        href={{
          pathname: `${product.category}/${product._id}`,
        }}
        className="block overflow-hidden"
      >
        <Image
          src={product.mainImg}
          loading="lazy"
          alt="Main Image"
          width={250}
          height={250}
          className="mx-auto hover:scale-110 duration-200"
        />
      </Link>

      <div className="grid grid-cols-2 place-items-center">
        <div className="flex flex-col gap-y-2 p-3 text-sm">
          <h4 className="text-sm font-semibold">{product.title}</h4>
          <span className="font-medium">$ {product.price}</span>
        </div>

        <button
          onClick={() =>
            dispatch(addToCart(product)) &&
            toast.success(`${product.title} added to cart`)
          }
          className="bg-black text-white px-4 py-2 rounded-full text-[12px] hover:bg-bgHover duration-200"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
