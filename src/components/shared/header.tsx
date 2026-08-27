"use client";

import Link from "next/link";
import { Button } from "@/components/ui";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/core/lib/utils";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Logo = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-[180px] h-[40px]" />;

  return (
    <div>
      <img
        src="/images/teqventiq logo/teqventiq light.webp"
        alt="Teqventiq Logo"
        width="100"
        height="auto"
        className="logo-light max-w-full h-auto"
      />
      <img
        src="/images/teqventiq logo/teqventiq dark.webp"
        alt="Teqventiq Logo"
        width="100"
        height="auto"
        className="logo-dark max-w-full h-auto"
      />
    </div>
  );
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(href + "/");
  };

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Initialize the scroll state immediately on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "auto";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    // If it's a hash link and we are on the homepage, scroll smoothly
    if (href.startsWith("/#") && window.location.pathname === "/") {
      e.preventDefault();
      const hash = href.replace("/", "");
      const elem = document.querySelector(hash);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `/${hash}`);
      }
    }
    // Always close the mobile menu on click
    closeMenu();
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "About Us", href: "/about" },
  ];

  const currentTheme = resolvedTheme || theme;
  const isDarkTheme = currentTheme === "dark";

  if (!mounted)
    return (
      <header
        className={cn(
          "fixed w-full z-[100] transition-all duration-500 py-3 lg:py-4 bg-transparent",
        )}
      >
        <div className="mx-auto max-w-[1248px] px-5">
          <div className="flex items-center justify-between h-16">
            <div className="w-[180px] h-[40px]" />
            <div className="w-12 h-12" />
          </div>
        </div>
      </header>
    );

  return (
    <header className="fixed w-full z-[100] top-0 left-0">
      {/* Background Layer */}
      <div
        className={cn(
          "absolute inset-0 -z-10 transition-all duration-300",
          isScrolled
            ? "bg-background/85 backdrop-blur-xl border-b border-border/50 shadow-sm"
            : "bg-transparent",
        )}
      />
      <div
        className={cn(
          "mx-auto max-w-[1280px] px-6 transition-all duration-300",
          isScrolled ? "py-2.5" : "py-4 lg:py-5",
        )}
      >
        <div className="flex items-center justify-between h-14 sm:h-16">
          <Link
            href="/"
            className="flex-shrink-0 transition-transform duration-300 hover:scale-[1.02] group"
          >
            <Logo />
          </Link>

          <ul className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={cn(
                    "font-semibold text-sm tracking-wide transition-all duration-200 relative py-1 group",
                    isActive(link.href)
                      ? "text-brand-blue font-bold"
                      : "text-foreground/80 hover:text-brand-blue",
                  )}
                >
                  {link.name}
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 h-0.5 bg-brand-blue rounded-full transition-all duration-300 group-hover:w-full",
                      isActive(link.href) ? "w-full" : "w-0",
                    )}
                  ></span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 sm:gap-5">
            <ThemeToggle
              className={cn(
                "transition-colors duration-300 text-foreground/80 hover:text-foreground",
              )}
            />

            <div className="hidden sm:block">
              <Button
                asChild
                className="btn-primary h-11 px-6 text-sm font-semibold flex items-center gap-2"
              >
                <Link href="/contact">
                  Get in Touch
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            <button
              className={cn(
                "lg:hidden w-10 h-10 flex items-center justify-center rounded-full border border-border/80 bg-background/80 backdrop-blur-md text-foreground hover:bg-accent relative z-[110] transition-all duration-200 active:scale-95 shadow-sm",
              )}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed top-0 left-0 w-full h-full bg-background/98 backdrop-blur-2xl z-[101] transition-all duration-400 ease-in-out lg:hidden overflow-hidden flex flex-col",
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none",
        )}
      >
        <div className="flex-1 flex flex-col justify-center items-center p-8">
          <ul className="flex flex-col gap-8 items-center text-center">
            {navLinks.map((link, i) => (
              <li
                key={link.name}
                className={cn(
                  "transition-all duration-300 delay-[" + i * 80 + "ms]",
                  isMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0",
                )}
              >
                <Link
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={cn(
                    "text-3xl sm:text-4xl font-bold transition-colors duration-200",
                    isActive(link.href)
                      ? "text-brand-blue"
                      : "text-foreground hover:text-brand-blue",
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li
              className={cn(
                "mt-8 transition-all duration-300 delay-300",
                isMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0",
              )}
            >
              <Button
                asChild
                className="btn-primary px-10 py-4 rounded-full font-bold text-lg"
              >
                <Link href="/contact" onClick={closeMenu}>
                  Get in Touch
                </Link>
              </Button>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Bottom Info */}
        <div
          className={cn(
            "p-8 border-t border-border/40 text-center transition-all duration-300 delay-400",
            isMenuOpen ? "opacity-100" : "opacity-0",
          )}
        >
          <p className="text-muted-foreground text-xs tracking-widest uppercase font-semibold">
            info@teqventiq.com
          </p>
        </div>
      </div>
    </header>
  );
}
