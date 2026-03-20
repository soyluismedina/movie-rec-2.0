import "./globals.css";
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
    </html>
  );
}
