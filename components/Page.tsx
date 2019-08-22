import React, { ReactNode } from "react";
import Head, { HeadProps } from "./Head";
import Header from "./Header";

export interface PageProps extends HeadProps {
  children: ReactNode;
}

const Page = (props: PageProps) => (
  <div>
    <Head {...props} />
    <Header />
    {props.children}
    <style global jsx>
      {`
        body {
          text-align: center;
          font-family: Segoe UI, Helvetica, Arial, sans-serif;
        }
      `}
    </style>
  </div>
);

export default Page;
