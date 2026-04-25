import { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation_menu";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export const NavigationSubsection = (): JSX.Element => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 60px",
        height: 72,
        background: scrolled
          ? "rgba(11, 13, 15, 0.88)"
          : "rgba(11, 13, 15, 0.6)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.07)"
          : "1px solid transparent",
        transition: "background 0.3s ease, border-color 0.3s ease",
      }}
    >
      {/* Logo */}
      <a
        href="/"
        style={{
          fontFamily: "'Epilogue', sans-serif",
          fontWeight: 800,
          fontSize: 22,
          color: "#f1f5f9",
          textDecoration: "none",
          letterSpacing: "-0.5px",
          lineHeight: 1,
        }}
      >
        <span style={{ color: "var(--green-primary)" }}>JP.</span>
      </a>

      {/* Nav links */}
      <NavigationMenu>
        <NavigationMenuList
          style={{ display: "flex", alignItems: "center", gap: 40, listStyle: "none" }}
        >
          {navLinks.map((link) => (
            <NavigationMenuItem key={link.label}>
              <NavigationMenuLink
                href={link.href}
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 15,
                  fontWeight: 500,
                  color: "#94a3b8",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                  display: "block",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#f1f5f9")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
              >
                {link.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* CTA */}
      <a
        href="mailto:pateljaimin325@outlook.com"
        className="btn-primary"
        style={{ padding: "10px 22px", fontSize: 14 }}
      >
        Hire Me
      </a>
    </nav>
  );
};
