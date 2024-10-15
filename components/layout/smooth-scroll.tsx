"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis root options={{ lerp: 0.07, duration: 1.5 }}>
      {children}
    </ReactLenis>
  );
}
