import type { ConfigEnv, UserConfig } from "vite";

import react from "@vitejs/plugin-react";
import { configSvgPlugin } from "./build/vite/plugins/svg";
import { configMockPlugin } from "./build/vite/plugins/mock";
import { createViteResolve } from "./build/vite/resolve";
import { createViteBuild } from "./build/vite/build";
import { createViteServer } from "./build/vite/server";

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
