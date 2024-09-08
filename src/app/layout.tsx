import "./globals.css";

export const metadata = {
  title: "List of shows",
  description: "List of shows",
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
