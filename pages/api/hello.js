import * as Sentry from "@sentry/nextjs";

consloe.log({ NODE_ENV: process.env.NODE_ENV });

async function handler(req, res) {
  res.status(200).json({ name: "Maisey Dog" });
}

export default Sentry.withSentry(handler);
