import Head, { HeadProps } from "components/layout/Head";
import Header from "components/layout/Header";
import React, { PropsWithChildren, HTMLAttributes } from "react";
import Footer from "./Footer";

type PageProps = PropsWithChildren<HeadProps> &
  HTMLAttributes<HTMLDivElement> & {
    backgroundColor?: string;
  };

const Page = (props: PageProps) => (
  <>
    <Head {...props} />
    <Header />
    <main
      className={
        "flex-grow flex items-center justify-center bg-" +
        (props.backgroundColor || "gray-100")
      }
    >
      <div className={"container h-full mx-auto py-16 pb-0 " + props.className}>
        {props.children}
      </div>
    </main>
    <Footer className={"bg-" + (props.backgroundColor || "gray-100")} />
  </>
);

export default Page;
