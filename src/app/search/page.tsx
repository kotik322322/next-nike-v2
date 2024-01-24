"use client";

import Container from "@/components/Container";
import SearchForm from "@/components/SearchForm";
import SearchProduct from "@/components/SearchProduct";
import { ProductType, SearchListState } from "@/types";
import React from "react";
import { useSelector } from "react-redux";

const SearchPage = () => {
  const { searchList } = useSelector(
    (state: SearchListState) => state.searchList
  );



  return (
    <Container className="">
      <h1 className="text-xl md:text-2xl font-medium my-4">Lets try to find your Shoes</h1>
      {/* ======================Serch Form====================== */}
      <div className="w-full sm:w-2/3 m-auto">
        <SearchForm />
      </div>
      {/* ======================Serch Form====================== */}

      {/* ======================Product List====================== */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-2">
        {searchList.length > 0 ? (
          searchList.map((product: ProductType) => (
            <SearchProduct key={product._id} product={product} />
          ))
        ) : (
          <h1 className="">No Products</h1>
        )}

      </div>
      {/* ======================Product List End====================== */}
    </Container>
  );
};

export default SearchPage;
