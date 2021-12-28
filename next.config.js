const withTM = require("next-transpile-modules")(["gsap"]);

module.exports = withTM({
  transpileModules: ["gsap"],
});

// module.exports = {
//   reactStrictMode: true,
// };
