import Link from "next/link";
import {} from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

export default function Header() {
  return (
    <div className="flex justify-between items-center py-2">
      <div className="w-56">
        <img src="/logo.svg" alt="logo" />
      </div>
      <div className="hidden lg:block">
        <ul className="menu flex">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>About Us</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Services</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Contact Us</a>
            </Link>
          </li>
          <li>
            <Link href="/login">
              <a className="border px-5 py-2 bg-sky-400 text-white  hover:bg-sky-600">
                Login
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="block lg:hidden">
        <AiOutlineMenu className="text-2xl cursor-pointer" />
      </div>
    </div>
  );
}
