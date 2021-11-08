import * as Sentry from "@sentry/nextjs";

async function handler(req, res) {
  res.status(200).json({ name: "Maisey Dog" });
}

export default Sentry.withSentry(handler);
