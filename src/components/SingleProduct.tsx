"use client";

// import { addToCart } from "@/store/cartSlice";
import { ProductType } from "@/types";
import Image from "next/image";
import Link from "next/link";
// import { toast } from "sonner";
// import { useDispatch } from "react-redux";
// import ToastSuccess from "./ToastSuccess";
// import { addToWishlist } from "@/store/wishlistSlice";

interface ProductProps {
  product: ProductType;
}

const SingleProduct = ({ product }: ProductProps) => {
  // const dispatch = useDispatch();


  return (
    <div className="w-full relative bg-[#f6f6f6] border border-grey rounded-sm">
      {product && product.isNew && (
        <span className="px-3 py-1 rounded-full absolute top-3 right-5 bg-grey text-sm z-10">
          New Arrival
        </span>
      )}

      {/* <div className="absolute top-3 left-5 z-20 cursor-pointer" onClick={() => dispatch(addToWishlist(product))}> 
        <AiOutlineHeart className="text-2xl text-black"/>
      </div> */}

      <Link
        key={product?._id}
        href={{
          pathname: `${product.category}/${product._id}`,
        }}
        // href={{ pathname: "/products", query: { _id: product._id } }}
        className="block overflow-hidden"
      >
        <Image
          src={product.mainImg}
          loading="lazy"
          alt="Main Image"
          width={250}
          height={250}
          className="mx-auto hover:scale-110 duration-200"
          // style={{ width: '100%', height: 'auto' }}
        />
      </Link>

      <div className="grid grid-cols-2 place-items-center">
        <div className="flex flex-col gap-y-2 p-3 text-sm">
          <h4 className="text-sm font-semibold">{product.title}</h4>
          <span className="font-medium">$ {product.price}</span>
        </div>

        <button
          onClick={() => ""
            // dispatch(addToCart(product)) &&
            // toast(
            //   <ToastSuccess content={`${product.title} added to the cart`} />
            // )
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
