// "use client"
import Container from "@/components/Container";
import SingleProduct from "@/components/SingleProduct";
// import Product from "@/components/Product";
import { ProductType } from "@/types";

interface Props {
  params: {
    category: string;
  };
}

const getProductsByCategory = async (category: string) => {
  console.log(category)
  const { data } = await fetch(
    `http://localhost:3000/api/${category}`
  ).then((res) => res.json());
  return data;
};

const ProductsByCategory = async ({ params: { category } }: Props) => {
  
  const productList = await getProductsByCategory(category);

  return (
    <Container>
      <h2 className="capitalize text-2xl font-medium my-4">{category}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {productList.map((product: ProductType) => (
          <SingleProduct product={product} key={product._id} />
        ))}
      </div>
    </Container>
  );
}

export default ProductsByCategory
