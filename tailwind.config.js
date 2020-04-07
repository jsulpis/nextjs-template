const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      transitionProperty: {
        height: "height"
      },
      colors: {
        primary: colors.blue
      }
    }
  },
  corePlugins: {
    container: false // custom container class defined in styles/_compounds.scss
  }
};
