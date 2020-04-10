import React, { PropsWithChildren } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const FooterLink = (props: PropsWithChildren<{ href: string }>) => (
  <a href={props.href} className="font-semibold">
    {props.children}
  </a>
);

export default function Footer() {
  return (
    <footer className="relative text-sm bg-gray-200 p-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-end">
          <div className="w-full lg:w-6/12 px-4 text-base">
            <p>
              Theme:{" "}
              <FooterLink href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/presentation">
                Tailwind Starter Kit
              </FooterLink>{" "}
              by <FooterLink href="https://www.creative-tim.com">Creative Tim</FooterLink>
              .
            </p>
          </div>
          <div className="w-full flex flex-wrap lg:w-6/12 px-4 lg:text-left">
            <div className="w-full mt-3 lg:w-5/12 px-4">
              <span className="block uppercase text-sm font-semibold mb-1 opacity-75">
                Useful Links
              </span>
              <ul className="list-unstyled">
                <li>
                  <FooterLink href="https://www.netlify.com/jamstack/">
                    About the JAMstack
                  </FooterLink>
                </li>
                <li>
                  <FooterLink href="https://jsulpis.github.io/nuxt-template">
                    Nuxt.js Template
                  </FooterLink>
                </li>
              </ul>
            </div>
            <div className="w-full mt-3 lg:w-5/12 px-4">
              <span className="block uppercase text-sm font-semibold mb-1 opacity-75">
                About
              </span>
              <ul className="list-unstyled">
                <li>
                  <FooterLink href="https://github.com/jsulpis/nextjs-template">
                    Star on GitHub
                  </FooterLink>
                </li>
                <li>
                  <FooterLink href="https://github.com/jsulpis/nextjs-template/blob/master/LICENSE">
                    MIT License
                  </FooterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="mt-3 mb-6 border-gray-400" />
        <div className="w-full mx-auto">
          <p className="text-sm py-1">
            © {new Date().getFullYear()} made with{" "}
            <FontAwesomeIcon className="h-2 align-baseline inline-block" icon={faHeart} />{" "}
            by <FooterLink href="https://github.com/jsulpis">Julien Sulpis</FooterLink>.
          </p>
        </div>
      </div>
    </footer>
  );
}
