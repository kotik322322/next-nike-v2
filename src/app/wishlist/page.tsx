"use client";
import Container from "@/components/Container";
import WishListProduct from "@/components/WishListProduct";
import { ProductType, WishListState } from "@/types";
import { useSelector } from "react-redux";
import Link from "next/link";

const WishList = () => {
  const { wishList } = useSelector((state: WishListState) => state.wishList);

  console.log("wishlist ===>", wishList);
  return (
    <>
      {wishList && wishList?.length > 0 ? (
        <Container className="w-full mt-7 ">
          <h2 className="text-2xl font-semibold my-4">Your Wishlist</h2>
          <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {wishList?.map((product: ProductType) => (
              <WishListProduct product={product} key={product._id} />
            ))}
          </div>
        </Container>
      ) : (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-y-4 text-center">
          Your wishlist is empty &#129303;
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

export default WishList;
