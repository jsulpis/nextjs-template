import React, { PropsWithChildren, HTMLProps } from "react";
import Page from "components/layout/Page";
import CodeBlock from "components/docs/CodeBlock";

const Docs = () => (
  <Page
    title={"Documentation"}
    description={"Documentation for the template."}
    className="mb-4"
  >
    <div className="text-left">
      <h2 className="mt-16">Documentation</h2>
      <h3>Installation</h3>
      <DocUl>
        <DocLi>
          <div className="inline-flex flex-col w-10/12 lg:w-3/4">
            <p className="opacity-100">
              Clone the repository and install the dependencies <br />
              (you may want to{" "}
              <DocLink href="https://github.com/jsulpis/nextjs-template/fork">
                fork
              </DocLink>{" "}
              the project before, to have your own copy):
            </p>
            <CodeBlock className="mt-1">
              git clone https://github.com/jsulpis/nextjs-template.git && cd
              nextjs-template && yarn install
            </CodeBlock>
          </div>
        </DocLi>
        <DocLi>Update the package.json metadata with yours.</DocLi>
      </DocUl>

      <h3>Configuration</h3>
      <h4>Tailwind CSS</h4>
      <DocUl>
        <DocLi>
          You may want to change the theme in <FileName>tailwind.config.js</FileName> to
          use your own color palette.
        </DocLi>
        <DocLi>
          See the{" "}
          <DocLink href="https://tailwindcss.com/docs/theme">documentation</DocLink> for
          more details.
        </DocLi>
      </DocUl>

      <h4>SonarCloud</h4>
      <DocUl>
        <DocLi>
          Create a new project on{" "}
          <DocLink href="https://sonarcloud.io">SonarCloud</DocLink> and note the
          generated token.
        </DocLi>
        <DocLi>
          Update the project description in <FileName>sonar-project.properties</FileName>.
        </DocLi>
        <DocLi>
          The Sonar Scanner is set up to run in the GitHub Actions workflow. You just need
          to add a <FileName>SONAR_TOKEN</FileName> secret in your GitHub repository (
          <FileName>Settings&nbsp;&gt;&nbsp;Secrets</FileName>) with the token generated
          in SonarCloud.
        </DocLi>
      </DocUl>

      <h3>Deployment</h3>
      <p>
        This template is ready to be deployed on{" "}
        <DocLink href="https://vercel.com/docs">Vercel</DocLink> : just connect it to your
        GitHub repository and let it deploy it. The deployement should also be fairly
        straightforward with any other cloud platform like{" "}
        <DocLink href="https://www.netlify.com/">Netlify</DocLink>.
      </p>

      <h4>Environment variables</h4>
      <p>
        This project uses the <FileName>NEXT_PUBLIC_ROOT_URL</FileName> environment
        variable in several meta tags. This variable refers to the deploy url of your
        application. A value is given in the <FileName>.env.production</FileName> file,
        which you may want to update with your url. You can also set this variable in the
        settings of your project on Vercel.
      </p>
    </div>
  </Page>
);

const DocUl = (props: PropsWithChildren<{}>) => <ul className="p">{props.children}</ul>;

const DocLi = (props: PropsWithChildren<{}>) => (
  <li className="list-disc list-inside">{props.children}</li>
);

const DocLink = (props: PropsWithChildren<HTMLProps<HTMLLinkElement>>) => (
  <a
    href={props.href}
    className="font-semibold hover:text-gray-900"
    target="_blank"
    rel="noreferrer"
  >
    {props.children}
  </a>
);

const FileName = (props: PropsWithChildren<{}>) => (
  <span className="font-mono text-sm">{props.children}</span>
);

export default Docs;
