import Vue from "vue";
import App from "./App.vue";

// const req = require.context("./svg", false, /\.svg$/);
// const requireAll = (requireContext) =>
//   requireContext.keys().map(requireContext);
// requireAll(req);

new Vue({
  el: "#app",
  render: (h) => h(App),
});
