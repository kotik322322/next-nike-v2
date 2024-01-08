// import images
import menImg from "../assets/images/category/men.png";
import womenImg from "../assets/images/category/women.png";
import kidsImg from "../assets/images/category/kids.png";
import Category from "@/components/Category";

const Links = [
  {
    label: "Men",
    href: "/men",
    img: menImg,
    bg: "#2d2e30",
  },
  {
    label: "Women",
    href: "/women",
    img: womenImg,
    bg: "#b3e141",
  },
  {
    label: "Kids",
    href: "/kids",
    img: kidsImg,
    bg: "#58462d",
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden" style={{ height: "calc(100vh - 80px)" }}>
      <ul className="w-full h-screen flex">
        {Links.map((link) => (
          <Category
            key={link.label}
            label={link.label}
            href={link.href}
            img={link.img}
            backGround={link.bg}
          />
        ))}
      </ul>
    </div>
  );
}
