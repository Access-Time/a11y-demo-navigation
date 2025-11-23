import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Alpha Case | Next.js',
};

export default function AlphaPage() {
  return (
    <>
        <nav>
            <Link href="/">← Back to Dashboard</Link>
        </nav>
        <main>
            <h1>Test Case Alpha</h1>
            <p>This page represents the <strong>Ideal Structure</strong>.</p>
            <ul>
                <li>Has a <code>&lt;main&gt;</code> landmark.</li>
                <li>Has a correct <code>&lt;h1&gt;</code>.</li>
                <li>Updates <code>&lt;title&gt;</code> via metadata export.</li>
            </ul>
        </main>
    </>
  );
}
