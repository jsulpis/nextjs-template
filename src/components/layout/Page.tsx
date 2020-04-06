import Head, { HeadProps } from "components/layout/Head";
import Header from "components/layout/Header";
import React, { ReactNode } from "react";

export interface PageProps extends HeadProps {
  children: ReactNode;
}

const Page = (props: PageProps) => (
  <div className="h-full">
    <Head {...props} />
    <Header />
    <div className="container h-full pt-16 mx-auto px-3">{props.children}</div>
  </div>
);

export default Page;
