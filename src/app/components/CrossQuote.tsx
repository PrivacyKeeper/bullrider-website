"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import quotes from "../data/quotes.json";

const getQuoteForToday = () => {
  const daysSinceEpoch = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
  const index = Math.floor(daysSinceEpoch / 2) % quotes.length;
  return quotes[index];
};

export default function CrossQuote() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setQuote(getQuoteForToday());
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-center max-w-[200px] text-center">
      <Image
        src="/cross.jpg"
        alt="Cross"
        width={64}
        height={64}
        className="w-16 h-16 object-contain mb-2"
      />
      <p className="text-white/80 text-xs leading-snug italic">&ldquo;{quote}&rdquo;</p>
    </div>
  );
}
