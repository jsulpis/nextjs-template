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
  { name: "Sass", file: "sass-icon.svg" },
  { name: "Font Awesome", file: "font-awesome-icon.svg" },
  { name: "Travis CI", file: "travis-ci-icon.svg" },
  { name: "Sonarqube", file: "sonarqube-icon.png" },
  { name: "Google Analytics", file: "google-analytics-icon.svg" }
];

function HomePage() {
  return (
    <Page>
      <main className="h-full flex items-center justify-center">
        <div className="flex flex-col items-center">
          <img
            id="next-logo"
            src="/static/icons/nextjs-icon.svg"
            className="h-32 md:h-48 relative"
            alt="next.js logo"
          />

          <h2 className="font-semibold text-xl mt-4 sm:text-3xl sm:mt-8 text-gray-700 ">
            Bootstrap you next project with this full-featured template.
          </h2>
          <p className="mt-4 text-sm sm:text-lg leading-relaxed text-gray-600">
            Everything you need to create a fast and robust web application.
          </p>
          <div className="container flex flex-wrap sm:w-3/4 justify-center mt-8">
            {icons.map(icon => (
              <Icon className="mx-2 my-2" icon={icon} key={icon.file} />
            ))}
          </div>
          <div className="text-white mt-10 text-sm">
            <LinkButton color="blue" href="/docs">
              Get Started
            </LinkButton>
            <LinkButton href="https://github.com/jsulpis/next-starter-project">
              Star on GitHub
            </LinkButton>
          </div>
        </div>
      </main>
    </Page>
  );
}

export default HomePage;
