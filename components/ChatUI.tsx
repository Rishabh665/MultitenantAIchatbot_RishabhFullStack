"use client";

import { useChat } from "@/hooks/useChat";

export default function ChatUI() {
  const { message, setMessage, reply, loading, sendMessage } = useChat();

  return (
    <div className="max-w-xl mx-auto mt-10 space-y-4">
      <h1 className="text-3xl font-bold">Multi-Tenant AI Chat</h1>

      <input
        type="text"
        placeholder="Ask something..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full border p-3 rounded"
      />

      <button
        onClick={sendMessage}
        disabled={loading}
        className="bg-black text-white px-4 py-2 rounded"
      >
        {loading ? "Thinking..." : "Send"}
      </button>

      {reply && (
        <div className="border rounded p-4">
          <p className="font-semibold">AI Reply:</p>

          <p>{reply}</p>
        </div>
      )}
    </div>
  );
}
