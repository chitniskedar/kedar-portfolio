import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

import Container from "./Container";
import { Button } from "../ui/Button";
import { useTheme } from "../../providers/ThemeProvider";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Photography", href: "#photography" },
  { label: "Tech Stack", href: "#skills" },
  { label: "Education", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const RESUME_URL = "/documents/kedar_resume.pdf";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const openResume = () => {
    window.open(RESUME_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full border-b border-border-subtle bg-bg-base/75 backdrop-blur-xl">
        <Container
          size="wide"
          className="flex h-18 items-center justify-between"
        >
          {/* Logo */}

          <a
            href="#hero"
            className="text-lg font-semibold tracking-tight hover:opacity-80 transition-premium"
          >
            Kedar
          </a>

          {/* Desktop */}

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="animated-underline text-sm text-text-secondary transition-premium hover:text-text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right */}

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="hidden md:flex"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>

            <Button
              variant="primary"
              size="sm"
              className="hidden md:flex"
              onClick={openResume}
            >
              Resume
            </Button>

            {/* Mobile */}

            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </Container>

        {/* Mobile Menu */}

        <div
          className={`overflow-hidden transition-all duration-300 ${
            open ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="border-t border-border-subtle bg-bg-base md:hidden">
            <Container className="flex flex-col py-4">
              {links.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-3 text-text-secondary transition-premium hover:bg-bg-surface hover:text-text-primary"
                >
                  {item.label}
                </a>
              ))}

              <div className="mt-4 flex gap-2">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={toggleTheme}
                >
                  {theme === "dark" ? "Light Mode" : "Dark Mode"}
                </Button>

                <Button
                  variant="primary"
                  className="flex-1"
                  onClick={() => {
                    setOpen(false);
                    openResume();
                  }}
                >
                  Resume
                </Button>
              </div>
            </Container>
          </div>
        </div>
      </header>

      {/* Spacer */}

      <div className="h-[72px]" />
    </>
  );
}
