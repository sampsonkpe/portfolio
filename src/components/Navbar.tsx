import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
      <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
        
        <Link to="/" className="font-semibold">
          SK<span className="text-blue-500">.</span>
        </Link>

        <nav className="flex gap-8 text-sm">
          <Link
            to="/"
            className={pathname === "/" ? "" : "text-neutral-500"}
          >
            Projects
          </Link>

          <Link
            to="/about"
            className={pathname === "/about" ? "" : "text-neutral-500"}
          >
            About
          </Link>

          <Link
            to="/contact"
            className={pathname === "/contact" ? "" : "text-neutral-500"}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}