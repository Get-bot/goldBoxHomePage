import styles from "./header.module.css";
import Link from "next/link";

const Navbar = (): JSX.Element => {
  return (
    <>
      <ul className="flex justify-between">
        <li className="mr-3">
          <Link className="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4" href="/">
            home
          </Link>
        </li>
        <li className="mr-3">
          <Link className="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4" href="/page1">
            페이지1
          </Link>
        </li>
        <li className="mr-3">
          <Link className="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4" href="/page2">
            페이지2
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
