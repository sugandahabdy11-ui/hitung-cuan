import { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

interface Props {
  children: ReactNode;
}

export function LegalLayout({ children }: Props) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <div className="container max-w-3xl py-12 prose prose-slate dark:prose-invert">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
}
