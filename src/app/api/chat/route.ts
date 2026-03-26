import OpenAI from "openai";

export const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY, // ❗ rename this (not DEEPSEEK_API_KEY)
  defaultHeaders: {
    "HTTP-Referer": "http://localhost:3000", // required by OpenRouter
    "X-Title": "CRM App",
  },
});

export async function POST(req:any) {
  try {
    const { messages } = await req.json();

    const response = await openai.chat.completions.create({
      model: "openai/gpt-oss-120b:free", // ✅ stable
      messages: [
        {
          role: "system",
          content: `
You are a CRM AI assistant.

Your job:
- Help with customer search
- Extract filters (City, Location, Price, etc.)
- Answer user queries conversationally
- Return JSON ONLY when user is asking for structured filtering

Otherwise respond normally like a chatbot.
          `,
        },
        ...messages,
      ],
    });

    const reply = response.choices?.[0]?.message;

    return Response.json({
      message: reply,
    });
  } catch (err:any) {
    console.error(err);
    return Response.json(
      { error: err.message },
      { status: 500 }
    );
  }
}