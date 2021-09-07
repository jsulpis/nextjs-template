<h1 align="center">Next.js Template</h1>
<h3 align="center">Full-featured template for JAMstack websites using next.js</h3>

<div align="center">
	<a href="https://github.com/jsulpis/nextjs-template/actions/workflows/build.yml">
		<img alt="Build Status" src="https://github.com/jsulpis/nextjs-template/actions/workflows/build.yml/badge.svg" />
	</a>
  <a href="https://sonarcloud.io/dashboard?id=nextjs-template">
		<img alt="Quality Gate Status" src="https://sonarcloud.io/api/project_badges/measure?project=nextjs-template&metric=alert_status" />
	</a>
  <a href="https://sonarcloud.io/dashboard?id=nextjs-template">
		<img alt="Coverage" src="https://sonarcloud.io/api/project_badges/measure?project=nextjs-template&metric=coverage" />
	</a>
  <a href="http://makeapullrequest.com">
		<img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" />
	</a>
  <a href="https://nextjs-template.juliensulpis.vercel.app">
    <img class="repo-preview" src="https://raw.githubusercontent.com/jsulpis/nextjs-template/main/preview.png" alt="Screenshot image"/>
  </a>
  <p>Picture generated with my <a href="https://website-screenshot.vercel.app/">Website Screenshot</a> app.</p>
</div>

**Deploy your own copy of this project in just a few clicks on Vercel:**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/project?template=https://github.com/jsulpis/nextjs-template)

## About

I built this template with all the tools I found useful to develop my own personal projects, so it can be a bit biased. If you find something that you think is not relevant or could be improved, please open an issue or a pull request to fix it.

## Features

**React.js with TypeScript**

- Because I love strongly typed languages

**Lint & format**

- ESLint
- Prettier
- Pre-commit hook included to lint your staged files.

**Testing Setup**

- Jest
- React Testing Library to make tests that mimic real user interactions

**UI**

- TailwindCSS 2
- CSS modules are also supported by default by next.js

**APIs**

- The demo project does not use it, but with next.js you can have your APIs in a dedicated folder in the same repo and deploy them in no time with Vercel.

**SEO**

- Populate each page header metadata with name, description, image, etc.

**Deployment**

- CI with GitHub Actions
- Ready to deploy on Vercel using git integration or the command line (see 'deployment' section below)

## Installation

Clone the repository and install the dependencies:

```shell
git clone https://github.com/jsulpis/nextjs-template.git && cd nextjs-template && yarn install
```

## Usage

### Development

Serve with hot reload at localhost:3000.

```
yarn dev
```

### Build

Build for production: next.js automatically renders static HTML pages when possible. Then if you deploy on Vercel you can have both statically rendered pages and server-side rendered pages (as lambdas functions).

```
yarn build
```

Launch a server for server-side rendering (after building the application):

```
yarn start
```

Generate a fully static project with pre-rendered pages to put directly on a server or any static website hosting platform. Note that you lose the possibility to have server-side rendered pages. With Vercel you should not have to run this command.

```
yarn export
```

## Deployment

This template is ready to be deployed on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/project?template=https://github.com/jsulpis/nextjs-template)

You can integrate Vercel with your GitHub account, which allows it to deploy each branch and pull request to their own environment, and the main branch in production.

## Configuration

See the [documentation page](https://nextjs-template.juliensulpis.vercel.app/docs)

## What next ?

If you don't find what you are looking for in this template, there is a good chance that one of the [many examples](https://github.com/vercel/next.js/tree/canary/examples) provided by Vercel will make you happy !

## License

Released under the [MIT](https://github.com/jsulpis/nextjs-template/blob/main/LICENSE) license.
