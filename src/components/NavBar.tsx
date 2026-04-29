"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

export type NavItem = { href: string; label: string; desc?: string };
export type NavGroup = { label: string; items: NavItem[] };

/**
 * Phase G+ — accessible client nav with:
 * - desktop mega-menu (hover + click + keyboard, aria-expanded, Escape, click-outside)
 * - mobile drawer (hamburger toggle, focus trap-lite, body scroll lock)
 * - animated transitions (opacity/transform/visibility)
 */
export function NavBar({
  groups,
  top,
  search,
}: {
  groups: NavGroup[];
  top: NavItem[];
  search?: React.ReactNode;
}) {
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // close menus on outside click and Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenGroup(null);
        setMobileOpen(false);
      }
    }
    function onClick(e: MouseEvent) {
      if (!navRef.current) return;
      if (!navRef.current.contains(e.target as Node)) setOpenGroup(null);
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  // body scroll lock when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav className="nav" ref={navRef} aria-label="Primary">
      <Link href="/" className="nav-logo-link" onClick={() => setMobileOpen(false)}>
        <div className="nav-logo">
          <div className="nav-logo-main">Country of Origin</div>
          <div className="nav-logo-sub">Australian Seafood Guide</div>
        </div>
      </Link>

      {/* Desktop links */}
      <div className="nav-links" data-mobile-open={mobileOpen ? "true" : "false"}>
        {groups.map((g) => (
          <NavGroupMenu
            key={g.label}
            group={g}
            open={openGroup === g.label}
            onToggle={() =>
              setOpenGroup((cur) => (cur === g.label ? null : g.label))
            }
            onClose={() => setOpenGroup(null)}
          />
        ))}
        {top.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="nav-link"
            onClick={() => setMobileOpen(false)}
          >
            {l.label}
          </Link>
        ))}
        {search}
        <Link
          href="/compare"
          className="nav-cta"
          onClick={() => setMobileOpen(false)}
        >
          Compare Now
        </Link>
      </div>

      <button
        type="button"
        className="nav-burger"
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen((v) => !v)}
      >
        <span aria-hidden="true" data-open={mobileOpen ? "true" : "false"} />
        <span aria-hidden="true" data-open={mobileOpen ? "true" : "false"} />
        <span aria-hidden="true" data-open={mobileOpen ? "true" : "false"} />
      </button>
    </nav>
  );
}

function NavGroupMenu({
  group,
  open,
  onToggle,
  onClose,
}: {
  group: NavGroup;
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  const id = useId();
  const panelId = `nav-panel-${id}`;
  return (
    <div className="nav-group" data-open={open ? "true" : "false"}>
      <button
        type="button"
        className="nav-group-trigger"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
      >
        {group.label}
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          aria-hidden="true"
          className="nav-group-chev"
        >
          <path d="M2 3.5l3 3 3-3" stroke="currentColor" fill="none" strokeWidth="1.5" />
        </svg>
      </button>
      <div
        className="nav-panel"
        id={panelId}
        role="menu"
        aria-hidden={!open}
      >
        {group.items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="nav-panel-item"
            role="menuitem"
            onClick={onClose}
          >
            <strong>{item.label}</strong>
            {item.desc && <span>{item.desc}</span>}
          </Link>
        ))}
      </div>
    </div>
  );
}
