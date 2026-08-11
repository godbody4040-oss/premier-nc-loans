import { useEffect } from "react";
import { useLanguage } from "@/lib/i18n";
import { es } from "@/lib/i18n-es";

/**
 * Applies Spanish translations to the already-rendered page.
 * Design, layout and behaviour are untouched — only visible text is swapped.
 * Anything without a translation stays in English.
 */

const SKIP_TAGS = new Set(["SCRIPT", "STYLE", "NOSCRIPT", "CODE", "SVG", "PATH"]);
const ATTRS = ["placeholder", "aria-label", "title", "alt"] as const;

type Original = { node: Text; value: string };

const originals: Original[] = [];
const attrOriginals: { el: Element; attr: string; value: string }[] = [];

function lookup(raw: string): string | null {
  const trimmed = raw.trim();
  if (!trimmed || !/[a-zA-Z]/.test(trimmed)) return null;
  const hit = es[trimmed];
  if (!hit) return null;
  return raw.replace(trimmed, hit);
}

function translateTextNodes(root: Node) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = (node as Text).parentElement;
      if (!parent || SKIP_TAGS.has(parent.tagName)) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });
  let node = walker.nextNode() as Text | null;
  while (node) {
    const next = lookup(node.nodeValue ?? "");
    if (next && next !== node.nodeValue) {
      originals.push({ node, value: node.nodeValue ?? "" });
      node.nodeValue = next;
    }
    node = walker.nextNode() as Text | null;
  }
}

function translateAttributes(root: Element | Document) {
  for (const attr of ATTRS) {
    root.querySelectorAll(`[${attr}]`).forEach((el) => {
      const current = el.getAttribute(attr);
      if (!current) return;
      const next = lookup(current);
      if (next && next !== current) {
        attrOriginals.push({ el, attr, value: current });
        el.setAttribute(attr, next);
      }
    });
  }
}

function translateAll(root: Element) {
  translateTextNodes(root);
  translateAttributes(root);
}

function restoreAll() {
  while (originals.length) {
    const item = originals.pop()!;
    if (item.node.isConnected) item.node.nodeValue = item.value;
  }
  while (attrOriginals.length) {
    const item = attrOriginals.pop()!;
    if (item.el.isConnected) item.el.setAttribute(item.attr, item.value);
  }
}

export function Translator() {
  const { lang } = useLanguage();

  useEffect(() => {
    if (typeof document === "undefined") return;
    if (lang !== "es") {
      restoreAll();
      return;
    }

    let frame = 0;
    const run = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => translateAll(document.body));
    };

    run();

    const observer = new MutationObserver((records) => {
      for (const record of records) {
        if (record.addedNodes.length || record.type === "characterData" || record.type === "attributes") {
          run();
          return;
        }
      }
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: [...ATTRS],
    });

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [lang]);

  useEffect(() => () => restoreAll(), []);

  return null;
}
