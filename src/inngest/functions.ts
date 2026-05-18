import { openai, createAgent } from "@inngest/agent-kit";
import { inngest } from "./client";
import { Sandbox } from "@e2b/code-interpreter";
import { getSandbox } from "./utils";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    const sandboxId = await step.run("get-sandbox-id", async () => {
      const sandbox = await Sandbox.create("vibe-test2");
      return sandbox.sandboxId;
    });
    const coding_agent = createAgent({
      name: "coding_agent",
      system:
        "you are an expert nextjs developer. you write readable, maintanable code. you write simple next.js snippets.",
      model: openai({ model: "gpt-5" }),
    });

    const { output } = await coding_agent.run(
      `Code Snippet: ${event.data.value}`,
    );

    const sandboxUrl = await step.run("get-sandbox-url", async () => {
      const sandbox = await getSandbox(sandboxId);
      const host = sandbox.getHost(3000);
      return `https://${host}`;
    });

    return { output, sandboxUrl };
  },
);
