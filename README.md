<h1 align="center">Next Starter Project</h1>
<h3 align="center">Quickly start a new project with Next.js using this ready-to-deploy template</h3>
<p align="center">
	<a href="https://travis-ci.org/jsulpis/next-starter-project">
		<img alt="Build Status" src="https://travis-ci.org/jsulpis/next-starter-project.svg?branch=master" />
	</a>
  <a href="https://sonarcloud.io/dashboard?id=next-starter-project">
		<img alt="Quality Gate Status" src="https://sonarcloud.io/api/project_badges/measure?project=next-starter-project&metric=alert_status" />
	</a>
  <a href="https://sonarcloud.io/dashboard?id=next-starter-project">
		<img alt="Coverage" src="https://sonarcloud.io/api/project_badges/measure?project=next-starter-project&metric=coverage" />
	</a>
    <a href="https://deploy.now.sh/?repo=https://github.com/jsulpis/next-starter-project">
   		<img src="https://deploy.now.sh/static/button.svg" />
	</a>
</p>

<a align="center" href="https://next-starter-project.now.sh">
  <img class="repo-preview" src="https://raw.githubusercontent.com/jsulpis/next-starter-project/master/preview.png" alt="Screenshot image"/>
</a>

## Features

This template is a mix of several examples from the [next.js GitHub repository](https://github.com/zeit/next.js/tree/canary/examples). I chose some features that are relevant to me but you can include other examples or remove features to meet your specifid needs. Here are the included features:

**TypeScript**

-  Leverage the power of Typescript in all your source code

**Linting**

- TSlint
- Prettier

**Testing Setup**

- Unit tests with Jest
- Using the React Testing Library to make tests that mimic real user interactions

**APIs**

- In the same repo: you can easily share client and server code like your models
- Run together with the client application with next.js: no need to run multiple projects to have your application working locally

**SEO**

- Populate each page header metadata with name, description, image, etc.

**Deployment**

- Example of CI with Travis-CI
- Deploy this application to now.sh using one single command (see 'deployment' section below)
- Google global site tag (gtag.js) for sending data to Google Analytics



## Installation

### Install

Download the zip or clone this project:

```shell
git clone https://github.com/jsulpis/next-starter-project.git
cd next-starter-project
```

then install all the dependencies:
```shell
npm install
```



## Usage

### Development

Serve with hot reload at localhost:3000.

```shell
npm run dev
```

### Build

Build for production and launch server. Your application is then served with server-side rendering (SSR).
```shell
npm run build
npm start
```

Or generate a static project with pre-rendered pages to put directly on your server (or any static website hosting platform, like GitHub Pages). This is better for SEO as the Time To First Byte is lower than with SSR.
```shell
npm run export
```

**Warning**: the code expects the API URL to be the same as the deployment URL, which is the case when the application is deployed with now.sh. Therefore, if you run the statically generated application, you will likely have 404 errors when calling the API since it will not be running. You can of course use remote APIs instead.

### Deployment

This template is ready to be deployed on now.sh using their super cool single command:

```shell
now
```

You might want first to create an account on zeit.co and, install the command and login, as explained in the [doc](https://zeit.co/docs).

This command will build the application, upload the build and deploy it on a staging environment whith a custom url, and deploy the API functions as AWS lambdas. I just love it.

Or you can also integrate now.sh with your GitHub account, which will allow it to deploy each branch and pull request to their own environment, and the master branch in production.



## Contributing

Contributions are welcome ! If you improve this template, feel free to share it.

1. Fork the project (<https://github.com/jsulpis/next-starter-project/fork>)
2. Clone it on your machine (`git clone https://github.com/yourName/next-starter-project.git`)
3. Create your feature branch (`git checkout -b feature/awesomeFeature`)
4. Commit your changes (`git commit -am 'Add my awesome feature'`)
5. Push your branch (`git push origin feature/awesomeFeature`)
6. Open a new Pull Request



## License

Released under the [MIT](https://github.com/jsulpis/next-starter-project/blob/master/LICENSE) license.

