import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode, useState } from "react";
import { useAuth } from "./providers/AuthContext";

interface LayoutProps {
  children: ReactNode;
}

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Core Services" },
  { href: "/industries", label: "Industries" },
  { href: "/contact", label: "Contact" }
];

export function Layout({ children }: LayoutProps) {
  const router = useRouter();
  const { isAuthenticated, logout } = useAuth();
   const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen steel-gradient flex flex-col">
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-30">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-accent-500/10 border border-accent-500/40 flex items-center justify-center text-accent-500 font-semibold text-lg">
              MM
            </div>
            <div>
              <div className="font-semibold tracking-wide text-slate-100">
                MM Project Engineers
              </div>
              <div className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Engineering • Fabrication • Erection
              </div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors ${
                  router.pathname === item.href
                    ? "text-accent-500"
                    : "text-slate-300 hover:text-accent-400"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/client/dashboard"
              className="pill border-accent-500/60 text-accent-300 hover:text-accent-100 hover:border-accent-400/80"
            >
              Client Dashboard
            </Link>
            {isAuthenticated ? (
              <button
                onClick={logout}
                className="text-xs text-slate-400 hover:text-slate-100"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/login"
                className="text-xs text-slate-400 hover:text-slate-100"
              >
                Login
              </Link>
            )}
          </nav>
          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md border border-slate-700 bg-slate-900/60 px-2.5 py-1.5 text-slate-200"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label="Toggle navigation menu"
          >
            <span className="sr-only">Open main menu</span>
            <div className="space-y-0.5">
              <span className="block h-0.5 w-5 bg-slate-200" />
              <span className="block h-0.5 w-4 bg-slate-400" />
              <span className="block h-0.5 w-3 bg-slate-500" />
            </div>
          </button>
        </div>
        {/* Mobile nav panel */}
        {mobileOpen && (
          <div className="md:hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur">
            <div className="mx-auto max-w-6xl px-4 py-3 space-y-3 text-sm">
              <div className="flex flex-wrap gap-3">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-3 py-1.5 rounded-md border text-xs ${
                      router.pathname === item.href
                        ? "border-accent-500 text-accent-200 bg-accent-500/10"
                        : "border-slate-700 text-slate-200 bg-slate-900/60"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <Link
                  href="/client/dashboard"
                  className="inline-flex items-center px-3 py-1.5 rounded-md border border-accent-500/70 bg-accent-500/10 text-accent-200"
                  onClick={() => setMobileOpen(false)}
                >
                  Client Dashboard
                </Link>
                {isAuthenticated ? (
                  <button
                    onClick={() => {
                      logout();
                      setMobileOpen(false);
                    }}
                    className="text-slate-300"
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    href="/login"
                    className="text-slate-300"
                    onClick={() => setMobileOpen(false)}
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-4 py-10 lg:py-12">{children}</div>
      </main>

      <footer className="border-t border-slate-800 bg-slate-950/80">
        <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>© {new Date().getFullYear()} MM Project Engineers. All rights reserved.</div>
          <div className="flex flex-wrap gap-3 md:gap-6">
            <span>Pune • +91 96044 90274 • +91 70835 31790</span>
            <span className="hidden md:inline-block">Quality • Safety • Timely Delivery</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

