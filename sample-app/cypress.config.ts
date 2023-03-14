import { defineConfig } from "cypress";
import getCompareSnapshotsPlugin from "../dist/plugin";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // @ts-ignore
      getCompareSnapshotsPlugin(on, config);
    },
    specPattern: ["cypress/integration/*.spec.ts"],
    supportFile: "cypress/support/index.ts",
  },
  chromeWebSecurity: false,

  screenshotsFolder: "./cypress/snapshots/actual",
  trashAssetsBeforeRuns: true,
  video: false,
});
