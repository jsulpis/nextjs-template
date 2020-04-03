import App from "next/app";
import Router from "next/router";
import "../styles.scss";

import * as gtag from "lib/gtag";

Router.events.on("routeChangeComplete", url => gtag.pageview(url));

export default App;
