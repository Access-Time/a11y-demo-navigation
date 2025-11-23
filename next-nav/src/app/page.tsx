import Link from "next/link";
import type { Metadata } from "next";
import { NavButtons } from "./NavButtons";

export const metadata: Metadata = {
  title: "Navigation A11y Test Suite | Next.js App",
};

export default function Home() {
  return (
    <>
      <main>
        <h1>Next.js Navigation A11y Test Suite</h1>
        <p>Hybrid Navigation using Next.js App Router</p>

        <p>
          Next.js App Router uses client-side navigation for soft navigations,
          but content is server-rendered.
        </p>

        <section aria-labelledby="framework-link" className="nav-section">
          <h2 id="framework-link">Framework Link</h2>
          <p>
            Standard <code>&lt;Link&gt;</code> component.
          </p>
          <ul>
            <li>
              <Link href="/alpha">Alpha</Link>
            </li>
            <li>
              <Link href="/beta">Beta</Link>
            </li>
            <li>
              <Link href="/gamma">Gamma</Link>
            </li>
            <li>
              <Link href="/delta">Delta</Link>
            </li>
          </ul>
        </section>

        <section aria-labelledby="programmatic" className="nav-section">
          <h2 id="programmatic">Programmatic</h2>
          <p>
            Button triggering <code>router.push()</code>.
          </p>
          <NavButtons />
        </section>
      </main>
    </>
  );
}

