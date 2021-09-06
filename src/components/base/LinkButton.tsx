import React, { PropsWithChildren, HTMLAttributes } from "react";
import Link from "next/link";

type Color = "primary" | "gray";

type LinkButtonProps = HTMLAttributes<HTMLDivElement> & {
  color?: Color;
  href: string;
};

const LinkButton = (props: PropsWithChildren<LinkButtonProps>) => {
  const color = props.color || "gray";
  const href = props.href;
  let cssClasses = props.className + " btn btn-" + color;

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
