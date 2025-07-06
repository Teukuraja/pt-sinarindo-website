"use client";

import { ReactNode, useEffect } from "react";
// @ts-expect-error AOS has no official TypeScript types
import AOS from "aos";
import "aos/dist/aos.css";

/**
 * ClientWrapper initializes AOS (Animate On Scroll)
 * so that all children can use scroll-triggered animations.
 */
export default function ClientWrapper({ children }: { children: ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
      once: true,
    });
  }, []);

  return <>{children}</>;
}
