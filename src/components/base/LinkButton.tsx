import React, { PropsWithChildren } from "react";
import Link from "next/link";

const LinkButton = (props: PropsWithChildren<{ color?: string; href: string }>) => {
  const color = props.color || "gray";
  const href = props.href;
  const cssClasses = `px-6 py-3 mx-2 rounded outline-none focus:outline-none bg-${color}-500 active:bg-${color}-500 uppercase shadow hover:bg-${color}-600`;

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
