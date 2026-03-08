"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import quotes from "../data/quotes.json";

export default function CrossQuote() {
  const [quote, setQuote] = useState("");
  useEffect(() => {
    const daysSinceEpoch = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
    const index = Math.floor(daysSinceEpoch / 2) % quotes.length;
    setQuote(quotes[index]);
  }, []);
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-center gap-2 max-w-[200px]">
      <Image src="/cross.jpg" alt="Cross" width={80} height={80} className="rounded-lg opacity-90" />
      <p className="text-xs italic text-[#8a9bb5] text-center leading-snug">{quote}</p>
    </div>
  );
}
