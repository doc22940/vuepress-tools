// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/scss/element-variables.scss";`
      }
    }
  }
};
