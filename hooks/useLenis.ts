"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function useLenis() {
  useEffect(() => {
   const lenis = new Lenis({
  duration: 0.7,
  smoothWheel: true,
  wheelMultiplier: 1.15,
});
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
}