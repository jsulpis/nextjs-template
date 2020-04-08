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

  // Since I made the classes by concatenation, purgecss won't see them and will delete
  // the associated tailwind classes. To whitelist them, the classes just have to appear
  // somewhere in the file: btn-primary btn-gray (this is why I made the Color type).

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
