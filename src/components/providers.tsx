"use client";

import { ThemeProvider } from "next-themes";

interface ProvidersProps {
  children: React.ReactNode;
  /** Enable smooth scrolling via Lenis (set to true if Framer project uses it) */
  smoothScroll?: boolean;
  /** Default theme: "light" | "dark" | "system" */
  defaultTheme?: string;
  /** Enable system theme detection */
  enableSystem?: boolean;
}

/**
 * Combined providers wrapper for the cloned application.
 *
 * Wraps children with:
 * - ThemeProvider (next-themes) for dark/light mode
 * - ReactLenis (lenis) for smooth scrolling (when enabled)
 *
 * Usage in layout.tsx:
 * ```tsx
 * import { Providers } from "@/components/providers";
 *
 * export default function RootLayout({ children }) {
 *   return (
 *     <html lang="en" suppressHydrationWarning>
 *       <body>
 *         <Providers smoothScroll defaultTheme="light">
 *           {children}
 *         </Providers>
 *       </body>
 *     </html>
 *   );
 * }
 * ```
 */
export function Providers({
  children,
  smoothScroll = false,
  defaultTheme = "system",
  enableSystem = true,
}: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
    >
      {smoothScroll ? (
        <SmoothScrollWrapper>{children}</SmoothScrollWrapper>
      ) : (
        children
      )}
    </ThemeProvider>
  );
}

/**
 * Smooth scroll wrapper using Lenis.
 * Lazy-loaded to avoid importing Lenis when not needed.
 */
function SmoothScrollWrapper({ children }: { children: React.ReactNode }) {
  // Dynamic import pattern — Lenis is only loaded when smoothScroll is true
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { ReactLenis } = require("lenis/react");

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
        syncTouch: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default Providers;
