import { IoIosSearch } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { actualCartQuantity } from "@/store/cartSlice";
import { CartState, WishListState } from "@/types";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { cartProducts } = useSelector((state: CartState) => state.cart);
  const {wishList} = useSelector((state: WishListState) => state.wishList )
  const { cartTotalQuantity } = useSelector((state: CartState) => state.cart);

  useEffect(() => {
    dispatch(actualCartQuantity());
  }, [dispatch, cartProducts]);

  return (
    <div className=" flex items-center gap-x-3 ">
      <Link href={"/search"} className="w-[36px] h-[36px] flex items-center justify-center rounded-full hoverEffect">
        <IoIosSearch className="text-2xl" />
      </Link>

      <Link
        href={"/wishlist"}
        className="relative w-[36px] h-[36px] flex items-center justify-center rounded-full hoverEffect"
      >
        <IoIosHeartEmpty className="text-2xl " />
        <span className="absolute -top-1 -right-2 w-5 h-5 flex justify-center items-center rounded-full bg-grey">
          {wishList.length} 
        </span>
      </Link>

      <Link
        href={"/cart"}
        className="relative w-[36px] h-[36px] flex items-center justify-center rounded-full hoverEffect"
      >
        <HiOutlineShoppingBag className="text-2xl" />
        <span className="absolute -top-1 -right-2 w-5 h-5 flex justify-center items-center rounded-full bg-grey">
          {cartTotalQuantity}
        </span>
      </Link>
    </div>
  );
};

export default Sidebar;
