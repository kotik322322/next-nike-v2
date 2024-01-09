import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  href: string;
  title: string
}

const HeaderLink = ({href, title}: Props) => {
  const pathName = usePathname();

  return (
    <Link
      href={href}
      className={`w-full pb-3 border-b-2 border-transparent hover:border-black transition-all duration-200 ${
        pathName === href && "border-black text-gray-500"
      }`}
    >
      {title}
    </Link>
  );
};

export default HeaderLink;
