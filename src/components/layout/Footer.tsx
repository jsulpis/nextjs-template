import React, { PropsWithChildren, HTMLProps } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const FooterLink = (props: PropsWithChildren<{ href: string }>) => (
  <a href={props.href} className="font-semibold text-gray-900">
    {props.children}
  </a>
);

export default function Footer(props: HTMLProps<HTMLDivElement>) {
  return (
    <footer className={"p-6 " + (props.className || "")}>
      <hr className="mb-6 border-gray-400" />
      <div className="w-full px-4 mx-auto text-center">
        <div className="text-xs text-gray-600 py-1">
          <p>
            © {new Date().getFullYear()} made with{" "}
            <FontAwesomeIcon className="h-2 align-baseline inline-block" icon={faHeart} />{" "}
            by <FooterLink href="https://github.com/jsulpis">Julien Sulpis</FooterLink>.
          </p>
          <p>
            Give it a star on{" "}
            <FooterLink href="https://github.com/jsulpis/next-starter-project">
              GitHub
            </FooterLink>{" "}
            !
          </p>
          <p>
            Theme:{" "}
            <FooterLink href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/presentation">
              Tailwind Starter Kit
            </FooterLink>{" "}
            by <FooterLink href="https://www.creative-tim.com">Creative Tim</FooterLink>.
          </p>
        </div>
      </div>
    </footer>
  );
}
