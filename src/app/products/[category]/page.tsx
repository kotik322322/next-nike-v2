import Container from "@/components/Container";
import SingleProduct from "@/components/SingleProduct";
import { ProductType } from "@/types";

interface Props {
  params: {
    category: string;
  };
}

const getProductsByCategory = async (category: string) => {
  const { data } = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/products/${category}`
  ).then((res) => res.json());
  return data;
};

const ProductsByCategory = async ({ params: { category } }: Props) => {
  const productList:ProductType[] = await getProductsByCategory(category);

  return (
    <Container>
      <h2 className="capitalize text-2xl font-medium my-4">{category}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-4">
        {productList.map((product: ProductType) => (
          // ============ Single Product============================
          <SingleProduct product={product} key={product._id} />
          // ============ Single Product End =======================
        ))}
      </div>
    </Container>
  );
};

export default ProductsByCategory;
