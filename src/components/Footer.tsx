import Container from "./Container";
import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" w-full py-4 bg-black text-white ">
      <Container className="flex flex-col justify-center items-center">
        <div className="">
          <ul className="text-2xl flex items-center justify-center gap-x-4 py-4">
            <li>
              <FaFacebookSquare />
            </li>
            <li>
              <FaInstagramSquare />
            </li>
            <li>
              <FaTwitterSquare />
            </li>
          </ul>
        </div>

        <div className="flex justify-center items-center gap-x-5">
          <span>Info</span>
          <span>Support</span>
          <span>Marketing</span>
        </div>

        <div className="flex justify-center items-center gap-x-5">
          <span>Terms of Uses</span>
          <span>Privacy Police</span>
        </div>
        <span className="block text-center ">All rights reserved &copy; </span>
      </Container>
    </div>
  );
};

export default Footer;
