import { ReactNode } from "react";
import { Header } from "@/components/Header";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* HEADER / NAVBAR */}
      <Header />

      {/* MAIN CONTENT */}
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
