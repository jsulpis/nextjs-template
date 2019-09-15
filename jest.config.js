module.exports = {
  testRegex: "(\\.|/)(test|spec)\\.(jsx?|js?|tsx?|ts?)$",
  transform: { "^.+\\.tsx?$": "babel-jest" },
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  moduleDirectories: ["node_modules", "."],
  collectCoverageFrom: [
    "components/**",
    "pages/**",
    "!pages/_app.tsx",
    "!pages/_document.tsx"
  ],
  moduleNameMapper:{
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  }
};
