const webpack = require("webpack");
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
const withSass = require("@zeit/next-sass");
const path = require("path");

const variables = {
  development: {
    ROOT_URL: "http://localhost:3000"
  },
  production: {
    ROOT_URL: process.env.NOW_URL
  }
};

const nextConfig = {
  env: variables[process.env.NODE_ENV || "development"],
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
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]-[hash:base64:8]"
  },
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      about: { page: "/about" },
      contact: { page: "/contact" }
    };
  },
  webpack: config => {
    config.resolve.modules = [
      path.resolve("./node_modules"),
      path.resolve(".")
    ];
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty"
    };
    return config;
  }
};

module.exports = withSass(withBundleAnalyzer(nextConfig));
