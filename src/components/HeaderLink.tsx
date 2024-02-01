import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  href: string;
  title: string;
}

const HeaderLink = ({ href, title }: Props) => {
  const pathName = usePathname();

  const isActive = pathName.startsWith(href);

  return (
    <Link
      href={href}
      className={`w-full pb-3 text-base border-b-2 border-transparent hover:text-black hover:border-black transition-all duration-200 ${
        isActive ? "text-slate-500" : "text-black"
      }`}
    >
      {title}
    </Link>
  );
};

export default HeaderLink;
