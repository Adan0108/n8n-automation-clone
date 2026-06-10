import { Polar } from "@polar-sh/sdk";

export const polarClient = new Polar({
  accessToken: process.env.POLAR_ACCESS_TOKEN, // The access token for your app
  server: process.env.NODE_ENV !== "production" ? "sandbox" : "production", //TODO : CHANGE THIS IN PRODUCTION
})