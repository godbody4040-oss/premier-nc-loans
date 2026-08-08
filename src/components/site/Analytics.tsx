import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";
import { initAnalytics, trackPageView } from "@/lib/analytics";

/**
 * Boots GA4 once and reports a page view on every client-side route change.
 * Lovable's built-in analytics runs automatically alongside this.
 */
export function Analytics() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    initAnalytics();
  }, []);

  useEffect(() => {
    // Let the route's head() apply before reading document.title.
    const id = window.setTimeout(() => trackPageView(pathname), 60);
    return () => window.clearTimeout(id);
  }, [pathname]);

  return null;
}
