import Head, { HeadProps } from "components/Head";
import Header from "components/Header";
import React, { ReactNode } from "react";

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
