import { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Site Header */}
      <Header />

      {/* Main Content */}
      <main
        id="main-content"
        role="main"
        className="flex-1"
      >
        {children}
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
