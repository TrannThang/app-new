import "./globals.css";
import { supportscolor } from "supports-color";
import Header from "@/components/layouts/Header";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
