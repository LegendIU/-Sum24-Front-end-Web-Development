import React from "react";
import "../styles/globals.css";

export const metadata = {
  title: "My Personal Website",
  description: "Personal website for Galkin Vladislav Vadimovich",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body>{children}</body>
  </html>
);

export default RootLayout;
