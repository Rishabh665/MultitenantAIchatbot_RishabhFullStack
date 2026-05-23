import { Message } from "@/lib/models/Message";

type ChatInput = {
  projectId: string;
  userMessage: string;
};

export async function processChat({
  projectId,
  userMessage,
}: ChatInput) {
  // Save user message
  await Message.create({
    projectId,
    sender: "user",
    text: userMessage,
  });

  // Fake AI reply
  const aiReply = `AI says: ${userMessage}`;

  // Save AI reply
  await Message.create({
    projectId,
    sender: "ai",
    text: aiReply,
  });

  return {
    reply: aiReply,
  };
}