const webpack = require("webpack");
const withBundleAnalyzer = require("@next/bundle-analyzer");
const withFonts = require("next-fonts");
const path = require("path");

const nextConfig = {
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

module.exports = withFonts(withBundleAnalyzer(nextConfig));
