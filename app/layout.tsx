import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  subsets: ["thai","latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
});

export const metadata: Metadata = {
  title: "Calculators verlity by DTI-SAU",
  description: "เครื่องคำนวณหลากหลายโดย DTI-SAU",
  keywords: ["เครื่องคำนวณ", "BMR", "ฺBMI", "calculator", "DTI-SAU"], 
  icons: {
    icon: "/calculator.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kanit.className}`}
      >
        {children}
      </body>
    </html>
  );
}
