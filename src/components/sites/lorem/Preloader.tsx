"use client";

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

export function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className="bl-preloader fixed inset-0 z-[9999] flex items-center justify-center bg-[#0d0d0d] transition-opacity duration-500 ease-out"
      aria-label="Loading"
    >
      <div className="bl-preloader__spinner">
        <Loader2 className="bl-preloader__icon" size={32} strokeWidth={1.5} aria-hidden />
      </div>
    </div>
  );
}