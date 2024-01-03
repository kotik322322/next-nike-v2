import Image from "next/image";
import Link from "next/link";
//Images
import logoImg from "../assets/images/logo.svg";

interface LogoProps {
  width: number,
  height: number,
  onClick?: React.ReactEventHandler
}

const Logo = ({width, height, onClick}: LogoProps) => {
  return (
    <Link href={"/"}>
      <Image src={logoImg} alt="Logo" width={width} height={height}  onClick={onClick}/>
    </Link>
  );
};

export default Logo;
