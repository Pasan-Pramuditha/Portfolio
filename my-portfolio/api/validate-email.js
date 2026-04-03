const ZEROBOUNCE_ENDPOINT = "https://api.zerobounce.net/v2/validate";

function validateEmailFormat(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed." });
  }

  const apiKey = process.env.ZEROBOUNCE_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: "Email validation service is not configured." });
  }

  const email = typeof req.body?.email === "string" ? req.body.email.trim() : "";

  if (!email) {
    return res.status(400).json({ error: "Email address is required." });
  }

  if (!validateEmailFormat(email)) {
    return res.status(400).json({ error: "Please enter a valid email address." });
  }

  try {
    const response = await fetch(
      `${ZEROBOUNCE_ENDPOINT}?api_key=${encodeURIComponent(apiKey)}&email=${encodeURIComponent(email)}`
    );

    if (!response.ok) {
      return res.status(502).json({ error: "Email validation provider is unavailable." });
    }

    const data = await response.json();

    if (data.status === "valid") {
      return res.status(200).json({ valid: true });
    }

    if (data.status === "disposable") {
      return res.status(200).json({ valid: false, error: "Disposable emails are not allowed." });
    }

    if (data.status === "spamtrap") {
      return res.status(200).json({ valid: false, error: "This email is blocked by our system." });
    }

    return res.status(200).json({ valid: false, error: "This email address is invalid." });
  } catch (error) {
    console.error("ZeroBounce validation failed:", error);
    return res.status(500).json({ error: "Unable to validate email right now." });
  }
}
