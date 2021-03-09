import { useState } from "react";
import Link from "next/link";

type Props = {
  preview?: boolean;
};

const NavBar = ({ preview }: Props) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="flex items-center flex-wrap p-3 ">
        <button
          className=" inline-flex p-3 hover:bg-gray-100 rounded lg:hidden text-gray-500 ml-auto hover:text-gray-700 outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-500 font-bold items-center justify-center hover:bg-gray-100 hover:text-gray-500 ">
                Home
              </a>
            </Link>

            <Link href="https://mevisita.com.br">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-500 font-bold items-center justify-center hover:bg-gray-100 hover:text-gray-500">
                Conheça
              </a>
            </Link>
            <Link href="https://mevisita.com.br/user/register">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-500 font-bold items-center justify-center hover:bg-gray-100 hover:text-gray-500">
                Cadastre-se
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
