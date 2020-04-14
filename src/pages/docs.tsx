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
              Clone the repository and install the dependencies:
            </p>
            <CodeBlock className="mt-1">
              git clone https://github.com/jsulpis/nextjs-template.git && cd
              nextjs-template && npm i
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

      <h4>Purge CSS</h4>
      <DocUl>
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

      <h4>SonarCloud</h4>
      <DocUl>
        <DocLi>Create a new project on SonarCloud and note the generated token.</DocLi>
        <DocLi>
          Update the project description in <FileName>sonar-project.properties</FileName>.
        </DocLi>
        <DocLi>
          See the Travis CI configuration below to trigger the analysis during the build.
        </DocLi>
      </DocUl>

      <h4>Travis CI</h4>
      <DocUl>
        <DocLi>
          Activate your repository in your Travis CI settings to trigger the builds on git
          push.
        </DocLi>
        <DocLi>
          In the repository settings, add an environment variable called{" "}
          <FileName>SONAR_TOKEN</FileName> and paste it the token you got when creating
          the project on SonarCloud.
        </DocLi>
        <DocLi>
          Change the sonarcloud organization in <FileName>.travis.yml</FileName>.
        </DocLi>
        <DocLi>
          You should now have your pull requests analyzed and get checks from Travis CI
          and SonarCloud.
        </DocLi>
      </DocUl>

      <h4>Google Analytics</h4>
      <DocUl>
        <DocLi>
          Register your website in your{" "}
          <DocLink href="https://analytics.google.com/analytics/web">
            Google Analytics dashboard
          </DocLink>{" "}
          and note its Tracking ID.
        </DocLi>
        <DocLi>
          Create an environment variable called GA_TRACKING_ID with your new id. See the
          instructions below to setup variables with Zeit Now.
        </DocLi>
      </DocUl>

      <h3>Deployment</h3>
      <p>
        The template is ready to be deployed on{" "}
        <DocLink href="https://zeit.co/docs">Zeit Now</DocLink> so the following
        instructions target this platform. Of course you can easily deploy it with any
        other cloud platform like{" "}
        <DocLink href="https://www.netlify.com/">Netlify</DocLink>.
      </p>

      <h4>Environment variables</h4>
      <p>
        You will need to register your environment variables and provide them to Zeit Now
        using the <FileName>now.json</FileName> file.
      </p>
      <DocUl>
        <DocLi>
          <div className="inline-flex flex-col w-10/12 lg:w-3/4">
            <p className="opacity-100">
              First register your variable as a secret using the CLI:
            </p>
            <CodeBlock className="m-2">
              now secret add variable-name variable-value
            </CodeBlock>
          </div>
        </DocLi>
        <DocLi>
          <div className="inline-flex flex-col w-10/12 lg:w-3/4">
            <p className="opacity-100">
              Then add your variable to the <FileName>now.json</FileName> file.
            </p>
            <div className="bg-white rounded p-2 m-2 border text-xs text-gray-900 font-mono whitespace-pre-wrap">
              {`{
  "build": {
    "env": {
      "MY_VARIABLE": "@variable-name"
    }
  }
}`}
            </div>
          </div>
        </DocLi>
        <DocLi>
          The configuration above will make your variables available at build time. If you
          want to use them during run time, remove the "build" key and use directly the
          "env" key. See the{" "}
          <DocLink href="https://zeit.co/docs/v2/serverless-functions/env-and-secrets/">
            documentation
          </DocLink>{" "}
          for more details.
        </DocLi>
      </DocUl>

      <h4>Deployment script</h4>
      <p>
        The source files of the template are gathered in a <FileName>src</FileName> folder
        for clarity. Since this is not the default file structure for next.js projects, we
        need to update the deployment script in Zeit Now.
      </p>
      <DocUl>
        <DocLi>
          <div className="inline-flex flex-col w-10/12 lg:w-3/4">
            <p className="opacity-100">
              In your Zeit Now dashboard, go to your project settings, and override the
              build command with:
            </p>
            <CodeBlock className="opacity-100 mt-1">npm run build:now</CodeBlock>
          </div>
        </DocLi>
      </DocUl>
    </div>
  </Page>
);

const DocUl = (props: PropsWithChildren<{}>) => <ul className="p">{props.children}</ul>;

const DocLi = (props: PropsWithChildren<{}>) => (
  <li className="list-disc list-inside">{props.children}</li>
);

const DocLink = (props: PropsWithChildren<HTMLProps<HTMLLinkElement>>) => (
  <a href={props.href} className="font-semibold hover:text-gray-900" target="_blank">
    {props.children}
  </a>
);

const FileName = (props: PropsWithChildren<{}>) => (
  <span className="font-mono text-sm">{props.children}</span>
);
export default Docs;
