"use client";

import { useState } from "react";

export function useChat() {
  const [message, setMessage] = useState("");

  const [reply, setReply] = useState("");

  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!message.trim()) return;

    try {
      setLoading(true);

      const response = await fetch("/api/chat", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          message,
        }),
      });

      const data = await response.json();

      setReply(data.data.reply);

      setMessage("");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return {
    message,
    setMessage,
    reply,
    loading,
    sendMessage,
  };
}