import { createViteServer } from "./server";
import { createViteBuild } from "./build";
import { createViteResolve } from "./resolve";
import plugins from "./plugins";

export default {
  createViteServer,
  createViteBuild,
  createViteResolve,
  plugins,
};
