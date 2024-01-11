"use client";

import { IoBagCheckOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { addToCart } from "@/store/cartSlice";
import { useDispatch } from "react-redux";
import Container from "@/components/Container";
import ProductSlider from "@/components/ProductSlider";
import { ProductType } from "@/types";
import { addToWishlist } from "@/store/wishlistSlice";
import { toast } from "react-hot-toast";

const ProductById = ({ product }: { product: ProductType }) => {
  // console.log(product)
  const dispatch = useDispatch();
  return (
    <Container className="pb-4">
      <h3 className="text-2xl lg:text-[34px] font-bold text-center my-4">
        {product.title}
      </h3>

      <div className="flex flex-col md:flex-row items-center justify-center gap-x-4">
        <ProductSlider images={product.images} />

        <div className="flex flex-1 flex-col gap-y-10">
          <div className="flex flex-col">
            {/* price */}
            <span className="font-bold text-xl my-4"> $ {product.price}</span>
            {/* price end */}

            {/* description  */}
            <p className="text-[14px] leading-[20px] mb-4">
              {product.description}
            </p>
            {/* description end */}

            {/* ============Сделать это компонентом Add to Bag================ */}
            <div className="flex flex-col items-center justify-center gap-y-3 my-4">
              <button
                onClick={() =>
                  dispatch(addToCart(product)) && toast.success(`${product.title} added to cart`)
                }
                className="w-full py-3 flex items-center justify-center gap-x-4 rounded-full bg-black text-white hover:bg-bgHover duration-200"
              >
                Add to Cart
                <IoBagCheckOutline className="text-xl" />
              </button>
              {/* ============Сделать это компонентом Add to Bag================ */}

              <button
                className="w-full py-3 flex items-center justify-center gap-x-4 border border-1 border-black  rounded-full  text-black hover:shadow-xl duration-200 "
                // text="black"
                onClick={
                  () => dispatch(addToWishlist(product)) && toast.success(`${product.title} added to wish list`)
                }
              >
                Add to Wishlist
                <CiHeart className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductById;
