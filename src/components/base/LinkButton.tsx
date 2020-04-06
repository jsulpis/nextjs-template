import React, { PropsWithChildren, HTMLAttributes } from "react";
import Link from "next/link";

type Color = "blue" | "gray";

type LinkButtonProps = HTMLAttributes<HTMLDivElement> & {
  color?: Color;
  href: string;
};

const LinkButton = (props: PropsWithChildren<LinkButtonProps>) => {
  const color = props.color || "gray";
  const href = props.href;
  let cssClasses =
    props.className +
    " px-6 py-3 mx-2 rounded outline-none focus:outline-none uppercase shadow ";

  // Required to prevent purgecss from deleting the associated tailwind classes
  switch (color) {
    case "blue":
      cssClasses += `bg-blue-500 active:bg-blue-500 hover:bg-blue-600`;
      break;
    case "gray":
      cssClasses += `bg-gray-500 active:bg-gray-500 hover:bg-gray-600`;
      break;
  }

  if (process.browser && href.startsWith("http")) {
    return (
      <a href={href} className={cssClasses}>
        {props.children}
      </a>
    );
  } else {
    return (
      <Link href={href} passHref>
        <a className={cssClasses}>{props.children}</a>
      </Link>
    );
  }
};

export default LinkButton;
