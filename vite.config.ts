import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        ejercicio1: resolve(__dirname, "src/ejercicio1/index.html"),
        ejercicio2: resolve(__dirname, "src/ejercicio2/index.html"),
        ejercicio3: resolve(__dirname, "src/ejercicio3/index.html"),
        ejercicio4: resolve(__dirname, "src/ejercicio4/index.html"),
      },
    },
  },
});
