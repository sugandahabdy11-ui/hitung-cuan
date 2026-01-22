import { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

interface LegalLayoutProps {
  children: ReactNode;
}

export function LegalLayout({ children }: LegalLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Header */}
      <Header />

      {/* Legal Content */}
      <main className="flex-1" role="main">
        <div className="container max-w-3xl py-12">
          <article className="prose prose-slate dark:prose-invert">
            {children}
          </article>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
