import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
          {children}
        </Suspense>
      </body>
      <SpeedInsights />
    </html>
  );
}
