import { NavLink, Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Calculator, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/kalkulator-gaji-bersih-pph21", label: "Kalkulator PPh 21" },
  { href: "/kalkulator-kpr", label: "Kalkulator KPR" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      "px-3 py-2 text-sm font-medium rounded-lg transition-colors",
      isActive
        ? "bg-secondary text-foreground"
        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
    );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        {/* LOGO / BRAND */}
        <Link
          to="/"
          className="flex items-center gap-2 font-bold text-lg"
          aria-label="CalcTools Finance Indonesia"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Calculator className="h-4 w-4" />
          </div>
          <span className="hidden sm:inline">CalcTools Finance</span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={navClass}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* RIGHT ACTION */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* MOBILE MENU BUTTON */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden h-9 w-9"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      {/* MOBILE NAV */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-border bg-background">
          <div className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={navClass}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
