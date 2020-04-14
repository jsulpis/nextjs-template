const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      transitionProperty: {
        height: "height"
      },
      colors: {
        primary: colors.blue
      },
      opacity: {
        "90": ".9"
      }
    }
  },
  corePlugins: {
    container: false // custom container class defined in styles/_compounds.scss
  }
};
