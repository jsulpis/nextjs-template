import App from "next/app";
import Router from "next/router";
import "../styles/styles.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";

import * as gtag from "lib/gtag";

Router.events.on("routeChangeComplete", url => gtag.pageview(url));

export default App;
