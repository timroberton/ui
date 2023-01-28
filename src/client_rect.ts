"use client";

import { useCallback, useEffect, useState } from "react";

export function useClientRect() {
  const [rect, setRect] = useState<DOMRect | null>(null);
  const [div, setDiv] = useState<HTMLDivElement | null>(null);

  const ref = useCallback((div: HTMLDivElement) => {
    if (!div) {
      return;
    }
    setRect(div.getBoundingClientRect());
    setDiv(div);
  }, []);

  useEffect(() => {
    function resize() {
      if (!div) {
        return;
      }
      setRect(div.getBoundingClientRect());
    }
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [div]);

  return { rect, ref };
}
