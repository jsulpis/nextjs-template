import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";

const routes = [
  { href: "/", label: "Home" },
  { href: "/docs", label: "Documentation" },
  { href: "/contact", label: "Contact" }
];

function Header() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const router = useRouter();

  return (
    <header className="absolute top-0 z-50 w-full bg-white shadow-lg">
      <nav className="container flex flex-wrap items-center justify-between px-2 py-3 mx-auto">
        <div className="relative flex justify-between w-full px-3 md:w-auto md:static md:block md:justify-start">
          <Link href="/">
            <a className="inline-block py-2 text-lg font-bold">{process.env.appTitle}</a>
          </Link>
          <button
            className="px-3 py-1 text-xl outline-none md:hidden focus:outline-none"
            type="button"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <span className="block w-6 h-px bg-gray-700 rounded-sm"></span>
            <span className="block w-6 h-px mt-1 bg-gray-700 rounded-sm"></span>
            <span className="block w-6 h-px mt-1 bg-gray-700 rounded-sm"></span>
          </button>
        </div>
        <div
          className={`flex overflow-hidden transition-height duration-300 md:h-auto ${
            isCollapsed ? "h-0" : "h-24"
          } `}
          id="list-mobile"
        >
          <ul className="flex flex-col list-none md:flex-row">
            {routes.map(route => (
              <li className="py-1 text-left" key={route.label}>
                <Link href={route.href}>
                  <a
                    className={`px-3 font-semibold hover:opacity-75 ${
                      router.pathname === route.href ? "text-primary-500" : ""
                    }`}
                  >
                    {route.label}
                  </a>
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
