import NextHead from "next/head";
import React from "react";

const defaultDescription = "Full-featured template for next.js applications.";
const defaultOGURL = process.env.appUrl;
const defaultOGImage = defaultOGURL + "/static/og-image.png";
const defaultTitle = process.env.appTitle;

export interface HeadProps {
  description?: string;
  ogImage?: string;
  title?: string;
  url?: string;
}

const Head = (props: HeadProps) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title || defaultTitle}</title>
    <meta name="description" content={props.description || defaultDescription} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/static/favicon.ico" />
    <meta property="og:url" content={props.url || defaultOGURL} />
    <meta property="og:title" content={props.title || defaultTitle} />
    <meta property="og:description" content={props.description || defaultDescription} />
    <meta name="twitter:site" content={props.url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
  </NextHead>
);

export default Head;
