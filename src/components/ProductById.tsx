import Container from "@/components/Container";
import ProductSlider from "@/components/ProductSlider";
import { ProductType } from "@/types";
import AddToCartButton from "./AddToCartButton";
import AddToWishListButton from "./AddToWishListButton";

const ProductById = ({ product }: { product: ProductType }) => {
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

            <div className="flex flex-col items-center justify-center gap-y-3 my-4">
              <AddToCartButton product={product} />
              <AddToWishListButton product={product} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductById;
