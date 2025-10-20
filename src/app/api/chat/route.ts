import { createOpenAI } from "@ai-sdk/openai";
import {
  convertToModelMessages,
  stepCountIs,
  streamText,
  type UIMessage,
} from "ai";

export const maxDuration = 30;

// Construct OpenAI from Vercel AI SDK using Bastio Security Gateway.
const openai = createOpenAI({
  // Contruct baseURL to Bastio proxy guard endpoint.
  baseURL: `${process.env.BASTIO_PROXY_URL}/guard/${process.env.BASTIO_PROXY_ID}/v1`,
  // Bastio API KEY with access scoped for proxy endpoint used in baseURL
  apiKey: process.env.BASTIO_API_KEY,
  // Custom headers for demo purpose.
  headers: {
    "X-Bastio-Demo": "true", // Whitelisted in Allow/Block list rules to avoid user quaranteen during tests.
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36", // User-agent to simulate a real user request (Hint: You can also test as a bot).
  },
});

// Regular AI SDK Request, nothing special here.
export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: openai("gpt-3.5-turbo"),
    messages: convertToModelMessages(messages),
    stopWhen: stepCountIs(5),
  });

  return result.toUIMessageStreamResponse();
}
