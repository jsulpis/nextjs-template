import Page from "components/Page";
import fetchDate from "lib/fetchDate";
import React from "react";

interface HomePageState {
  date: string;
}

class HomePage extends React.Component<any, HomePageState> {
  constructor(props) {
    super(props);
    this.state = { date: null };
  }

  public async componentDidMount() {
    const date = await fetchDate();
    this.setState({ date });
  }

  public render() {
    const date = this.state.date;
    return (
      <Page title={"Home"} description={"This is the home page"}>
        <div className="hero">
          <h1 className="title">Welcome to Next!</h1>
          <p className="row date">
            The date is:&nbsp;
            {date ? <b>{date}</b> : <span className="loading" />}
          </p>
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
          max-width: calc(100% - 32px)
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
          0%{background-position:0% 50%}
          50%{background-position:100% 50%}
          100%{background-position:0% 50%}
        }
        .date .loading {
          max-width: 100%;
          height: 24px;
          border-radius: 4px;
          display: inline-block;
          background: linear-gradient(270deg, #D1D1D1, #EAEAEA);
          background-size: 200% 200%;
          animation: Loading 2s ease infinite;
        }
      `}</style>
      </Page>
    );
  }
}

export default HomePage;
