import Stripe from "stripe";

const secretKey = process.env.STRIPE_SECRET_KEY;

if (!secretKey) {
  console.warn(
    "⚠️ STRIPE_SECRET_KEY is not set: the server starts, but Stripe payments will fail until it is configured"
  );
}

// Fallback placeholder keeps the SDK from throwing at import time
const stripe = new Stripe(secretKey || "sk_test_not_configured", {
  apiVersion: "2025-03-31.basil",
});

export default stripe;
