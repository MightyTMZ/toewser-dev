"use client";

import { useState } from "react";

export default function CopyButton({
  text,
  label = "Copy",
  className = "",
}: {
  text: string;
  label?: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`shrink-0 border border-neutral-300 px-3 py-1.5 text-xs font-medium tracking-wide text-light-700 transition-colors hover:border-neutral-900 hover:text-neutral-900 ${className}`}
    >
      {copied ? "Copied" : label}
    </button>
  );
}
