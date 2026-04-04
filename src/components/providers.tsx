"use client";

import { ThemeProvider } from "next-themes";

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { ReactLenis } = require("lenis/react");

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true, syncTouch: false }}>
        {children}
      </ReactLenis>
    </ThemeProvider>
  );
}

export default Providers;
