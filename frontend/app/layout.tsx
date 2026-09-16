import "./globals.css";

export const metadata = {
  title: "Local AI Coder",
  description: "AI coding assistant powered by Ollama",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}