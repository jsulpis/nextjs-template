<h1 align="center">Next.js Template</h1>
<h3 align="center">Full-featured template for JAMstack websites using next.js</h3>
<p align="center">
	<a href="https://travis-ci.org/jsulpis/nextjs-template">
		<img alt="Build Status" src="https://travis-ci.org/jsulpis/nextjs-template.svg?branch=master" />
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
</p>

<a align="center" href="https://nextjs-template.juliensulpis.vercel.app">
  <img class="repo-preview" src="https://raw.githubusercontent.com/jsulpis/nextjs-template/master/preview.png" alt="Screenshot image"/>
</a>

**Deploy your own copy of this project in just a few clicks on Vercel:**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/project?template=https://github.com/jsulpis/nextjs-template)

## About

I built this template with all the tools I found useful to develop my own personal projects, so it can be a bit biased. If you find something that you think is not relevant or could be improved, please open an issue or a pull request to fix it.

## Features

**React.js + TypeScript**

- Because I love strongly typed languages (I'm a bit of a java developer at heart)

**Linting**

- Don't bother with linting ever again. Let Prettier handle it for you. Pre-commit hook included to lint your staged files.

**Testing Setup**

- Unit tests with Jest
- Using the React Testing Library to make tests that mimic real user interactions

**UI**

- Leverage the power of Tailwind CSS to build beautiful interfaces. You will find a Tailwind config file that you can customize to build your own theme.
- You can also use conventional scss files.

**APIs**

- The demo project does not use it, but with next.js you can have your APIs in a dedicated folder in the same repo and deploy them in no time with Vercel.

**SEO**

- Populate each page header metadata with name, description, image, etc.

**Deployment**

- Example of CI with Travis-CI
- Ready to deploy on Vercel using git integration or the command line (see 'deployment' section below)
- Google global site tag (gtag.js) for sending data to Google Analytics

## Installation

Clone the repository and install the dependencies:

```shell
git clone https://github.com/jsulpis/nextjs-template.git && cd nextjs-template && npm i
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
npm start
```

Generate a fully static project with pre-rendered pages to put directly on a server or any static website hosting platform. Note that you lose the possibility to have server-side rendered pages. With Vercel you should not have to run this command.

```
yarn export
```

## Deployment

This template is ready to be deployed on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/project?template=https://github.com/jsulpis/nextjs-template)

**Important:** Because of the custom folder architecture, you have to change the default build command from `yarn build` to `yarn build:now`.

Then you can integrate Vercel with your GitHub account, which will allow it to deploy each branch and pull request to their own environment, and the master branch in production.

## Configuration

See the [documentation page](https://nextjs-template.juliensulpis.vercel.app/docs)

## License

Released under the [MIT](https://github.com/jsulpis/nextjs-template/blob/master/LICENSE) license.
