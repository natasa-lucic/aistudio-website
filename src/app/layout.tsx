import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arcadis AI Studio",
  description: "The future of Arcadis delivery through AI. Turning AI and digital capabilities into better outcomes for our clients.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased snap-y snap-proximity">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
