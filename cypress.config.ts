import { defineConfig } from 'cypress';
import codeCoverageTask from '@cypress/code-coverage/task';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173/',
    setupNodeEvents(on, config) {
      codeCoverageTask(on, config);
      return config;
    },
  },
  video: false,
  env: {
    codeCoverageTasksRegistered: true,
    codeCoverage: {
      exclude: 'cypress/**/*.*',
    },
  },
  screenshotOnRunFailure: false,
});
