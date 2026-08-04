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
        src="/logo.png"
        alt="MindLabs Logo"
        width="180"
        height="auto"
        className="logo-light max-w-full h-auto"
      />
      <img
        src="/logo-dark.png"
        alt="MindLabs Logo"
        width="180"
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
          "absolute inset-0 -z-10 transition-all duration-500",
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-2xl"
            : "bg-transparent",
        )}
      />
      <div
        className={cn(
          "mx-auto max-w-[1248px] px-5 transition-all duration-500",
          isScrolled ? "py-1.5" : "py-3 lg:py-4",
        )}
      >
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex-shrink-0 transition-transform duration-300 hover:scale-105 group"
          >
            <Logo />
          </Link>

          <ul className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={cn(
                    "font-bold text-[15px] tracking-widest uppercase transition-all duration-300 relative group",
                    isActive(link.href)
                      ? currentTheme === "light"
                        ? "text-brand-blue"
                        : "text-brand-lime"
                      : currentTheme === "light"
                        ? "text-foreground hover:text-brand-blue"
                        : "text-white/80 hover:text-white",
                  )}
                >
                  {link.name}
                  <span
                    className={cn(
                      "absolute -bottom-2 left-0 h-0.5 transition-all duration-300 group-hover:w-full",
                      isActive(link.href) ? "w-full" : "w-0",
                      currentTheme === "light"
                        ? "bg-brand-blue"
                        : "bg-brand-lime",
                    )}
                  ></span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 lg:gap-6">
            <ThemeToggle
              className={cn(
                "transition-colors duration-500",
                currentTheme === "light" ? "text-foreground" : "text-white",
              )}
            />

            <div className="hidden sm:block">
              <Button
                asChild
                className={cn(
                  "h-auto px-6 py-2.5 rounded-full font-bold text-sm tracking-widest uppercase flex items-center gap-2 transition-all duration-500",
                  currentTheme === "light" ? "btn-primary" : "btn-lime",
                )}
              >
                <Link href="/contact">
                  Get in Touch
                  <ArrowUpRight className="w-4.5 h-4.5" />
                </Link>
              </Button>
            </div>

            <button
              className={cn(
                "lg:hidden w-12 h-12 flex items-center justify-center rounded-full relative z-[110] transition-all duration-300",
                currentTheme === "light"
                  ? "bg-brand-blue text-white"
                  : "bg-brand-lime text-brand-dark",
              )}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed top-0 left-0 w-full h-full bg-background z-[101] transition-all duration-500 ease-in-out lg:hidden overflow-hidden flex flex-col",
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible",
        )}
      >
        <div className="flex-1 flex flex-col justify-center items-center p-10">
          <ul className="flex flex-col gap-10 items-center text-center">
            {navLinks.map((link, i) => (
              <li
                key={link.name}
                className={cn(
                  "transition-all duration-500 delay-[" + i * 100 + "ms]",
                  isMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0",
                )}
              >
                <Link
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={cn(
                    "text-5xl font-bold transition-colors duration-300",
                    isActive(link.href)
                      ? "text-brand-blue dark:text-brand-lime"
                      : "text-foreground hover:text-brand-blue dark:hover:text-brand-lime",
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li
              className={cn(
                "mt-10 transition-all duration-500 delay-400",
                isMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0",
              )}
            >
              <Button
                asChild
                className="btn-primary dark:btn-lime h-auto px-14 py-6 rounded-full font-bold text-2xl transition-all duration-300"
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
            "p-10 border-t border-border/50 text-center transition-all duration-500 delay-500",
            isMenuOpen ? "opacity-100" : "opacity-0",
          )}
        >
          <p className="text-muted-foreground text-sm tracking-widest uppercase">
            info@mindlabs-me.com
          </p>
        </div>
      </div>
    </header>
  );
}
