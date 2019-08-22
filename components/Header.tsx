import Link from "next/link";
import React from "react";

const routes = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

const Header = () => (
  <header>
    <nav>
      <ul>
        {routes.map(route => (
          <li key={route.label}>
            <Link href={route.href}>
              <a>{route.label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
    <style jsx>{`
      li {
        display: inline-block;
        margin: 0 5px;
      }
    `}</style>
  </header>
);

export default Header;
