"use client";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Props {
  label: string;
  href: string;
  img: StaticImageData;
  backGround: string;
}

const Category = ({ label, href, img, backGround }: Props) => {
  // const isDesktop = useMediaQ
  return (
    <motion.li
      style={{ background: backGround }}
      initial={{ width: "100%" }}
      whileHover={{
        width: ["100%", "300%", "420%", "400%"],
        transition: { duration: 0.65, ease: "easeInOut" },
      }}
      className="w-1/3 h-full"
      key={label}
    >
      <Link
        className="w-full h-full flex items-center justify-center"
        href={`/products/${href}`}
      >
        {/* ============== Category Image================= */}
        <div className="w-full h-full  relative group">
          <h2 className="text-center mt-10 text-white text-[50px]">{label}</h2>
          <h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[62px] hidden group-hover:block">
            NIKEONE
          </h3>
          <Image
            src={img}
            alt="Category Icon"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-200 rotate-[0deg] group-hover:rotate-[25deg] max-w-[300px]"
          />
        </div>
        {/* ============== Category Image End================= */}
      </Link>
    </motion.li>
  );
};

export default Category;
