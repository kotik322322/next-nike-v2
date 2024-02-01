"use client";
import Container from "@/components/Container";
import WishListProduct from "@/components/WishListProduct";
import { ProductType, WishListState } from "@/types";
import { useSelector } from "react-redux";
import EmptyList from "@/components/EmptyList";

const WishList = () => {
  const { wishList } = useSelector((state: WishListState) => state.wishList);

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
        <EmptyList text="Your wish list is empty &#129303;"/>
      )}
    </>
  );
};

export default WishList;
