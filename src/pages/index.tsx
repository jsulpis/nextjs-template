import Page from "components/layout/Page";
import Icon from "components/base/Icon";
import LinkButton from "components/base/LinkButton";
import Image from "next/image";

const icons = [
  { name: "React", file: "react-icon.svg" },
  { name: "Next", file: "nextjs-icon.svg" },
  { name: "Typescript", file: "typescript-icon.svg" },
  { name: "Jest", file: "jest-icon.svg" },
  { name: "Testing Library", file: "testing-lib-icon.png" },
  { name: "ESLint", file: "eslint-icon.svg" },
  { name: "Prettier", file: "prettier-icon.svg" },
  { name: "Tailwind CSS", file: "tailwindcss-icon.svg" },
  { name: "Sass", file: "sass-icon.svg" },
  { name: "PostCSS", file: "postcss-icon.svg" },
  { name: "Font Awesome", file: "font-awesome-icon.svg" },
  { name: "SonarCloud", file: "sonarcloud-icon.jpg" },
  { name: "GitHub Actions", file: "github-icon.svg" }
];

const Index = () => (
  <Page className="flex flex-col items-center justify-center mt-16 sm:pt-24 lg:pb-4 sm:my-auto">
    <div className="relative w-full h-32 md:h-48">
      <Image src="/static/icons/nextjs-logo.svg" alt="next.js logo" layout="fill" />
    </div>

    <h2 className="mt-4 text-xl font-semibold sm:text-3xl">
      Full-featured template for JAMstack websites.
    </h2>
    <p className="mt-4 text-sm sm:text-lg">
      Everything you need to develop, test, deploy and monitor a fast and robust web
      application.
    </p>
    <div className="container flex flex-wrap justify-center mt-8 sm:w-3/4 xl:w-2/3">
      {icons.map(icon => (
        <Icon className="mx-2 my-2" icon={icon} key={icon.file} />
      ))}
    </div>
    <div className="flex flex-col mt-10 text-sm text-white sm:flex-row">
      <LinkButton color="primary" href="/docs" className="mx-2">
        Get Started
      </LinkButton>
      <LinkButton
        href="https://github.com/jsulpis/nextjs-template"
        className="mx-2 mt-3 sm:mt-0"
      >
        Star on GitHub
      </LinkButton>
    </div>
  </Page>
);

export default Index;
