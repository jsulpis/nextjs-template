import React, { PropsWithChildren, HTMLProps } from "react";
import Page from "components/layout/Page";
import CodeBlock from "components/docs/CodeBlock";

const Docs = () => (
  <Page title={"Documentation"} description={"Documentation for the template."}>
    <div className="text-left text-gray-700 ">
      <h2 className="section-title mt-16">Documentation</h2>

      <DocSectionTitle>Installation</DocSectionTitle>
      <DocUl>
        <DocLi>
          <div className="inline-flex flex-col w-3/4">
            <p>Clone the repository:</p>
            <CodeBlock className="w-3/4 mt-1">
              git clone https://github.com/jsulpis/next-starter-project.git
            </CodeBlock>
          </div>
        </DocLi>
        <DocLi>Update the package.json metadata with yours.</DocLi>
      </DocUl>

      <DocSectionTitle>Configuration</DocSectionTitle>

      <DocSubSectionTitle>Tailwind CSS</DocSubSectionTitle>
      <DocUl>
        <DocLi>
          <DocLink href="https://tailwindcss.com">Official documentation</DocLink>
        </DocLi>
        <DocLi>
          You may want to change the theme in <CodeSpan>tailwind.config.js</CodeSpan> to
          use your custom color palette.
        </DocLi>
        <DocLi>
          See the{" "}
          <DocLink href="https://tailwindcss.com/docs/theme">documentation</DocLink> for
          more details.
        </DocLi>
      </DocUl>

      <DocSubSectionTitle>Purge CSS</DocSubSectionTitle>
      <DocUl>
        <DocLi>
          <DocLink href="https://purgecss.com/">Official documentation</DocLink>
        </DocLi>
        <DocLi>
          This plugin will delete all unused CSS in the final bundle and dramatically
          reduce its size, but it comes with a few constraints. For example you will lose
          the css classes that you build dynamically using string concatenation if you
          don't use some tricks.
        </DocLi>
        <DocLi>
          This{" "}
          <DocLink href="https://www.viget.com/articles/a-better-approach-for-using-purgecss-with-tailwind/">
            article
          </DocLink>{" "}
          provides some solutions to common issues when working with Purge CSS.
        </DocLi>
      </DocUl>
    </div>
  </Page>
);

const DocSectionTitle = (props: PropsWithChildren<{}>) => (
  <h3 className="font-semibold text-2xl mt-5">{props.children}</h3>
);

const DocSubSectionTitle = (props: PropsWithChildren<{}>) => (
  <h4 className="font-semibold text-lg mt-3">{props.children}</h4>
);

const DocUl = (props: PropsWithChildren<{}>) => (
  <ul className="paragraph text-base">{props.children}</ul>
);

const DocLi = (props: PropsWithChildren<{}>) => (
  <li className="list-disc list-inside">{props.children}</li>
);

const DocLink = (props: PropsWithChildren<HTMLProps<HTMLLinkElement>>) => (
  <a href={props.href} className="font-semibold text-gray-900" target="_blank">
    {props.children}
  </a>
);

const CodeSpan = (props: PropsWithChildren<{}>) => (
  <span className="font-mono text-sm text-gray-800">{props.children}</span>
);
export default Docs;
