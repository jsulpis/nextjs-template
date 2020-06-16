import Head, { HeadProps } from "components/layout/Head";
import Header from "components/layout/Header";
import React, { PropsWithChildren, HTMLAttributes } from "react";
import Footer from "./Footer";

type PageProps = PropsWithChildren<HeadProps> &
  HTMLAttributes<HTMLDivElement> & {
    mainClassName?: string;
  };

const Page = (props: PageProps) => (
  <>
    <Head {...props} />
    <Header />
    <main className={"flex-grow flex items-center justify-center bg-gray-100"}>
      <div className={"container h-full mx-auto py-16 " + props.className}>
        {props.children}
      </div>
    </main>
    <Footer />
  </>
);

export default Page;
