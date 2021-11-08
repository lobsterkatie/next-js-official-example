import * as Sentry from "@sentry/nextjs";

process.env.NODE_ENV = "dev";

async function handler(req, res) {
  res.status(200).json({ name: "Maisey Dog" });
}

export default Sentry.withSentry(handler);
