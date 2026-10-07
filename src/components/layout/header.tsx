"use client";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
const links = [
  ["Produit", "#produit"],
  ["Comment ça marche", "#fonctionnement"],
  ["Pour les commerces", "#commerces"],
  ["À propos", "#apropos"],
];
export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduced = useReducedMotion();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (!open) return;
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        document.getElementById("menu-button")?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className={"header " + (scrolled ? "scrolled" : "")}>
      <div className="nav-wrap">
        <a className="wordmark" href="#" aria-label="CHOUFLY, accueil">
          CHOUFLY<span>®</span>
        </a>
        <nav aria-label="Navigation principale" className="desktop-nav">
          {links.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <a className="merchant-link" href="#commerces">
            Je suis commerçant
          </a>
          <a className="nav-cta" href="#demo">
            Essayer CHOUFLY
            <ArrowUpRight size={15} />
          </a>
        </div>
        <button
          id="menu-button"
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            aria-label="Navigation mobile"
            className="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: reduced ? 0 : 0.2 }}
          >
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>
                {label}
                <ArrowUpRight size={16} />
              </a>
            ))}
            <a href="#demo" onClick={() => setOpen(false)}>
              Essayer la démo
              <ArrowUpRight size={16} />
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
