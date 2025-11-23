import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Beta Case | Next.js',
};

export default function BetaPage() {
  return (
    <>
        <nav>
            <Link href="/">← Back to Dashboard</Link>
        </nav>
        <main>
            {/* Missing H1 */}
            <h2>Test Case Beta</h2>
            <p>This page represents <strong>Structural Hierarchy Issues</strong>.</p>
            <ul>
                <li>Has a <code>&lt;main&gt;</code> landmark.</li>
                <li><strong>Missing <code>&lt;h1&gt;</code></strong> (starts with h2).</li>
                <li>Updates <code>&lt;title&gt;</code> via metadata export.</li>
            </ul>
        </main>
    </>
  );
}
