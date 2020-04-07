import Link from "next/link";
import React, { useState } from "react";

const routes = [
  { href: "/", label: "Home" },
  { href: "/docs", label: "Documentation" },
  { href: "/contact", label: "Contact" }
];

function Header() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <header className="absolute top-0 z-50 bg-white text-gray-700 shadow-lg w-full">
      <nav className="container mx-auto flex flex-wrap items-center justify-between px-2 py-3">
        <div className="w-full relative flex justify-between md:w-auto px-3 md:static md:block md:justify-start">
          <Link href="/">
            <a className="text-lg font-bold inline-block py-2">{process.env.APP_TITLE}</a>
          </Link>
          <button
            className="text-xl px-3 py-1 md:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <span className="block w-6 h-px rounded-sm bg-gray-700"></span>
            <span className="block w-6 h-px rounded-sm bg-gray-700 mt-1"></span>
            <span className="block w-6 h-px rounded-sm bg-gray-700 mt-1"></span>
          </button>
        </div>
        <div
          className={`flex overflow-hidden transition-height duration-300 md:h-auto ${
            isCollapsed ? "h-0" : "h-24"
          } `}
        >
          <ul className="flex flex-col md:flex-row list-none">
            {routes.map(route => (
              <li className="text-left py-1" key={route.label}>
                <Link href={route.href}>
                  <a className="px-3 hover:opacity-75">{route.label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
