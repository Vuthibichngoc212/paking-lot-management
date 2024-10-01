import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import path from "path";
import svgr from "vite-plugin-svgr";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react(), svgr(), viteTsconfigPaths()],
    define: {
      "process.env": process.env,
    },
    resolve: {
      alias: [
        {
          find: "src",
          replacement: path.resolve(__dirname, "./src"),
        },
      ],
    },
    server: {
      host: "localhost",
      open: true,
      port: parseInt(env.VITE_REACT_PORT, 10),
      proxy: {
        "/api": {
          target: env.VITE_REACT_APP_URL,
          secure: false,
          changeOrigin: true,
        },
      },
    },
    esbuild: {
      drop: mode !== "development" ? ["console", "debugger"] : [],
    },
    build: {
      sourcemap: true,  
    },
  };
});
