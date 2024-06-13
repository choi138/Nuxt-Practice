import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  srcDir: "src/",

  components: {
    dirs: [
      {
        path: "src/components",
        pathPrefix: false,
      },
    ],
  },

  plugins: ["@/plugins/vuetify/index.ts"],

  typescript: {
    tsConfig: {
      compilerOptions: {
        paths: {
          "@/*": ["src/*"],
        },
      },
    },
  },

  build: {
    transpile: ["vuetify"],
  },

  sourcemap: {
    server: false,
    client: false,
  },

  vite: {
    optimizeDeps: {
      exclude: ["vuetify"],
      entries: ["./**/*.vue"],
    },
    plugins: [
      vuetify({
        styles: {
          configFile: "./assets/styles/variables/_vuetify.scss",
        },
      }),
      null,
    ],
  },
});
