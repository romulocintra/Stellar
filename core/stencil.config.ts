import { Config } from '@stencil/core';
import { postcss } from "@stencil/postcss";
import designTokenFunction from "postcss-design-token-function";
import { colors } from "./src/global/colors";

export const config: Config = {
  namespace: 'stellar-core',
  preamble: '(C) Split Infinities https://splitinfinities.com - MIT License',
  globalStyle: "./src/global/stellar.css",
  copy: [
    { src: "global/fonts" },
    { src: "global/images" },
    { src: "global/video" },
    { src: "global/vector" },
    { src: "global/audio" },
    { src: "*.html" },
    { src: "../data" },
  ],
  outputTargets:[
    { type: 'dist' },
    { type: "stats", file: "./data/stats.json" },
    { type: "docs", dir: "./data" },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  plugins: [
    postcss({
      plugins: [
        designTokenFunction({
          name: "color",
          data: colors,
          base: 0,
        })
      ]
    })
  ]
};
