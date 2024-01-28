"use client"
import { CartProductType } from "@/types";
import { useDispatch } from "react-redux";
import { decrement, increment, removeFromCart } from "@/store/cartSlice";
import Link from "next/link";
import { TfiTrash } from "react-icons/tfi";
import toast from "react-hot-toast";

const CartProductBar = ({ product }: { product: CartProductType }) => {
  const dispatch = useDispatch();
  return (
    <div className="w-full grid grid-rows-5 md:grid-rows-1 md:grid-cols-5 md:justify-between place-items-center text-center font-semibold text-[10px] sm:text-base px-2">
      <Link href={`/products/${product.category}/${product._id}`}>
        <h4 className="">{product.title}</h4>
      </Link>

      {/* item price  */}
      <span className="">$ {product.price}</span>
      {/* item price end */}

      {/* item quantity&& increase and decrease  */}
      <div className="flex items-center justify-center gap-x-3 ">
        <button
          className="w-6 h-6  text-center rounded-full  bg-black hover:bg-bgHover text-white hover:bg-gray-500 duration-200"
          onClick={() => dispatch(decrement(product))}
        >
          -
        </button>

        {/* Item Quantity */}
        <div className="w-10">{product.quantity}</div>

        <button
          className="w-6 h-6  text-center rounded-full bg-black hover:bg-bgHover text-white hover:bg-gray-500 duration-200"
          onClick={() => dispatch(increment(product))}
        >
          +
        </button>
      </div>

      {/* item total  */}
      <span className="">
        $ {Number(product.price * product.quantity).toFixed(2)}
      </span>
      {/* item total end */}

      {/* Delete item*/}
      <button
        className="w-10 h-10 text-xl sm:text-2xl rounded-full flex items-center justify-center hover:hoverEffect"
        onClick={() => {
          dispatch(removeFromCart(product));
          toast.success(`${product.title} deleted from the cart`)
        }}
      >
        <TfiTrash />
      </button>
      {/* Delete item end*/}
    </div>
  );
};

export default CartProductBar;
