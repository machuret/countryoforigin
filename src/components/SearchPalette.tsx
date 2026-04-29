"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import type { SearchEntry } from "@/lib/searchIndex";

/**
 * Cmd+K / Ctrl+K command palette. Pure client-side fuzzy match across
 * every static record on the site (~250 entries — small enough that
 * `includes()` over a tokenised haystack is faster than a real search
 * library, and keeps the bundle ~3KB).
 */
export function SearchPalette({ index }: { index: SearchEntry[] }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Open on Cmd+K / Ctrl+K
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Focus input + lock body scroll when open
  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => inputRef.current?.focus());
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setQuery("");
      setActive(0);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      // Show a curated default list grouped by category
      const buckets: Record<string, SearchEntry[]> = {};
      for (const e of index) {
        (buckets[e.category] ||= []).push(e);
      }
      const order = [
        "Species",
        "Recipe",
        "Area",
        "Compare",
        "Industry",
        "FAQ",
        "Glossary",
      ];
      const out: SearchEntry[] = [];
      for (const cat of order) {
        const list = buckets[cat] ?? [];
        out.push(...list.slice(0, 4));
      }
      return out;
    }
    const tokens = q.split(/\s+/);
    return index
      .map((e) => {
        const text = e.text.toLowerCase();
        const title = e.title.toLowerCase();
        let score = 0;
        for (const t of tokens) {
          if (title.includes(t)) score += 4;
          else if (text.includes(t)) score += 1;
        }
        return { e, score };
      })
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 30)
      .map((r) => r.e);
  }, [query, index]);

  // Reset active when results change
  useEffect(() => setActive(0), [query]);

  const select = (entry: SearchEntry) => {
    setOpen(false);
    // Defer navigation until next tick so the modal has unmounted
    requestAnimationFrame(() => {
      window.location.href = entry.href;
    });
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && results[active]) {
      e.preventDefault();
      select(results[active]);
    }
  };

  return (
    <>
      <button
        type="button"
        className="search-trigger"
        aria-label="Search the site"
        onClick={() => setOpen(true)}
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
          <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.6" />
          <path d="m11 11 3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
        <span>Search</span>
        <kbd className="search-trigger__kbd">⌘K</kbd>
      </button>

      {open && (
        <div
          className="search-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Search"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div className="search-modal" onKeyDown={onKey}>
            <div className="search-modal__inputrow">
              <svg
                width="18"
                height="18"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden
                style={{ flexShrink: 0 }}
              >
                <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.6" />
                <path d="m11 11 3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              <input
                ref={inputRef}
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search species, recipes, areas, FAQ…"
                className="search-modal__input"
                aria-label="Search query"
                autoComplete="off"
              />
              <kbd className="search-modal__esc">Esc</kbd>
            </div>

            <ul className="search-results" role="listbox">
              {results.length === 0 && query && (
                <li className="search-results__empty">
                  No matches for &ldquo;{query}&rdquo;
                </li>
              )}
              {results.map((r, i) => (
                <li
                  key={r.id}
                  role="option"
                  aria-selected={i === active}
                  className={`search-result${i === active ? " search-result--active" : ""}`}
                  onMouseEnter={() => setActive(i)}
                >
                  <Link
                    href={r.href}
                    onClick={(e) => {
                      e.preventDefault();
                      select(r);
                    }}
                    className="search-result__link"
                  >
                    <span className="search-result__cat">{r.category}</span>
                    <div className="search-result__body">
                      <strong>{r.title}</strong>
                      {r.blurb && <span>{r.blurb}</span>}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="search-modal__footer">
              <span>
                <kbd>↑</kbd> <kbd>↓</kbd> navigate
              </span>
              <span>
                <kbd>↵</kbd> select
              </span>
              <span>
                <kbd>Esc</kbd> close
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
