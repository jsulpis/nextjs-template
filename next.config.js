require("dotenv").config();
const webpack = require("webpack");
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
const withSass = require("@zeit/next-sass");
const withFonts = require("next-fonts");
const path = require("path");

const nextConfig = {
  env: {
    APP_TITLE: "Next Starter Project"
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
      about: {
        page: "/about"
      },
      contact: {
        page: "/contact"
      }
    };
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

module.exports = withSass(withFonts(withBundleAnalyzer(nextConfig)));
