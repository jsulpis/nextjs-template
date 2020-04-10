import React from "react";
import Page from "components/layout/Page";
import Icon from "components/base/Icon";
import LinkButton from "components/base/LinkButton";

const icons = [
  { name: "React.js", file: "react-icon.svg" },
  { name: "Typescript", file: "typescript-icon.svg" },
  { name: "Jest", file: "jest-icon.svg" },
  { name: "Prettier", file: "prettier-icon.svg" },
  { name: "Tailwind CSS", file: "tailwindcss-icon.svg" },
  { name: "PurgeCSS", file: "purgecss-icon.png" },
  { name: "Sass", file: "sass-icon.svg" },
  { name: "Font Awesome", file: "font-awesome-icon.svg" },
  { name: "SonarCloud", file: "sonarcloud-icon.jpg" },
  { name: "Travis CI", file: "travis-ci-icon.svg" },
  { name: "Google Analytics", file: "google-analytics-icon.svg" }
];

const Index = () => (
  <Page
    className="flex flex-col items-center justify-center mt-16 sm:pt-24 lg:pb-4 sm:my-auto"
    mainClassName="bg-gray-200"
  >
    <img
      id="next-logo"
      src="/static/icons/nextjs-icon.svg"
      className="h-32 md:h-48 relative"
      alt="next.js logo"
    />

    <h2 className="section-title mt-4 sm:text-3xl sm:mt-4">
      Full-featured template for JAMstack websites.
    </h2>
    <p className="paragraph mt-4">
      Everything you need to develop, test, deploy and monitor a fast and robust web
      application.
    </p>
    <div className="container flex flex-wrap sm:w-3/4 xl:w-1/2 justify-center mt-8">
      {icons.map(icon => (
        <Icon className="mx-2 my-2" icon={icon} key={icon.file} />
      ))}
    </div>
    <div className="text-white mt-10 text-sm flex flex-col sm:flex-row">
      <LinkButton color="primary" href="/docs" className="mx-2">
        Get Started
      </LinkButton>
      <LinkButton
        href="https://github.com/jsulpis/nextjs-template"
        className="mt-3 mx-2 sm:mt-0"
      >
        Star on GitHub
      </LinkButton>
    </div>
  </Page>
);

export default Index;
