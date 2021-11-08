import { withSentry } from "@sentry/nextjs";

function work() {
  console.log("inside of work function");
  throw new Error("API Test 3");
}

async function handler(req, res) {
  work();

  res.status(200).json({ name: "John Doe" });
}

// export default withSentry(handler);
export default withSentry(handler);
