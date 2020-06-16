require("dotenv").config();
const webpack = require("webpack");
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
const withSass = require("@zeit/next-sass");
const withCss = require("@zeit/next-css");
const withFonts = require("next-fonts");
const withPurgeCss = require("next-purgecss");
const path = require("path");

const nextConfig = {
  env: {
    appTitle: "Next.js Template",
    appUrl: process.env.APP_URL
  },
  analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: "static",
      reportFilename: "../bundles/server.html"
    },
    browser: {
      analyzerMode: "static",
      reportFilename: "bundles/client.html"
    }
  },
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      docs: {
        page: "/docs"
      },
      contact: {
        page: "/contact"
      }
    };
  },
  purgeCssEnabled: ({ dev }) => !dev, // Disable purgecss during development
  purgeCss: {
    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
    whitelist: () => ["__next"],
    whitelistPatterns: () => [/svg.*/, /fa.*/] // Keep Fontawesome classes
  },
  webpack: config => {
    config.resolve.modules = [path.resolve("./node_modules"), path.resolve("src")];
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty"
    };

    return config;
  }
};

module.exports = withSass(
  withCss(withPurgeCss(withFonts(withBundleAnalyzer(nextConfig))))
);
