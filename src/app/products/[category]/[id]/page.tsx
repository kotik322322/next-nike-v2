import ProductById from "@/components/ProductById";
import { ProductType } from "@/types";

interface Props {
  params: {
    id: string;
    category: string;
  };
}

// ==================== Function FetchData =================
const getProductById = async (id: string, category: string) => {
  const { data } = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/products/${category}/${id}`
    ).then((res) => res.json());
    
    return data;
  };
  // ==================== Function FetchData End=================

const ProductDetailsPage = async ({ params: { id, category } }: Props) => {
  const product: ProductType = await getProductById(id, category);

  return <ProductById product={product} />;
};

export default ProductDetailsPage;
