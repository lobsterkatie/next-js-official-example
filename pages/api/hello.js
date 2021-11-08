import * as Sentry from "@sentry/nextjs";

Object.assign(process.env, { NODE_ENV: "development" });

async function handler(req, res) {
  res.status(200).json({ name: "Maisey Dog" });
}

export default Sentry.withSentry(handler);
