import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SlackMetrics – Measure Team Productivity from Slack Patterns",
  description:
    "Analyze Slack workspace metadata to identify productivity trends, meeting overload, and communication bottlenecks — without reading a single message."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://umami.microtool.dev/script.js"
          data-website-id="75ff3e18-95b1-4211-a7b5-04b36af4dc70"
        />
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
