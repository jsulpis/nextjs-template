import Head, { HeadProps } from "components/layout/Head";
import Header from "components/layout/Header";
import React, { PropsWithChildren, HTMLAttributes } from "react";

const Page = (props: PropsWithChildren<HeadProps> & HTMLAttributes<HTMLDivElement>) => (
  <>
    <Head {...props} />
    <Header />
    <main className={"container mx-auto h-full py-16 " + props.className}>
      {props.children}
    </main>
  </>
);

export default Page;
