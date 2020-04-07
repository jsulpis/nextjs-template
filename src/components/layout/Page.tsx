import Head, { HeadProps } from "components/layout/Head";
import Header from "components/layout/Header";
import React, { PropsWithChildren, HTMLAttributes } from "react";
import Footer from "./Footer";

const Page = (props: PropsWithChildren<HeadProps> & HTMLAttributes<HTMLDivElement>) => (
  <>
    <Head {...props} />
    <Header />
    <main className={"container flex-grow mx-auto py-16 pb-0 " + props.className}>
      {props.children}
    </main>
    <Footer />
  </>
);

export default Page;
