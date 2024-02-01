import Link from "next/link";
import React from "react";

interface Props {
  text: string;
}

const EmptyList = ({ text }: Props) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-y-4 text-center">
      {text}
      <Link
        href={"/"}
        className="p-2 w-full flex items-center justify-center rounded-full text-sm text-white bg-black hover:bg-bgHover duration-200"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default EmptyList;
