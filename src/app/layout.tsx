import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CalendarUI - Gestiona tu tiempo",
  description: "Gestiona tu tiempo, con notas organizando cada día, la semana o mes completo. Todo en un solo lugar con CalendarUI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
