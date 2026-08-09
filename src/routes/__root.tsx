import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { organizationSchema } from "../lib/structured-data";
import { Analytics } from "../components/site/Analytics";


const notFoundLinks = [
  { to: "/loan-programs", label: "Loan programs" },
  { to: "/calculator", label: "Mortgage calculator" },
  { to: "/mortgage-tools", label: "Mortgage tools" },
  { to: "/resources", label: "Resource center" },
  { to: "/contact", label: "Get my free mortgage quote" },
];

function NotFoundComponent() {
  useEffect(() => {
    document.title = "Page Not Found | Premier Lending NC";
    let tag = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (!tag) {
      tag = document.createElement("meta");
      tag.name = "robots";
      document.head.appendChild(tag);
    }
    tag.content = "noindex, follow";
    return () => {
      tag?.remove();
    };
  }, []);

  return (
    <main className="flex min-h-dvh items-center justify-center bg-background px-5 py-20">
      <div className="max-w-lg text-center">
        <p className="eyebrow text-gold">404</p>
        <h1 className="display mt-5 text-[2rem] text-navy sm:text-[2.6rem]">
          This page couldn't be found.
        </h1>
        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
          The page you're looking for doesn't exist or has moved. Here are a few places that may help.
        </p>
        <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2">
          {notFoundLinks.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="inline-flex min-h-11 items-center text-sm text-navy underline-offset-4 transition-colors hover:text-gold hover:underline"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex min-h-11 items-center justify-center bg-navy px-6 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-navy/90"
          >
            Return home
          </Link>
        </div>
      </div>
    </main>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "North Carolina Mortgage Broker | Premier Lending NC" },
      {
        name: "description",
        content:
          "Premier Lending NC helps North Carolina home buyers, homeowners and investors explore mortgage financing options with clarity and confidence.",
      },
      { name: "author", content: "Premier Lending NC" },
      { property: "og:site_name", content: "Premier Lending NC" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#07111F" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&family=Inter:wght@300;400;500;600;700&display=swap",
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(organizationSchema()),
      },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Analytics />
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );

}
