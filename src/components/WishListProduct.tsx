"use client";
import Image from "next/image";
import Link from "next/link";
import { ProductType } from "@/types";
import { useDispatch } from "react-redux";
import { removeFromWishlist } from "@/store/wishlistSlice";
import { AiOutlineClose } from "react-icons/ai";
import AddToCartButton from "./AddToCartButton";

interface WishListProductProps {
  product: ProductType;
}

const WishListProduct = ({ product }: WishListProductProps) => {
  const dispatch = useDispatch();
  return (
    <div className="w-full p-2 flex items-center gap-x-3">
      <Image
        src={product.mainImg}
        alt="Product icon"
        width={120}
        height={120}
      />

      <div className="w-full flex flex-col items-center justify-center gap-y-4">
        <div className="w-full flex flex-col items-center justify-between">
          <button
            onClick={() => dispatch(removeFromWishlist(product))}
            className="w-6 h-6 flex items-center justify-center rounded-full text-white ml-auto bg-black hover:bg-slate-500 duration-200"
          >
            <AiOutlineClose />
          </button>
          <h4 className="font-medium text-base mt-2">{product.title}</h4>
        </div>

        <div className="w-full flex flex-col gap-y-2">
          <AddToCartButton product={product} />
          <Link
            href={`/products/${product.category}/${product._id}`}
            className="w-full py-2 flex items-center justify-center gap-x-4 border border-1 border-black  rounded-full  text-sm text-black hover:shadow-xl duration-200"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WishListProduct;
