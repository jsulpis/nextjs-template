import Link from "next/link";
import React, { useState } from "react";

const routes = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

function Header() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <header>
      <div className="flex flex-wrap shadow">
        <div className="w-full">
          <nav className="elative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-md bg-gray-500">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full relative flex justify-between md:w-auto px-4 md:static md:block md:justify-start">
                <Link href="/">
                  <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white">
                    {process.env.APP_TITLE}
                  </a>
                </Link>
                <button
                  className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
                  type="button"
                  onClick={() => setIsCollapsed(!isCollapsed)}
                >
                  <span className="block relative w-6 h-px rounded-sm bg-white"></span>
                  <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                  <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                </button>
              </div>
              <div
                className={`flex md:flex-grow items-center overflow-hidden transition-height duration-300 md:h-auto ${
                  isCollapsed ? "h-0" : "h-24"
                } `}
              >
                <ul className="flex flex-col md:flex-row list-none ml-auto">
                  {routes.map(route => (
                    <li className="nav-item" key={route.label}>
                      <Link href={route.href}>
                        <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                          {route.label}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
