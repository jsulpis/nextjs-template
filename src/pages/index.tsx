import Page from "components/Page";
import getCurrentDateTime from "infrastructure/getCurrentDateTime";
import apiGet from "lib/apiGet";
import React from "react";

interface HomePageProps {
  date: string;
}

const Card = ({ href, title, details }) => {
  return (
    <>
      <a className="card" href={href}>
        <h3>{title} &rarr;</h3>
        <p>{details}</p>
      </a>
      <style jsx>{`
        .card {
          padding: 18px 18px 24px;
          width: 220px;
          text-align: left;
          text-decoration: none;
          color: #434343;
          border: 1px solid #9b9b9b;
        }
        .card:hover {
          border-color: #067df7;
        }
        .card h3 {
          margin: 0;
          color: #067df7;
          font-size: 18px;
        }
        .card p {
          margin: 0;
          padding: 12px 0 0;
          font-size: 13px;
          color: #333;
        }
      `}</style>
    </>
  );
};

class HomePage extends React.Component<HomePageProps, any> {
  public static async getInitialProps() {
    // If client, call the API. If server-side rendered, call the function directly.
    return process.browser
      ? await apiGet<HomePageProps>("/date")
      : { date: getCurrentDateTime() };
  }

  public render() {
    const date = this.props.date;
    return (
      <Page>
        <div className="hero">
          <h1 className="title">Welcome to Next!</h1>
          <p className="row date">
            The date is:&nbsp;
            {date ? <b>{date}</b> : <span className="loading" />}
          </p>
        </div>

        <div className="row">
          <Card
            title="Getting Started"
            details="Learn more about Next.js on GitHub and in their examples."
            href="https://github.com/zeit/next.js#setup"
          />
          <Card
            title="Examples"
            details="Find other example boilerplates on the Next.js GitHub"
            href="https://github.com/zeit/next.js/tree/master/examples"
          />
          <Card
            title="Create Next App"
            details="Was this tool helpful? Let us know how we can improve it!"
            href="https://github.com/zeit/next.js"
          />
        </div>

        <style jsx>{`
          .hero {
            width: 100%;
            color: #333;
          }
          .title {
            margin: 0;
            width: 100%;
            padding-top: 80px;
            line-height: 1.15;
            font-size: 48px;
          }
          .title,
          .description {
            text-align: center;
          }
          .row {
            max-width: 880px;
            margin: 80px auto 40px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
          }
          .date {
            height: 24px;
            max-width: calc(100% - 32px);
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 16px;
          }
          .date p {
            text-align: center;
          }
          .date span {
            width: 176px;
            text-align: center;
          }
          @keyframes Loading {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          .date .loading {
            max-width: 100%;
            height: 24px;
            border-radius: 4px;
            display: inline-block;
            background: linear-gradient(270deg, #d1d1d1, #eaeaea);
            background-size: 200% 200%;
            animation: Loading 2s ease infinite;
          }
        `}</style>
      </Page>
    );
  }
}

export default HomePage;
