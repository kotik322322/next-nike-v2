import { addToSearchList } from "@/store/searchSlice";
import React, { ChangeEvent, FormEvent, useState } from "react";

import { IoIosSearch } from "react-icons/io";
import { useDispatch } from "react-redux";

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const onSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const encodedSearchQuery = encodeURI(searchQuery);

    if (encodedSearchQuery === "") {
      return;
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/products/search?item=${encodedSearchQuery}`
    );

    const { data } = await response.json();

    dispatch(addToSearchList(data));
  };

  return (
    <div>
      <h1 className="text-xl md:text-2xl font-medium my-4">
        Search results for {searchQuery}:
      </h1>
      <form
        className="w-full flex justify-center items-center h-10 bg-[#e5e5e5] rounded-full pr-8 overflow-hidden"
        onSubmit={onSearch}
      >
        <button
          type="submit"
          className=" rounded-full hover:bg-[#cacaca] hoverEffect p-2"
        >
          <IoIosSearch className="text-2xl" />
        </button>
        <input
          value={searchQuery}
          onChange={handleChange}
          type="text"
          placeholder="Search"
          className="w-full pl-2 outline-none h-full bg-inherit"
        />
      </form>
    </div>
  );
};

export default SearchForm;
