
import Link from "next/link";
import Image from "next/image";
import { ProductType } from "@/types";
import AddToWishListButton from "./AddToWishListButton";
import AddToCartButton from "./AddToCartButton";

interface ProductProps {
  product: ProductType;
}

const SingleProduct = ({ product }: ProductProps) => {

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
          className="mx-auto hover:scale-110 duration-200 w-auto h-auto"
          // priority
        />
      </Link>

      <div className="flex flex-col items-start gap-y-2 p-3">
        <div className="flex flex-col gap-y-2 p-3 text-sm">
          <h4 className="text-sm font-semibold">{product.title}</h4>
          <span className="font-medium">$ {product.price}</span>
        </div>

        <AddToCartButton product={product} />
        <AddToWishListButton product={product}/>
      </div>
    </div>
  );
};

export default SingleProduct;
