"use client";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

interface Props {
  label: string;
  href: string;
  img: StaticImageData;
  backGround: string;
}

const Category = ({ label, href, img, backGround }: Props) => {
  const isMobile = useMediaQuery({ query: "(max-width:768px)" });

  const mobileAnimation = {
    initial: { height: "100%" },
    whileHover: {
      height: ["100%", "200%", "240%", "200%"],
      // transition: { duration: 0.65, ease: "easeInOut" },
    },
  };

  const desktopAnimation = {
    initial: { width: "100%" },
    whileHover: {
      width: ["100%", "300%", "420%", "400%"],
      transition: { duration: 0.65, ease: "easeInOut" },
    },
  };

  return (
    <motion.li
      style={{ background: backGround }}
      {...(isMobile ? mobileAnimation : desktopAnimation)}
      className="h-1/3 w-full md:w-1/3 md:h-full"
      key={label}
    >
      <Link
        className="w-full h-full flex items-center justify-center"
        href={`/products/${href}`}
      >
        {/* ============== Category Image================= */}
        <div className="w-full h-full  relative group">
          <h2 className="ml-10 mt-10 md:text-center text-white text-[36px]">{label}</h2>
          <h3 className="hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[62px] group-hover:block">
            NIKEONE
          </h3>
          <Image
            src={img}
            alt="Category Icon"
            width={250}
            height={250}
            priority
            className="absolute w-auto h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-200 rotate-[0deg] group-hover:rotate-[25deg]"
          />
        </div>
        {/* ============== Category Image End================= */}
      </Link>
    </motion.li>
  );
};

export default Category;
