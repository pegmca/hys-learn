import type { ConfigEnv, UserConfig } from "vite";

import react from "@vitejs/plugin-react";
import { configSvgPlugin } from "./build/plugins/svg";
import { configMockPlugin } from "./build/plugins/mock";
import { createViteResolve } from "./build/resolve";
import { createViteBuild } from "./build/build";
import { createViteServer } from "./build/server";

// https://vite.dev/config/
export default (env: ConfigEnv): UserConfig => {
  return {
    plugins: [
      react({
        jsxImportSource: "@emotion/react",
        babel: {
          plugins: ["@emotion/babel-plugin"],
        },
      }),
      configSvgPlugin(),
      // configMockPlugin(),
    ],
    resolve: createViteResolve(__dirname),
    build: createViteBuild(),
    server: createViteServer(),
  };
};
