// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://49d232446b3baa80be52d25dec3de4a0@o4511534899396608.ingest.us.sentry.io/4511534918729728",

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1,

  streamGenAiSpans: true,
  dataCollection: {
    // Control data collection of LLMs and tools.
    // For more info visit: https://docs.sentry.io/platforms/javascript/data-management/data-collected/
    genAI: { inputs: false, outputs: false },
  },
  integrations: [
    // send console.log, console.warn, and console.error calls as logs to Sentry
    Sentry.consoleLoggingIntegration({ levels: ["log", "warn", "error"] }),
  ],

  // Enable logs to be sent to Sentry
  enableLogs: true,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});

